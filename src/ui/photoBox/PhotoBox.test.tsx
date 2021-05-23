import React from 'react';
import { render, screen } from '@testing-library/react';

import { PhotoBox } from './PhotoBox';

describe('PhotoBox', () => {
  test('renders', () => {
    render(<PhotoBox />);
    const element = screen.getByText('PhotoBox');
    expect(element).toBeInTheDocument();
  });
});
