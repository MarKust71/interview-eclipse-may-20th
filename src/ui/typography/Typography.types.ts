import React from 'react';

export type TypographyVariants =
  | 'header'
  | 'button'
  | 'reviews'
  | 'rrp'
  | 'price'
  | 'warning'
  | 'description'
  | undefined;
export type TypographyProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: TypographyVariants;
};

export enum TYPOGRAPHY_VARIANT {
  header = 'typography-header',
  button = 'typography-button',
  reviews = 'typography-reviews',
  rrp = 'typography-rrp',
  price = 'typography-price',
  warning = 'typography-warning',
  description = 'typography-description',
}
