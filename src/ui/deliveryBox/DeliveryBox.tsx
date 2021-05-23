import React from 'react';

import { DeliveryBoxProps } from './DeliveryBox.types';
import LorryIcon from 'assets/delivery.svg';
import { Box } from 'ui/box/Box';
import { Typography } from 'ui/typography/Typography';
import parse from 'html-react-parser';

import './DeliveryBox.css';

export const DeliveryBox: React.FC<DeliveryBoxProps> = ({ timeLeft, closestDeliveryDate }) => {
  return (
    <div className="container-delivery-box">
      <img src={LorryIcon} alt="" />
      <Box mr={1} />
      <Typography style={{ textAlign: 'justify' }}>
        {parse(`Order in the next <b>${timeLeft}</b> for delivery on <b>${closestDeliveryDate}</b>`)}
      </Typography>
    </div>
  );
};
