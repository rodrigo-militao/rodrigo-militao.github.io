import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { t } from '../content-types';
import type { BlogItem } from '../content-types';

export default function BlogCard({ item, language }: { item: BlogItem; language: 'en' | 'pt' }) {
  return (
    <Box sx={{ py: 2.5, '&:not(:last-of-type)': { borderBottom: '1px solid', borderColor: 'divider' } }}>
      <Link
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        color="text.primary"
        underline="hover"
        sx={{ fontWeight: 500, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
      >
        {t(item.title, language)}
        <OpenInNewIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
      </Link>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.25 }}>
        {t(item.date, language)}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.5 }}>
        {t(item.excerpt, language)}
      </Typography>
    </Box>
  );
}
