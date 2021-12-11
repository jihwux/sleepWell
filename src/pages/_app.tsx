import { AppProps } from 'next/app';
import React, { createContext } from 'react';
import Header from '../components/common/Header';
import { GlobalStyle } from '../styles/global-styles';
import { lightTheme, darkTheme, Theme } from '../styles/theme';

import { useDarkMode } from '../hooks/useDarkMode';

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

const app = ({ Component, pageProps }: AppProps) => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>
        <GlobalStyle theme={theme === lightTheme ? lightTheme : darkTheme} />
        <Header />
        <Component {...pageProps} />
      </>
    </ThemeContext.Provider>
  );
};

export default app;
