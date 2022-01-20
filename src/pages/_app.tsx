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
          description="바쁜 당신을 위한 수면 계산기"
          canonical="https://www.sleepfit.site/"
          openGraph={{
            type: 'website',
            url: 'https://www.sleepfit.site/',
            title: '꿀잠',
            description: '바쁜 당신을 위한 수면 계산기',
            images: [
              {
                url: '/images/brandLogo',
                width: 1200,
                height: 630,
                alt: '램수면 걔산기',
                type: 'image/png',
              },
            ],
            site_name: '꿀잠',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
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
