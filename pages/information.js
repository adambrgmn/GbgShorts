import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import getPage from '../lib/getPage';

import Header from '../components/Header';
import Container from '../components/Container';
import { Content, Items } from '../components/Content';
import { LogotypeCurly } from '../components/Icons';
import Img from '../components/Img';
import { media } from '../style/utils';
import { trackPageView } from '../lib/ga';

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

  componentDidMount() {
    trackPageView(this.props.url.pathname);
  }

  render() {
    const { url, data } = this.props;
    return (
      <Container bg="#dcddde">
        <Header pathname={url.pathname} title="Information" />
        <Content>
          <Items order="3" basis="60">
            <LogotypeCurly />
          </Items>
          <Items order="1">
            <Img src="https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,w_1100/v1485974209/gbgshorts/infocollage.png" />
          </Items>
          <Items order="2">
            <TextContent dangerouslySetInnerHTML={{ __html: data.html }} />
          </Items>
        </Content>
      </Container>
    );
  }
}
