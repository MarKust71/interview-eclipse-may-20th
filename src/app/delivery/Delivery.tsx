import React, { useEffect, useRef, useState } from 'react';

import { DeliveryProps } from './Delivery.types';

import './Delivery.css';

import { DeliveryBox } from 'ui/deliveryBox/DeliveryBox';

export const Delivery: React.FC<DeliveryProps> = ({ closestDelivery, orderingDeadline }) => {
  const [timeLeft, setTimeLeft] = useState('00:00:00');

  const closestDeliveryDateString = Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(closestDelivery);

  const timer = useRef(
    setInterval(() => {
      const currentDate = new Date();
      if (orderingDeadline) {
        setTimeLeft(new Date(orderingDeadline.valueOf() - currentDate.valueOf()).toUTCString().split(' ')[4]);
      }
    }, 1000)
  );

  useEffect(() => {
    const currentTimer = timer.current;
    return () => clearInterval(currentTimer);
  }, []);

  if (closestDelivery === undefined || orderingDeadline === undefined) {
    return null;
  }

  return <DeliveryBox timeLeft={timeLeft} closestDeliveryDate={closestDeliveryDateString} />;
};
