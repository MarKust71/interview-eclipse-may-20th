import React from 'react';

import { CheckTextProps } from './CheckText.types';

import './CheckText.css';

import CheckIcon from 'assets/check.svg';
import { Box } from 'ui/box/Box';
import { Typography } from 'ui/typography/Typography';

export const CheckText: React.FC<CheckTextProps> = ({ children }) => {
  return (
    <div className="container-check-text">
      <img src={CheckIcon} alt="" className="check-icon" />
      <Box mr={1} />
      <Typography>{children}</Typography>
    </div>
  );
};
