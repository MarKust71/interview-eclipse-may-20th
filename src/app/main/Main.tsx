import React from 'react';

import { ProductCard } from 'ui/productCard/ProductCard';

import ProductImage from 'assets/sample/sample-picture.png';
import ProducerLogo from 'assets/logo/logo-lg.svg';

export const Main = (): JSX.Element => {
  const isCardActive = true;

  const currentDate = new Date();
  const orderingDeadlineDate = currentDate.setHours(23, 59, 59, 999);
  const closestDeliveryDate = orderingDeadlineDate + 2 * 24 * 3600 * 1000;

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
      price={1599}
      rrp={1799}
      progress={{
        max: 100,
        actual: 20,
        threshold: 25,
        label: 'In stock',
        warning: 'Last few left',
      }}
      delivery={{
        closestDelivery: new Date(closestDeliveryDate),
        orderingDeadline: new Date(orderingDeadlineDate),
      }}
    />
  );
};
