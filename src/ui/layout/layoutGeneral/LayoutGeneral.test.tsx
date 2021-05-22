import React from 'react';
import { render, screen } from '@testing-library/react';

import { LayoutGeneral } from './LayoutGeneral';

describe('LayoutGeneral', () => {
  test('renders', () => {
    render(<LayoutGeneral />);
    const element = screen.getByText('LayoutGeneral');
    expect(element).toBeInTheDocument();
  });
});
