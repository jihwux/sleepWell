import React, { createContext } from 'react';
import Router from './Router';

import { GlobalStyle } from './global-styles';
import { lightTheme, darkTheme, Theme } from './theme';
import { useDarkMode } from './hooks/useDarkMode';

interface ContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,
  toggleTheme: () => {
    return null;
  },
});

export default function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>
        <GlobalStyle theme={theme === lightTheme ? lightTheme : darkTheme} />
        <Router />
      </>
    </ThemeContext.Provider>
  );
}
