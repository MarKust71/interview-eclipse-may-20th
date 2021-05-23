import React from 'react';
import { render, screen } from '@testing-library/react';

import { PhotoBoxMobile } from './PhotoBoxMobile';

describe('PhotoBox', () => {
  test('renders', () => {
    render(<PhotoBoxMobile image={''} />);
    const element = screen.getByText('PhotoBox');
    expect(element).toBeInTheDocument();
  });
});
