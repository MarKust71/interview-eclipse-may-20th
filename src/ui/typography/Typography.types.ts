import React from 'react';

export type TypographyProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'header' | 'button' | 'reviews' | 'rrp' | 'price';
};

export enum TYPOGRAPHY_VARIANT {
  header = 'typography-header',
  button = 'typography-button',
  reviews = 'typography-reviews',
  rrp = 'typography-rrp',
  price = 'typography-price',
}
