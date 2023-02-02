import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Cardly" />
        <meta name="twitter:title" content="Cardly" />
        <meta name="description" content="Cardly" />
        <meta property="og:description" content="Cardly" />
        <meta name="twitter:description" content="Cardly" />
        <meta property="og:url" content="https://cardly.vercel.app/" />
        <meta
          property="og:image"
          content="https://cardly.vercel.app/assets/img/card.svg"
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
