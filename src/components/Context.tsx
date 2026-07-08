import * as React from 'react'

export default React.createContext({
  toggleColorMode: () => {},
  language: 'en' as 'en' | 'pt',
  toggleLanguage: () => {},
});
