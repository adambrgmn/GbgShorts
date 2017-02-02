import styled from 'styled-components';

import { media } from '../../style/utils';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;

  ${media.large`
    width: 90%;
    padding: 0;
  `}
`;

export const Items = styled.div`
  flex-basis: 100%;
  padding: 0;
  margin-bottom: 1.5rem;

  ${media.large`
    flex-basis: ${({ basis = 50 }) => basis}%;
    order: ${({ order = 0 }) => order};
    margin-bottom: 0rem;
    padding: 0 2rem;
  `}
`;
