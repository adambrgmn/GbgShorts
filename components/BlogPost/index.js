/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Vimeo from 'react-vimeo';

import { media } from '../../style/utils';

import Img from '../Img';

const Container = styled.article`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0;
  background-color: #d8c0c0;

  &:nth-child(odd) { background-color: #dcddde; }

  ${media.large`
    flex-flow: row wrap;
  `}
`;

const GridItem = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  font-family: Gill Sans, Lato, sans-serif;

  ${media.large`
    width: 50%;
    padding: 3rem;
    padding-left: 4rem;
    padding-right: 1.5rem;

    &:last-child {
      padding-left: 1.5rem;
      padding-right: 4rem;
    }
  `}
`;

const Title = styled.h1`
  margin-bottom: 0.5em;
  font-size: 2.2rem;
  letter-spacing: 0.03em;
  font-weight: 600;
`;

const Content = styled.div`
  font-size: 1rem;

  & p {
    margin-bottom: 1em;
  }

  & a {
    color: currentColor;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

const ImgContainer = styled.div`
  padding: 0 2rem;
  text-align: center;

  ${media.large`
    padding: 0;
  `}

  & .vimeo {
    margin-left: -2rem;
  }

  & iframe {
    width: 300px;
    height: 300px;
  }
`;

export default function BlogPost({ item }) {
  return (
    <Container bg={item.background}>
      <GridItem>
        <ImgContainer>
          {item.video ?
            <Vimeo videoId={item.video} autoplay /> :
            <Img src={item.img} />
          }
        </ImgContainer>
      </GridItem>
      <GridItem>
        <Title>{item.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: item.html }} />
      </GridItem>
    </Container>
  );
}

BlogPost.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
    background: PropTypes.string,
  }).isRequired,
};
