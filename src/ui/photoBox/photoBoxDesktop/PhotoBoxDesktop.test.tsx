import React from 'react';
import { render, screen } from '@testing-library/react';

import { PhotoBoxDesktop } from './PhotoBoxDesktop';

describe('PhotoBoxDesktop', () => {
  test('renders', () => {
    render(<PhotoBoxDesktop />);
    const element = screen.getByText('PhotoBoxDesktop');
    expect(element).toBeInTheDocument();
  });
});
