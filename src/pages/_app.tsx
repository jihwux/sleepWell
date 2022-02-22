import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { createContext, useEffect, useState } from 'react';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <NextSeo
          title="꿀잠"
          description="바쁜 당신을 위한 수면 계산기"
          canonical="https://sleepcycle.tech/"
          openGraph={{
            type: 'website',
            url: 'https://sleepcycle.tech/',
            title: '꿀잠',
            description: '바쁜 당신을 위한 수면 계산기',
            images: [
              {
                url: '/images/brandThum.png',
                width: 600,
                height: 300,
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
      </Head>
      <GlobalStyle theme={theme === lightTheme ? lightTheme : darkTheme} />
      <MuiCustomStyle theme={theme === lightTheme ? lightTheme : darkTheme} />

      <Header />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
};

export default app;
