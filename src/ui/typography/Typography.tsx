import React from 'react';

import { TYPOGRAPHY_VARIANT, TypographyProps } from './Typography.types';

import './Typography.css';

export const Typography: React.FC<TypographyProps> = ({ variant, children, ...props }) => {
  return (
    <div className={`${props.className} ${variant ? TYPOGRAPHY_VARIANT[variant] : 'typography-default'}`} {...props}>
      {children}
    </div>
  );
};
