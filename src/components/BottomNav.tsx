import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import XIcon from '@mui/icons-material/X';
import Context from "./Context";

const btnSx = {
  opacity: 0.65,
  transition: 'transform 0.2s ease, opacity 0.2s ease',
  '&:hover': { transform: 'scale(1.2)', opacity: 1 },
};

export default function BottomNav({ language }: { language: 'en' | 'pt' }) {
  const theme = useTheme();
  const context = React.useContext(Context);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 30,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 1200,
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          py: 1,
          px: 2,
          borderRadius: 3,
          backgroundColor: (t) => t.palette.mode === 'dark' ? 'rgba(20,20,20,0.85)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: (t) => t.shadows[2],
          pointerEvents: 'auto',
        }}
      >
        <IconButton
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          color="inherit"
          size="small"
          sx={btnSx}
        >
          <HomeIcon sx={{ fontSize: 18 }} />
        </IconButton>

         <IconButton
          component="a"
          href="https://rodrigomilitao.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          size="small"
          sx={btnSx}
        >
          <ArticleIcon sx={{ fontSize: 18 }} />
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/rodrigo-militao/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          size="small"
          sx={btnSx}
        >
          <GitHubIcon sx={{ fontSize: 18 }} />
        </IconButton>

        <IconButton
          component="a"
          href="https://linkedin.com/in/rodrigo-militao/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          size="small"
          sx={btnSx}
        >
          <LinkedInIcon sx={{ fontSize: 18 }} />
        </IconButton>

        <IconButton
          component="a"
          href="https://x.com/RodrigoMilitao8"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          size="small"
          sx={btnSx}
        >
          <XIcon sx={{ fontSize: 16 }} />
        </IconButton>

        <Box sx={{ width: 1, height: 16, borderLeft: '1px solid', borderColor: 'divider' }} />

        <Button
          onClick={context.toggleLanguage}
          color="inherit"
          size="small"
          sx={{ minWidth: 28, height: 28, fontSize: '0.65rem', fontWeight: 600, opacity: 0.65, transition: 'opacity 0.2s', '&:hover': { opacity: 1 } }}
        >
          {language === 'en' ? 'PT' : 'EN'}
        </Button>

        <IconButton
          onClick={context.toggleColorMode}
          color="inherit"
          size="small"
          sx={btnSx}
        >
          {theme.palette.mode === 'dark' ? <LightModeIcon sx={{ fontSize: 16 }} /> : <DarkModeIcon sx={{ fontSize: 16 }} />}
        </IconButton>
      </Box>
    </Box>
  );
}
