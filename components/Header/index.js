import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { GaTiming } from '../../lib/ga';

import { media } from '../../style/utils';
import Navigation from '../Navigation';
import Link from '../Link';

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

  & a {
    color: currentColor;
    text-decoration: none;
  }
`;

const measureTime = new GaTiming({ category: 'Page transitions', variable: 'load' });

function onRouteChangeStart() {
  NProgress.start();
  measureTime.startTiming();
}

function onRouteChangeComplete(location) {
  NProgress.done();
  measureTime.endTiming();
  measureTime.sendTiming(location);
}

function onRouteChangeError() {
  NProgress.done();
}

Router.onRouteChangeStart = onRouteChangeStart;
Router.onRouteChangeComplete = onRouteChangeComplete;
Router.onRouteChangeError = onRouteChangeError;

export default function Header({ pathname, title }) {
  return (
    <Container>
      <Head>
        <title>{title && `${title} - `}Gbg Shorts | 22 april 2017 hos Hey It&apos;s Enrico Pallazzo</title>
      </Head>
      <Title>
        <Link href="/">Gbg Shorts</Link>
      </Title>
      <Navigation pathname={pathname} />
    </Container>
  );
}

Header.defaultProps = { pathname: '/', title: '' };
Header.propTypes = { pathname: PropTypes.string, title: PropTypes.string };
