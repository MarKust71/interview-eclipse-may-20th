import React from 'react';
import { render, screen } from '@testing-library/react';

import { DeliveryBox } from './DeliveryBox';

describe('DeliveryBox', () => {
  test('renders', () => {
    render(<DeliveryBox />);
    const element = screen.getByText('DeliveryBox');
    expect(element).toBeInTheDocument();
  });
});
