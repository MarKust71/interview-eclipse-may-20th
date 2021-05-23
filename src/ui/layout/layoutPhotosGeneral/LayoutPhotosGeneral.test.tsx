import React from 'react';
import { render, screen } from '@testing-library/react';

import { LayoutPhotosGeneral } from './LayoutPhotosGeneral';

describe('LayoutPhotosGeneral', () => {
  test('renders', () => {
    render(<LayoutPhotosGeneral />);
    const element = screen.getByText('LayoutPhotosGeneral');
    expect(element).toBeInTheDocument();
  });
});
