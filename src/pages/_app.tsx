import { AppProps } from 'next/app';
import React, { createContext } from 'react';
import Header from '../components/common/Header';
import { GlobalStyle } from '../styles/global-styles';
import { MuiCustomStyle } from '../styles/muiCustom';
import { lightTheme, darkTheme, Theme } from '../styles/theme';
import { NextSeo } from 'next-seo';
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
        <NextSeo
          title="꿀잠"
          titleTemplate="꿀잠"
          defaultTitle="꿀잠"
          description="바쁜 당신을 위한 수면 계산기"
          canonical="https://www.sleepfit.site/"
          openGraph={{
            url: 'https://www.sleepfit.site/',
            title: '꿀잠',
            description: '바쁜 당신을 위한 수면 계산기. ',
            images: [
              {
                url: '../public/appStore.png',
                width: 800,
                height: 420,
                alt: '꿀잠',
              },
            ],
          }}
        />
        <GlobalStyle theme={theme === lightTheme ? lightTheme : darkTheme} />
        <MuiCustomStyle theme={theme === lightTheme ? lightTheme : darkTheme} />

        <Header />

        <Component {...pageProps} />
      </>
    </ThemeContext.Provider>
  );
};

export default app;
