import React, { Component, PropTypes } from 'react';

import Header from '../components/Header';
import Container from '../components/Container';

export default class Nyheter extends Component {
  static propTypes = {
    url: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }

  static async getInitialProps() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {};
  }

  render() {
    return (
      <Container>
        <Header pathname={this.props.url.pathname} title="Nyheter" />
      </Container>
    );
  }
}
