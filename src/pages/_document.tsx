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
          <link rel="icon" href=".//favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href=".//apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href=".//favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href=".//favicon-16x16.png" />
          <link rel="manifest" href=".//site.webmanifest" />
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
          <meta name="naver-site-verification" content="25fd5a14fddc8f6f9013c5a78efe50f4339053ec" />
          <meta name="google-site-verification" content="j8oqjfHaWtzRdXV1dGHj-j47ttB4wYUwRnIGDirPLrw" />

          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean"
            rel="stylesheet"
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8286719596729035"
            crossOrigin="anonymous"
          ></script>
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
