import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { media } from '../../style/utils';
import Navigation from '../Navigation';

const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: auto;
  min-height: 3rem;
  padding: 1rem;
  background-color: #ffffff;
  font-family: Gill Sans, Lato, sans-serif;

  ${media.large`
    justify-content: space-between;
  `}
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  z-index: 2;
`;

export default function Header({ pathname }) {
  return (
    <Container>
      <Title>Gbg Shorts</Title>
      <Navigation pathname={pathname} />
    </Container>
  );
}

Header.defaultProps = { pathname: '/' };
Header.propTypes = { pathname: PropTypes.string };
