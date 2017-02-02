import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Container from '../components/Container';

const SmileyContainer = styled(Container)`
  background-image: url('/static/pattern.png');
  background-repeat: repeat;
  background-size: 30% auto;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const Message = styled.h2`
  font-family: Gill Sans, Lato, sans-serif;
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

export default class Biljetter extends Component {
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
      <SmileyContainer>
        <Header pathname={this.props.url.pathname} title="Biljetter" />
        <Content>
          <Message>
            Maila oss för att förköpa biljetter?!
          </Message>
        </Content>
      </SmileyContainer>
    );
  }
}
