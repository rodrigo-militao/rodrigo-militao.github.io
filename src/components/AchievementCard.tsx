import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { t } from '../content-types';
import type { AchievementItem } from '../content-types';

function MicrosoftLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <rect x="1" y="1" width="8.5" height="8.5" fill="#F25022" />
      <rect x="11.5" y="1" width="8.5" height="8.5" fill="#7FBA00" />
      <rect x="1" y="11.5" width="8.5" height="8.5" fill="#00A4EF" />
      <rect x="11.5" y="11.5" width="8.5" height="8.5" fill="#FFB900" />
    </svg>
  );
}

export default function AchievementCard({ item, language }: { item: AchievementItem; language: 'en' | 'pt' }) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        gap: 1.5,
        alignItems: 'flex-start',
        transition: 'background-color 0.2s ease',
        '&:hover': {
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(255,255,255,0.03)'
              : 'rgba(0,0,0,0.02)',
        },
      }}
    >
      <MicrosoftLogo />
      <Box sx={{ minWidth: 0 }}>
        <Typography variant="h6" color="text.primary">
          {item.link ? (
            <Box component="a" href={item.link} target="_blank" rel="noopener noreferrer"
              sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              {t(item.title, language)}
            </Box>
          ) : (
            t(item.title, language)
          )}
        </Typography>
        {item.date && (
          <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.25 }}>
            {item.date}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.5 }}>
          {t(item.description, language)}
        </Typography>
      </Box>
    </Box>
  );
}
