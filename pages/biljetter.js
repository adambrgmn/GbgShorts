/* eslint-disable react/no-danger */
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import getPage from '../lib/getPage';

import Header from '../components/Header';
import Container from '../components/Container';
import { Content } from '../components/Content';
import { PinkSmiley } from '../components/Icons';

import { media } from '../style/utils';
import { trackPageView } from '../lib/ga';

const Message = styled.div`
  padding: 1rem;
  font-family: Gill Sans, Lato, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.5em;
  letter-spacing: 0.1em;
  color: rgb(255, 255, 255);

  & a {
    color: currentColor;
    text-decoration: none;
  }

  & a:hover { text-decoration: underline; }

  ${media.medium`
    padding: 2rem 3rem;
    font-size: 2rem;
  `}
`;

const SmileyContainer = styled.div`
  width: 7rem;
  height: 7rem;
  margin: 2rem auto;
`;

export default class Biljetter extends Component {
  static propTypes = {
    url: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    data: PropTypes.shape({
      html: PropTypes.string,
    }).isRequired,
  }

  static async getInitialProps() {
    const data = await getPage('biljetter');
    return { data };
  }

  componentDidMount() {
    trackPageView(this.props.url.pathname);
  }

  render() {
    const { url, data } = this.props;
    return (
      <Container bg="rgb(26, 24, 24)">
        <Header pathname={url.pathname} title="Biljetter" />
        <Content>
          <Message>
            <SmileyContainer>
              <PinkSmiley />
            </SmileyContainer>
            <div dangerouslySetInnerHTML={{ __html: data.html }} />
          </Message>
        </Content>
      </Container>
    );
  }
}
