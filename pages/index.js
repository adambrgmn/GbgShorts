// @flow
import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Header from '../components/Header';

// eslint-disable-next-line
injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 100vw;
  max-width: ${({ maxWidth }) => `${maxWidth}px`};
  margin: 0 auto;
  padding: 0 1rem;
`;

export default () => (
  <Container maxWidth="50rem">
    <Header />
  </Container>
);
