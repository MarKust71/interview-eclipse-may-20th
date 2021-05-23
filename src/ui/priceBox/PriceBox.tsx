import React from 'react';

import { PriceBoxProps } from './PriceBox.types';
import { Typography } from 'ui/typography/Typography';

import './PriceBox.css';

export const PriceBox: React.FC<PriceBoxProps> = ({ price, rrp, isWarning = false }) => {
  const recommendedPrice = rrp ?? price;

  return (
    <div className="container-price-box">
      {recommendedPrice !== price && (
        <Typography variant="rrp" className="rrp-strike-diagonal">
          {`RRP ${Intl.NumberFormat('en-EN', { style: 'currency', currency: 'GBP' }).format(recommendedPrice)}`}
        </Typography>
      )}
      <div className="price-save">
        <Typography variant="price" style={{ color: `${isWarning ? 'rgba(237, 20, 61, 1)' : 'rgba(51, 51, 51, 1)'}` }}>
          {Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(price)}
        </Typography>
        {isWarning && (
          <div className="container-save ">
            <Typography variant="rrp" className="save">
              {`Save ${Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP',
              }).format(recommendedPrice - price)}`}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};
