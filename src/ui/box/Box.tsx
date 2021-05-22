import React from 'react';

import { BoxProps } from './Box.types';

export const Box: React.FC<BoxProps> = ({ children, mb = 0, ml = 0, mr = 0, mt = 0 }) => {
  return (
    <div style={{ marginLeft: ml * 8, marginBottom: mb * 8, marginTop: mt * 8, marginRight: mr * 8 }}>{children}</div>
  );
};
