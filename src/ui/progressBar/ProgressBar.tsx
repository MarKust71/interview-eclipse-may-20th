import React from 'react';

import { ProgressBarProps } from './ProgressBar.types';
import { Typography } from 'ui/typography/Typography';

import './ProgressBar.css';
import { Box } from 'ui/box/Box';
import { TypographyVariants } from 'ui/typography/Typography.types';

export const ProgressBar: React.FC<ProgressBarProps> = ({ max, actual, threshold, label, warning }) => {
  const isWarning = actual < threshold;
  return (
    <div className="container-progress-bar">
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            backgroundColor: `${isWarning ? 'rgba(237, 20, 61, 1)' : 'rgba(39, 174, 96, 1)'}`,
            width: `${Math.floor((actual / max) * 100)}%`,
          }}
        />
      </div>
      <Box mb={1.25} />
      <Typography
        style={{ color: `${isWarning ? 'rgba(237, 20, 61, 1)' : 'rgba(39, 174, 96, 1)'}` }}
        variant={`${isWarning ? 'warning' : undefined}` as TypographyVariants}
      >
        {isWarning ? warning : label}
      </Typography>
    </div>
  );
};
