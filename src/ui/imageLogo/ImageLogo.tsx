import React from 'react';

import { ImageLogoProps } from './ImageLogo.types';

import './ImageLogo.css';
import { Box } from 'ui/box/Box';

export const ImageLogo: React.FC<ImageLogoProps> = ({ image, logo }) => {
  return (
    <div className="container-image-logo">
      <div className="product-image-container">
        <img src={image} alt="" className="product-image" />
      </div>
      <Box mr={1} />
      <div className="product-image-container">
        <img src={logo} alt="" className="product-image" />
      </div>
    </div>
  );
};
