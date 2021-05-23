import React, { useEffect, useRef, useState } from 'react';

import { DeliveryBoxProps } from './DeliveryBox.types';

import './DeliveryBox.css';

import LorryIcon from 'assets/delivery.svg';
import { Box } from 'ui/box/Box';
import { Typography } from 'ui/typography/Typography';

import parse from 'html-react-parser';

export const DeliveryBox: React.FC<DeliveryBoxProps> = ({ closestDelivery, orderingDeadline }) => {
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

  return (
    <div className="container-delivery-box">
      <img src={LorryIcon} alt="" />
      <Box mr={1} />
      <Typography style={{ textAlign: 'justify' }}>
        {parse(`Order in the next <b>${timeLeft}</b> for delivery on <b>${closestDeliveryDateString}</b>`)}
      </Typography>
    </div>
  );
};
