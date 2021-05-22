import React from 'react';

import { ProductCardProps } from './ProductCard.types';
import { LayoutGeneral } from 'ui/layout/layoutGeneral/LayoutGeneral';
import { EclipseRecommended } from 'ui/eclipseRecommended/EclipseRecommended';
import { Box } from 'ui/box/Box';
import { Typography } from 'ui/typography/Typography';

import './ProductCard.css';
import { Button } from 'ui/button/Button';

import BasketIcon from 'assets/basket-white.svg';
import { Rank } from 'ui/rank/Rank';
import { ImageLogo } from 'ui/imageLogo/ImageLogo';
import { CheckTextContainer } from 'ui/checkTextContainer/CheckTextContainer';

export const ProductCard: React.FC<ProductCardProps> = ({
  isActive = false,
  recommendation = '',
  header,
  stars,
  reviews,
  image,
  logo,
  labels,
}) => {
  return (
    <LayoutGeneral isActive={isActive}>
      <EclipseRecommended label={recommendation} isActive={isActive} />
      <div className="container-product-card">
        <div>
          <Box mb={1.75} />
          <Typography variant="header">{header}</Typography>
          <Box mb={1} />
          <Rank stars={stars} reviews={reviews} />
          <ImageLogo image={image} logo={logo} />
          <Box mb={1.75} />
          <CheckTextContainer labels={labels} />
        </div>
        <Button fullWidth icon={BasketIcon}>
          ADD TO BASKET
        </Button>
      </div>
    </LayoutGeneral>
  );
};
