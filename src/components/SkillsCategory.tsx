import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import TerminalIcon from '@mui/icons-material/Terminal';
import { t } from '../content-types';
import type { ReactElement } from 'react';
import type { SkillsCategory as SkillsCategoryType } from '../content-types';

const iconMap: Record<string, ReactElement> = {
  Code: <CodeIcon sx={{ fontSize: 18 }} />,
  Storage: <StorageIcon sx={{ fontSize: 18 }} />,
  Build: <BuildCircleIcon sx={{ fontSize: 18 }} />,
  Security: <SecurityIcon sx={{ fontSize: 18 }} />,
  Cloud: <CloudIcon sx={{ fontSize: 18 }} />,
  Terminal: <TerminalIcon sx={{ fontSize: 18 }} />,
};

export default function SkillsCategory({ category, language }: { category: SkillsCategoryType; language: 'en' | 'pt' }) {
  return (
    <Box sx={{ mb: 2.5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        {iconMap[category.icon] || <CodeIcon sx={{ fontSize: 18 }} />}
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
          {t(category.category, language)}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
        {category.skills.map((skill) => (
          <Chip key={skill} label={skill} size="small" />
        ))}
      </Box>
    </Box>
  );
}
