import React from 'react';
import { render, screen } from '@testing-library/react';

import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  test('renders', () => {
    render(<ProductCard />);
    const element = screen.getByText('ProductCard');
    expect(element).toBeInTheDocument();
  });
});
