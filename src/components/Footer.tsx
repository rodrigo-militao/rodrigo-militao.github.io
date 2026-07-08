import { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { t } from '../content-types';
import TypewriterText from './TypewriterText';
import type { I18nString } from '../content-types';

export default function Footer({ quote, language }: { quote?: I18nString; language: 'en' | 'pt' }) {
  const theme = useTheme();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const resolved = quote ? t(quote, language) : '';

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      component="footer"
      sx={{
        textAlign: 'center',
        py: 6,
        mt: 2,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      {quote && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontStyle: 'italic', lineHeight: 1.6, maxWidth: 500, mx: 'auto', minHeight: '1.5em' }}
        >
          <TypewriterText text={resolved} startTyping={visible} />
        </Typography>
      )}
    </Box>
  );
}
