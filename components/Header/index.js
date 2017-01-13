// @flow
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import Tilt from '../Tilt';
import predictableRandom from '../../utils/predictableRandom';

const HeaderContainer = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;
  height: 100vh;
`;

const H1 = styled.h1`
  display: block;
  margin: 0;
  padding: 0 0 4rem 0;
  font-family: 'Gill Sans';
  font-size: 6rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

const seed = predictableRandom(16);
const Span = styled.span`
  display: inline-block;
  margin: 0 0.55rem;
  transform: translateY(${() => (seed() * 5)}rem);
`;

const spanLetter = (l, i) => (<Span key={i}>{l}</Span>);
const spanEach = (str: string) => R.compose(
  R.addIndex(R.map)(spanLetter),
  R.filter(R.complement(R.equals(' '))),
  R.split(''),
)(str);

export default class Header extends React.Component {
  wrapper: Element;
  mouseEvent: () => void;

  render() {
    return (
      <HeaderContainer>
        <Tilt>
          <H1>{spanEach('Gbg Shorts')}</H1>
          <H1>{spanEach('22 april')}</H1>
        </Tilt>
      </HeaderContainer>
    );
  }
}
