import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      '@mui/material/Tooltip',
      '@mui/material/styles',
      '@mui/material/Grid',
      '@mui/material/IconButton',
      '@mui/material/Divider',
      '@mui/material/Box',
      '@mui/material/Chip',
      '@mui/icons-material/DarkMode',
      '@mui/icons-material/LightMode',
      '@mui/icons-material/Code',
      '@mui/icons-material/Storage',
      '@mui/icons-material/BuildCircle',
      '@mui/icons-material/Security',
      '@mui/icons-material/Cloud',
      '@mui/icons-material/Terminal',
      '@mui/icons-material/OpenInNew',
      '@mui/icons-material/Close',
      '@mui/icons-material/AutoStories',
      '@mui/icons-material/CheckCircle',
      '@mui/icons-material/BookmarkAdd',
      '@mui/icons-material/Mail',
      '@mui/icons-material/LinkedIn',
      '@mui/icons-material/GitHub',
      '@mui/icons-material/Home',
      '@mui/icons-material/Article',
      '@mui/icons-material/X',
    ],
  },
  plugins: [react()],
})
