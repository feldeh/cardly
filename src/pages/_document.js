import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Cardly" />
        <meta name="twitter:title" content="Cardly" />
        <meta name="description" content="Go digital with Cardly" />
        <meta property="og:description" content="Go digital with Cardly" />
        <meta name="twitter:description" content="Go digital with Cardly" />
        <meta property="og:url" content="https://cardly.vercel.app/" />
        <meta
          property="og:image:secure_url"
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
