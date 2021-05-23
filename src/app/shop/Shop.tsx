import React, { useState } from 'react';

import { ProductCard } from 'ui/productCard/ProductCard';

import ProductImage from 'assets/sample/sample-picture.png';
import ProducerLogo from 'assets/logo/logo-lg.svg';
import { DebugMenu } from 'app/debugMenu/DebugMenu';

export const Shop = (): JSX.Element => {
  const [isCardActive, setIsCardActive] = useState(false);
  const [actual, setActual] = useState(20);

  const currentDate = new Date();
  const orderingDeadlineDate = currentDate.setHours(23, 59, 59, 999);
  const closestDeliveryDate = orderingDeadlineDate + 2 * 24 * 3600 * 1000;

  const handleToggleActive = () => {
    setIsCardActive((prevState) => !prevState);
  };

  const handleToggleStock = () => {
    actual > 25 ? setActual(20) : setActual(30);
  };

  return (
    <>
      <DebugMenu onClickActive={handleToggleActive} onClickStock={handleToggleStock} />
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
          '2 years warranty',
        ]}
        price={1599}
        rrp={1799}
        progress={{
          max: 100,
          actual,
          threshold: 25,
          label: 'In stock',
          warning: 'Last few left',
        }}
        delivery={{
          closestDelivery: new Date(closestDeliveryDate),
          orderingDeadline: new Date(orderingDeadlineDate),
        }}
      />
    </>
  );
};
