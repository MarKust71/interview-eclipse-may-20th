import React from 'react';
import { render, screen } from '@testing-library/react';

import { PhotosMobile } from './PhotosMobile';

describe('PhotosMobile', () => {
  test('renders', () => {
    render(<PhotosMobile />);
    const element = screen.getByText('PhotosMobile');
    expect(element).toBeInTheDocument();
  });
});
