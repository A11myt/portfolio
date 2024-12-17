import { Html, Main, NextScript } from "next/document";
import { Metadata } from "next";
import Head from "next/head";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <title>Jason Johnson - Portfolio</title>
        <meta name="description" content="Jason Johnson's portfolio website" />
        <meta name="keywords" content="Jason Johnson, Portfolio, Web Developer" />        
        </Head>
      <body className="antialiased">
        <Main  />
        <NextScript />
      </body>
    </Html>
  );
}
