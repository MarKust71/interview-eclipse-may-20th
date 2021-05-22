import React from 'react';

import { EclipseRecommendedProps } from './EclipseRecommended.types';

import './EclipseRecommended.css';

export const EclipseRecommended: React.FC<EclipseRecommendedProps> = ({ label = '', isActive = false }) => {
  const isVisible = label && isActive;
  return (
    <div className={`container1 ${isVisible ? 'visible' : ''}`}>
      {isVisible && <div className="typography">{label}</div>}
    </div>
  );
};
