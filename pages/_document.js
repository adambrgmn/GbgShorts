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
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>Gbg Shorts | 27 april 2017 | Pallazzot</title>

          <meta name="description" content="Gbg Shorts | 27 april 2017 | Pallazzot" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link href="https://fonts.googleapis.com/css?family=EB+Garamond|Lato:400,400i,700,700i" rel="stylesheet" />
          <link href="/static/nprogress.css" rel="stylesheet" />

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
