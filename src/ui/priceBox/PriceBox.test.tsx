import React from 'react';
import { render, screen } from '@testing-library/react';

import { PriceBox } from './PriceBox';

describe('PriceBox', () => {
  test('renders', () => {
    render(<PriceBox />);
    const element = screen.getByText('PriceBox');
    expect(element).toBeInTheDocument();
  });
});
