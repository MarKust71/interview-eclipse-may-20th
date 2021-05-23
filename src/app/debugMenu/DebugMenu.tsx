import React from 'react';

import { DebugMenuProps } from './DebugMenu.types';

import './DebugMenu.css';
import { Typography } from 'ui/typography/Typography';
import { Box } from 'ui/box/Box';

export const DebugMenu: React.FC<DebugMenuProps> = ({ onClickActive, onClickStock }) => {
  return (
    <div className="container-debug-menu">
      <Typography style={{ fontSize: '12px' }}>Debbug menu:</Typography>
      <Box mb={1} />
      <button onClick={onClickActive} style={{ width: '100%' }}>
        toggle active
      </button>
      <Box mb={0.5} />
      <button onClick={onClickStock} style={{ width: '100%' }}>
        toggle stock
      </button>
    </div>
  );
};
