// @flow
import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Tilt from '../components/Tilt';
import Header from '../components/Header';

// eslint-disable-next-line
injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

const Background = styled.div`
  width: 100%;
  background: url('static/pattern.png');
  background-size: 15rem;
`;

const Container = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  margin: 0 auto;
  padding: 0 1rem;
`;

export default () => (
  <Background>
    <Container maxWidth="375">
      <Tilt>
        <Header />
      </Tilt>
    </Container>
  </Background>
);
