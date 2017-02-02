import styled from 'styled-components';

export const BottomBorder = styled.span`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: calc(100% + ${({ offset = '0rem' }) => offset});
    left: 0;
    width: 100%;
    height: ${({ height = '2px' }) => height};
    background-color: currentColor;
  }
`;
