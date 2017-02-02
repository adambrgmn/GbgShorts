import styled from 'styled-components';
import { media } from '../../style/utils';

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: flext-start;
  max-width: 100vw;
  height: auto;
`;

export const GridColumn = styled.div`
  flex: 1;
  flex-basis: 100%;

  ${media.small`
    flex-basis: calc(100% / 2);
  `}
  ${media.large`
    flex-basis: calc(100% / 3);
  `}
`;
