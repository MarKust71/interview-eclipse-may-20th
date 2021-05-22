import React from 'react';

import { CheckTextContainerProps } from './CheckTextContainer.types';

import './CheckTextContainer.css';
import { CheckText } from 'ui/checkText/CheckText';
import { Box } from 'ui/box/Box';

export const CheckTextContainer: React.FC<CheckTextContainerProps> = ({ labels }) => {
  return (
    <div className="container-check-text-container">
      {labels &&
        labels.map((label, index) => (
          <>
            <CheckText key={`key-${index}`}>{label}</CheckText>
            {index < labels.length - 1 && <Box mb={1} />}
          </>
        ))}
    </div>
  );
};
