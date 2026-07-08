import * as React from 'react';
import Box from '@mui/material/Box';
import { Link, Typography, Avatar } from '@mui/material';
import { t } from '../content-types';
import TypewriterText from './TypewriterText';
import type { HeaderData } from '../content-types';

export default function Header(prop: { data: HeaderData; language: 'en' | 'pt'; toggleLanguage: any }) {
  return (
    <>
      {/* Centered hero */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 6 }}>
        <Avatar
          alt="Avatar image"
          src={prop.data.imgPath}
          sx={{ width: 100, height: 100, mb: 2.5 }}
        />

        <Typography variant="h1" color="text.primary" sx={{ mb: 1 }}>
          {prop.data.name}
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480, lineHeight: 1.6, minHeight: '1.5em' }}>
          <TypewriterText text={t(prop.data.description, prop.language)} />
        </Typography>
      </Box>
    </>
  );
}
