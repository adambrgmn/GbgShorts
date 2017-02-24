import React, { PropTypes } from 'react';

import Img from '../Img';
import { breakpoints, baseFontSize } from '../../style/utils';

const cloudinarySrc = (img, width = 500, height = 330) => (
  `https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,w_${width},h_${height}/v1485974209/gbgshorts/${img}`
);


export default function CloudinaryImg({ img }) {
  const widths = [1500 / 3, breakpoints.large / 2, breakpoints.small];
  const heights = widths.map(w => (w * ((1 / 3) * 2)).toFixed(0));
  const sizes = [
    `(min-width: ${breakpoints.large / baseFontSize}em) ${(100 / 3).toFixed(3)}vw`,
    `(min-width: ${breakpoints.small / baseFontSize}em) ${100 / 2}vw`,
    '100vw',
  ];

  return (
    <Img
      srcSet={widths.map((w, i) => `${cloudinarySrc(img, w, heights[i])} ${w}w`).join(', ')}
      sizes={sizes.join(', ')}
      src={cloudinarySrc(img)}
      alt=""
    />
  );
}

CloudinaryImg.propTypes = {
  img: PropTypes.string.isRequired,
};
