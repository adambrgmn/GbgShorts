import styled from 'styled-components';

import { media } from '../../style/utils';

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 1rem;

  ${media.large`
    width: 90%;
    padding: 4rem 2rem;
  `}
`;

export const Items = styled.div`
  flex-basis: 100%;
  padding: 0;
  margin-bottom: 1.5rem;

  &:last-child { margin-bottom: 0; }

  ${media.large`
    flex-basis: ${({ basis = 50 }) => basis}%;
    order: ${({ order = 0 }) => order};
    margin-bottom: 0rem;
    padding: 0 2rem;
  `}
`;
