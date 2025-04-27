import * as React from 'react'
import { Container, CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "./components/Header"
import Section from "./components/Section"
import Context from "./components/Context"

import EnglishContent from "./content-en.json"
import PortugueseContent from "./content-pt.json"

function App() {
  const context = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }), []);
    

  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const [language, setLanguage] = React.useState<'en' | 'pt'>('en');
  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {},
        palette: {
          mode,
          ...(mode === 'dark' && {
            background: {
              default: '#111827',
            }
          })
        },
      }),
    [mode],
  );

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'pt' : 'en'));
  }

  const CONTENT = language == "en" ? EnglishContent : PortugueseContent;

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
            CONTENT.sections.map(section => 
              <Section
                key={section.name}
                name={section.name}
                content={section.content}
              />)
          }
        </Container>
      </ThemeProvider>
    </Context.Provider>
  )
}

export default App
