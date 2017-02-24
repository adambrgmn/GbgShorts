import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import getPage from '../lib/getPage';

import Header from '../components/Header';
import Container from '../components/Container';
import { Content, Items } from '../components/Content';
import { LogotypeCurly } from '../components/Icons';
import Img from '../components/Img';
import { media } from '../style/utils';

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`;

const Imgs = styled(Img)`
  width: 65%;
  height: auto;
  filter: grayscale(50%);

  &:nth-child(1) { margin-top: 0%; margin-left: 17.5%; }
  &:nth-child(2) { margin-top: -5%; margin-left: 0; }
  &:nth-child(3) { margin-top: -60%; margin-left: 30%; width: 70%; }
`;

const TextContent = styled.div`
  & p {
    font-family: Gill Sans, Lato, sans-serif;
    margin-bottom: 1rem;
    padding: 0 1.5rem;

    &:last-child { margin-bottom: 0; padding-bottom: 1rem; }

    ${media.large`
      padding: 0;
      &:first-child { padding-top: 5rem; }
    `}
  }

  & a {
    color: currentColor;
  }
`;

export default class Information extends Component {
  static propTypes = {
    url: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    data: PropTypes.shape({
      html: PropTypes.string,
    }).isRequired,
  }

  static async getInitialProps() {
    const data = await getPage('information');
    return { data };
  }

  render() {
    const { url, data } = this.props;
    return (
      <Container bg="#dcddde">
        <Header pathname={url.pathname} title="Information" />
        <Content>
          <Items order="3" basis="70">
            <LogotypeCurly />
          </Items>
          <Items order="1">
            <ImgContainer>
              <Imgs src="http://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,h_360,w_550/v1485974209/gbgshorts/gbgshorts-1.jpg" />
              <Imgs src="http://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,h_360,w_550/v1485974209/gbgshorts/gbgshorts-6.jpg" />
              <Imgs src="http://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,h_360,w_550/v1485974209/gbgshorts/gbgshorts-5.jpg" />
            </ImgContainer>
          </Items>
          <Items order="2">
            <TextContent dangerouslySetInnerHTML={{ __html: data.html }} />
          </Items>
        </Content>
      </Container>
    );
  }
}
