import React from 'react';
import { render, screen } from '@testing-library/react';

import { ImageLogo } from './ImageLogo';

describe('ImageLogo', () => {
  test('renders', () => {
    render(<ImageLogo />);
    const element = screen.getByText('ImageLogo');
    expect(element).toBeInTheDocument();
  });
});
