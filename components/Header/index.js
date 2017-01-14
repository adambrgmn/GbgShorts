// @flow
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ImgWrapper = styled.div`
  display: flex-item;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

export default class Header extends React.Component {
  wrapper: Element;
  mouseEvent: () => void;

  render() {
    return (
      <HeaderContainer>
        <ImgWrapper>
          <Img
            srcSet="static/smileydatum@2x.png 1600w, static/smileydatum.png 800w, static/smileydatum@0.5x.png 400w"
            sizes="(min-width: 50em) 50rem, 100vw"
            src="static/smileydatum.png"
            alt="Gbg Shorts 27 april 2017"
          />
        </ImgWrapper>
      </HeaderContainer>
    );
  }
}
