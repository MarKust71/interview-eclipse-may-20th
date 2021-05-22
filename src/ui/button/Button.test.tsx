import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('renders', () => {
    render(<Button />);
    const element = screen.getByText('Button');
    expect(element).toBeInTheDocument();
  });
});
