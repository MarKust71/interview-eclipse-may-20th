import React from 'react';
import { render, screen } from '@testing-library/react';

import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  test('renders', () => {
    render(<ProgressBar />);
    const element = screen.getByText('ProgressBar');
    expect(element).toBeInTheDocument();
  });
});
