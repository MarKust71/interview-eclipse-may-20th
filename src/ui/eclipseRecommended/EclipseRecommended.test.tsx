import React from 'react';
import { render, screen } from '@testing-library/react';

import { EclipseRecommended } from './EclipseRecommended';

describe('EclipseRecommended', () => {
  test('renders', () => {
    render(<EclipseRecommended />);
    const element = screen.getByText('EclipseRecommended');
    expect(element).toBeInTheDocument();
  });
});
