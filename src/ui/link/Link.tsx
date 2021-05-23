import React from 'react';

import { LinkProps } from './Link.types';

import './Link.css';

export const Link: React.FC<LinkProps> = ({ children, href = '' }) => {
  return (
    <a href={href} className="link">
      {children}
    </a>
  );
};
