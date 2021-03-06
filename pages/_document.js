/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import stylesheet from 'styled-components/lib/models/StyleSheet';

const defaultStyles = `
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
}
`;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const style = stylesheet.rules().map(rule => rule.cssText).join('\n');

    return { page, style };
  }

  render() {
    return (
      <html lang="sv-SE">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>Gbg Shorts | 22 april 2017 hos Hey It&apos;s Enrico Pallazzo</title>

          <meta name="description" content="Kortfilmsfestivalen Gbg Shorts anordnas i år för 6 gången hos Hey I&apos;ts Enrico Pallazo vid Röda Sten i Göteborg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link href="https://fonts.googleapis.com/css?family=EB+Garamond|Lato:400,400i,700,700i" rel="stylesheet" />
          <link href="/static/nprogress.css" rel="stylesheet" />

          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/static/apple-touch-icon-152x152.png" />
          <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
          <meta name="application-name" content="Gbg Shorts | 22 april 2017 hos Hey It's Enrico Pallazzo" />
          <meta name="msapplication-TileColor" content="#dcddde" />
          <meta name="msapplication-TileImage" content="/static/mstile-144x144.png" />


          <style>{defaultStyles}</style>
          <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
