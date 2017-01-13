/* eslint-disable react/no-danger */
import React from 'react';
import R from 'ramda';
import Document, { Head, Main, NextScript } from 'next/document';
import stylesheet from 'styled-components/lib/models/StyleSheet';

export default class CustomDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const style = R.join('\n', R.map(R.prop('cssText'), stylesheet.rules()));

    return { ...page, style };
  }

  render() {
    return (
      <html lang="sv">
        <Head>
          <title>Gbg Shorts | 22 april 2017</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

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
