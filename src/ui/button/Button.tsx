import React from 'react';
import { Typography } from 'ui/typography/Typography';

import './Button.css';

import { ButtonProps } from './Button.types';
import { Box } from '../box/Box';

export const Button: React.FC<ButtonProps> = ({ children, icon, fullWidth = false }) => {
  return (
    <button className={`button ${fullWidth ? 'full-width' : ''}`}>
      {icon && (
        <>
          <img src={icon} alt="icon" />
          <Box mr={5} />
        </>
      )}
      <Typography variant="button">{children}</Typography>
    </button>
  );
};
