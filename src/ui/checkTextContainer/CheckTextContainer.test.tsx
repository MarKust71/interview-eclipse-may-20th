import React from 'react';
import { render, screen } from '@testing-library/react';

import { CheckTextContainer } from './CheckTextContainer';

describe('CheckTextContainer', () => {
  test('renders', () => {
    render(<CheckTextContainer />);
    const element = screen.getByText('CheckTextContainer');
    expect(element).toBeInTheDocument();
  });
});
