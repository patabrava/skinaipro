import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Transform your skin with AI-powered care. Get personalized skincare routines, real-time analysis, and expert guidance from your AI skincare coach." />
        <meta name="keywords" content="skincare, AI, beauty, skin analysis, personalized routine" />
        <meta property="og:title" content="AI-Powered Skincare Platform" />
        <meta property="og:description" content="Transform your skin with AI-powered care and personalized routines." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 