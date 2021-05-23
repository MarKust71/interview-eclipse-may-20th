import React from 'react';
import { render, screen } from '@testing-library/react';

import { PhotosDesktop } from './PhotosDesktop';

describe('PhotosDesktop', () => {
  test('renders', () => {
    render(<PhotosDesktop />);
    const element = screen.getByText('PhotosDesktop');
    expect(element).toBeInTheDocument();
  });
});
