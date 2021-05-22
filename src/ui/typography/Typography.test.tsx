import React from 'react';
import { render, screen } from '@testing-library/react';

import { Typography } from './Typography';

describe('Typography', () => {
  test('renders', () => {
    render(<Typography />);
    const element = screen.getByText('Typography');
    expect(element).toBeInTheDocument();
  });
});
