import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { t } from '../content-types';
import type { ExperienceItem } from '../content-types';

function Logo({ item }: { item: ExperienceItem }) {
  if (item.logoUrl) {
    return (
      <Avatar
        src={item.logoUrl}
        alt={item.company}
        sx={{ width: 32, height: 32, flexShrink: 0 }}
      >
        {item.company.charAt(0)}
      </Avatar>
    );
  }
  return (
    <Avatar
      sx={{
        width: 32,
        height: 32,
        bgcolor: 'transparent',
        border: '1px solid',
        borderColor: 'divider',
        color: 'text.secondary',
        fontSize: '0.8rem',
        fontWeight: 600,
        flexShrink: 0,
      }}
    >
      {item.company.charAt(0)}
    </Avatar>
  );
}

export default function ExperienceCard({ item, language }: { item: ExperienceItem; language: 'en' | 'pt' }) {
  return (
    <Box
      component="a"
      href={item.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: 'flex',
        gap: 2,
        py: 1.5,
        textDecoration: 'none',
        color: 'inherit',
        borderRadius: 1,
        px: 1.5,
        mx: -1.5,
        transition: 'background-color 0.2s ease',
        '&:hover': {
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(255,255,255,0.03)'
              : 'rgba(0,0,0,0.02)',
        },
      }}
    >
      <Logo item={item} />

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 1.5 }}>
          <Typography variant="h6" color="text.primary">
            {item.company}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ flexShrink: 0 }}>
            {t(item.dateRange, language)}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400, mt: 0.15 }}>
          {t(item.role, language)}
        </Typography>
        {item.description && (
          <Typography variant="body1" color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.5 }}>
            {t(item.description, language)}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
