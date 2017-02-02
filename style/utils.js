import { css } from 'styled-components';

export const baseFontSize = 16;

export const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xlarge: 1200,
};

export const media = Object.keys(breakpoints).reduce((acc, key) => {
  const emSize = breakpoints[key] / baseFontSize;
  return {
    ...acc,
    [key]: (...args) => css`
      @media (min-width: ${emSize}em) { ${css(...args)} }
    `,
  };
}, {});
