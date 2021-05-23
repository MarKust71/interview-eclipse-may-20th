import React from 'react';
import { render, screen } from '@testing-library/react';

import { Shop } from './Shop';

describe('Shop', () => {
  test('renders', () => {
    render(<Shop />);
    const element = screen.getByText('Shop');
    expect(element).toBeInTheDocument();
  });
});
