import React from 'react';

import { PriceBoxProps } from './PriceBox.types';
import { Typography } from '../typography/Typography';

import './PriceBox.css';

export const PriceBox: React.FC<PriceBoxProps> = ({ price, rrp }) => {
  const recommendedPrice = rrp ?? price;

  return (
    <div className="container-price-box">
      <Typography variant="rrp" className="rrp">
        {`RRP ${Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(recommendedPrice)}`}
      </Typography>
      <div className="price-save">
        <Typography variant="price" className="price">
          {Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(price)}
        </Typography>
        <div className="container-save">
          <Typography variant="rrp" className="save">
            {`Save ${Intl.NumberFormat('en-EN', {
              style: 'currency',
              currency: 'GBP',
            }).format(recommendedPrice - price)}`}
          </Typography>
        </div>
      </div>
    </div>
  );
};
