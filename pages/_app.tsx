import { AppProps } from 'next/app';
import Header from '../components/Header';
import SleepCalc from '../components/SleepCalc';

import GlobalStyle from '../styles/GlobalStyle';
const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Component {...pageProps} />
      <div></div>
    </>
  );
};

export default app;
