/* eslint-disable max-len */
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import getPage from '../lib/getPage';

import Header from '../components/Header';
import Container from '../components/Container';
import CloudinaryImg from '../components/CloudinaryImg';
import { Content, Items } from '../components/Content';
import { BottomBorder } from '../components/Typography';
import { media } from '../style/utils';
import { trackPageView } from '../lib/ga';

const Title = styled.h1`
  position: relative;
  display: block;
  font-size: 2.7rem;
  font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed', 'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed', 'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold', 'HelveticaNeue', 'Helvetica Neue', 'TeXGyreHerosCnBold', 'Helvetica', 'Tahoma', 'Geneva', 'Arial Narrow', 'Arial', sans-serif;
  font-weight: 600;
  font-stretch: condensed;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.03em;

  ${media.large`
    margin: 1rem 0 0 0;
    font-size: 6rem;
  `}
`;

const TextContent = styled.div`
  & p {
    font-family: Gill Sans, Lato, sans-serif;
    margin-bottom: 1rem;
    padding: 0 1.5rem;

    &:last-child { margin-bottom: 0; padding-bottom: 1rem; }

    ${media.large`
      padding: 0;
      &:first-child { padding-top: 7rem; }
    `}
  }

  & a {
    color: currentColor;
    text-decoration: none;
  }

  & a:hover { text-decoration: underline; }
`;

export default class DittBidrag extends Component {
  static propTypes = {
    url: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    data: PropTypes.shape({
      html: PropTypes.string,
    }).isRequired,
  }

  static async getInitialProps() {
    const data = await getPage('ditt-bidrag');
    return { data };
  }

  componentDidMount() {
    trackPageView(this.props.url.pathname);
  }

  render() {
    const { url, data } = this.props;
    return (
      <Container bg="rgb(136, 122, 143)">
        <Header pathname={url.pathname} title="Ditt bidrag" />
        <Content>
          <Items order="3" basis="70">
            <Title>
              <BottomBorder>Ditt bidrag</BottomBorder>
            </Title>
          </Items>

          <Items order="1">
            <CloudinaryImg img="gs_webb_03" />
          </Items>

          <Items order="2">
            <TextContent dangerouslySetInnerHTML={{ __html: data.html }} />
          </Items>
        </Content>
      </Container>
    );
  }
}
