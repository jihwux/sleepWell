import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>꿀잠</title>
          <meta name="description" content="바쁜 당신을 위한 수면 계산기" />
          <meta property="og:url" content="https://sleepcycle.tech/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="꿀잠" />
          <meta property="og:description" content="바쁜 당신을 위한 수면 계산기" />
          <meta property="og:image" content=".//images/brandThum.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="" />
          <meta property="twitter:url" content="https://sleepcycle.tech/" />
          <meta name="twitter:title" content="꿀잠" />
          <meta name="twitter:description" content="바쁜 당신을 위한 수면 계산기" />
          <meta name="twitter:image" content=".//images/brandThum.png" />

          <meta name="naver-site-verification" content="f9452db307d2fe8e78df07952649bb7ec8442416" />
          <meta name="google-site-verification" content="xE71eHQcrVsYzKTZnn_sv4wh_Q7Yay6_8dfiaG_ao5g" />
          <link rel="icon" href=".//favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href=".//apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href=".//favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href=".//favicon-16x16.png" />
          <link rel="manifest" href=".//site.webmanifest" />
          <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean"
            rel="stylesheet"
          />
          {/* <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8286719596729035"
            crossOrigin="anonymous"
          ></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
