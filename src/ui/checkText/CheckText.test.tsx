import React from 'react';
import { render, screen } from '@testing-library/react';

import { CheckText } from './CheckText';

describe('CheckText', () => {
  test('renders', () => {
    render(<CheckText />);
    const element = screen.getByText('CheckText');
    expect(element).toBeInTheDocument();
  });
});
