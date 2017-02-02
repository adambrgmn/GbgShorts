import React from 'react';
import styled from 'styled-components';

import { media } from '../../style/utils';

const WelcomeContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;

  ${media.small`
    height: auto;
  `}
`;

const WelcomeText = styled.h2`
  font-family: 'Adobe Garamond Pro', 'EB Garamond', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  letter-spacing: 4px;
  color: #ffffff;

  ${media.small`font-size: 1.5rem;`}
  ${media.medium`font-size: 2rem;`}
`;

const UC = styled.span`text-transform: uppercase;`;

export default function WelcomeSection() {
  return (
    <WelcomeContainer>
      <WelcomeText><UC>22 april 2017</UC></WelcomeText>
      <WelcomeText>hos <UC>Hey It&apos;s<br />Enrico<br />Pallazzo</UC></WelcomeText>
    </WelcomeContainer>
  );
}
