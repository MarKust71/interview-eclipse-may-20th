import React from 'react';

import { ProductCard } from 'ui/productCard/ProductCard';

import ProductImage from 'assets/sample/sample-picture.png';
import ProducerLogo from 'assets/logo/logo-lg.svg';

export const Main = (): JSX.Element => {
  const isCardActive = true;
  return (
    <ProductCard
      isActive={isCardActive}
      header={'LG OLED65BX6LB 65" 4K OLED Smart TV - A Energy Rated'}
      recommendation={'Eclipse recommendation'}
      stars={5}
      reviews={'XX'}
      image={ProductImage}
      logo={ProducerLogo}
      labels={[
        'Self-lit pixels',
        'α7 Gen3 Intelligent Processor 4K',
        'Transform your TV into a central hub with ThinQ AI',
        'Dolby Vision IQ & Dolby Atmos',
        '2 year warranty',
      ]}
    />
  );
};
