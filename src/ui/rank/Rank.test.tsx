import React from 'react';
import { render, screen } from '@testing-library/react';

import { Rank } from './Rank';

describe('Rank', () => {
  test('renders', () => {
    render(<Rank />);
    const element = screen.getByText('Rank');
    expect(element).toBeInTheDocument();
  });
});
