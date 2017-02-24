/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { media } from '../../style/utils';

import Img from '../Img';

const Container = styled.article`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ bg }) => (bg || 'rgb(220, 221, 222)')};

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
  `}
`;

const Title = styled.h1`
  margin-bottom: 0.5em;
  font-size: 2.2rem;
  font-weight: 600;
`;

const Content = styled.div`
  font-size: 1rem;

  & p {
    margin-bottom: 1em;
  }

  & a {
    color: currentColor;
  }
`;

export default function BlogPost({ item }) {
  return (
    <Container bg={item.background}>
      <GridItem>
        {item.img ? <Img src={item.img} /> : null}
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
