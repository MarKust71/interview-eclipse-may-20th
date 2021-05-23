import React from 'react';
import { render, screen } from '@testing-library/react';

import { Link } from './Link';

describe('Link', () => {
  test('renders', () => {
    render(<Link />);
    const element = screen.getByText('Link');
    expect(element).toBeInTheDocument();
  });
});
