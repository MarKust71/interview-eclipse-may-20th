import React from 'react';

import { LayoutGeneralProps } from './LayoutGeneral.types';

import './LayoutGeneral.css';

export const LayoutGeneral: React.FC<LayoutGeneralProps> = ({ children, isActive = false }) => {
  return (
    <div className="container">
      <div className={`inner-container ${isActive ? 'inner-container-active' : ''}`}>{children}</div>
    </div>
  );
};
