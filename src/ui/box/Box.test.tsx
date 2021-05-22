import React from 'react';
import { render, screen } from '@testing-library/react';

import { Box } from './Box';

describe('Box', () => {
  test('renders', () => {
    render(<Box />);
    const element = screen.getByText('Box');
    expect(element).toBeInTheDocument();
  });
});
