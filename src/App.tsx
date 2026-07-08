import * as React from 'react'
import { Container, CssBaseline, Divider } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"
import BottomNav from "./components/BottomNav"
import Context from "./components/Context"
import type { PortfolioContent } from "./content-types"

import Content from "./content.json"

function App() {

  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const [language, setLanguage] = React.useState<'en' | 'pt'>('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'pt' : 'en'));
  }

  const context = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      language,
      toggleLanguage,
    }), [language]);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
                primary: { main: '#e5e5e5', light: '#f5f5f5', dark: '#a3a3a3' },
                background: { default: '#0a0a0a', paper: '#141414' },
                text: { primary: '#f5f5f5', secondary: '#a3a3a3' },
                divider: '#2a2a2a',
              }
            : {
                primary: { main: '#171717', light: '#404040', dark: '#0a0a0a' },
                background: { default: '#ffffff', paper: '#fafafa' },
                text: { primary: '#171717', secondary: '#737373' },
                divider: '#e5e5e5',
              }),
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: { fontWeight: 700, fontSize: '2.4rem', lineHeight: 1.2 },
          h6: { fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.4 },
          body1: { fontWeight: 400, fontSize: '0.85rem', lineHeight: 1.7 },
          body2: { fontWeight: 400, fontSize: '0.8rem' },
          overline: {
            fontWeight: 600,
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                scrollBehavior: 'smooth',
              },
            },
          },
          MuiContainer: {
            styleOverrides: {
              root: { paddingTop: '2rem', paddingBottom: '6rem', maxWidth: '700px !important' },
            },
          },
          MuiAvatar: {
            styleOverrides: {
              root: ({ theme }) => ({
                border: `2px solid ${theme.palette.divider}`,
                boxShadow: 'none',
              }),
            },
          },
          MuiDivider: {
            styleOverrides: {
              root: ({ theme }) => ({
                borderColor: theme.palette.divider,
                marginTop: theme.spacing(4),
                marginBottom: theme.spacing(4),
              }),
            },
          },
          MuiLink: {
            styleOverrides: {
              root: ({ theme }) => ({
                color: theme.palette.text.primary,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }),
            },
          },
          MuiChip: {
            styleOverrides: {
              root: ({ theme }) => ({
                borderRadius: 6,
                fontWeight: 500,
                fontSize: '0.8rem',
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.06)'
                    : 'rgba(0,0,0,0.06)',
                color: theme.palette.text.primary,
              }),
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 8,
                fontWeight: 500,
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
        },
      }),
    [mode],
  );

  const CONTENT = Content as PortfolioContent;

  return (
    <Context.Provider value={context}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Header
            data={CONTENT.header}
            language={language}
            toggleLanguage={toggleLanguage}
          />
          {
            CONTENT.sections.map((section, index) => (
              <React.Fragment key={section.type}>
                {index > 0 && <Divider />}
                <Section section={section} language={language} />
              </React.Fragment>
            ))
          }
          
          <Footer quote={CONTENT.closingQuote} language={language} />
        </Container>
        <BottomNav language={language} />
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App
