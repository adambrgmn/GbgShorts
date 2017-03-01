import React, { PropTypes } from 'react';

import Img from '../Img';

const cloudinarySrc = (
  img,
  ext = 'jpg',
  width = 1100,
  height = 720,
) => (
  `https://res.cloudinary.com/adambrgmn/image/upload/c_lfill,g_face,w_${width},h_${height}/v1485974209/gbgshorts/${img}.${ext}`
);


export default function CloudinaryImg({
  img,
  ext,
  width,
  height,
  transformations,
}) {
  const src = cloudinarySrc(img, ext, width, height, transformations);

  return (
    <Img src={src} />
  );
}

CloudinaryImg.propTypes = {
  img: PropTypes.string.isRequired,
  ext: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  transformations: PropTypes.string,
};

CloudinaryImg.defaultProps = {
  ext: 'jpg',
  width: 1100,
  height: 720,
  transformations: '',
};
