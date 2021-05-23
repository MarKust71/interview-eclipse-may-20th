import React from 'react';

import { LayoutPhotosGeneralProps } from './LayoutPhotosGeneral.types';

import './LayoutPhotoGeneral.css';

export const LayoutPhotosGeneral: React.FC<LayoutPhotosGeneralProps> = ({ children }) => {
  return <div className="container-layout-photo-general">{children}</div>;
};
