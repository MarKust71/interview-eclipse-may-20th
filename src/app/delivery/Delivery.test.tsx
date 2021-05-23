import React from 'react';
import { render, screen } from '@testing-library/react';

import { Delivery } from './Delivery';

describe('Delivery', () => {
  test('renders', () => {
    render(<Delivery />);
    const element = screen.getByText('Delivery');
    expect(element).toBeInTheDocument();
  });
});
