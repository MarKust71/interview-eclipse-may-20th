import React from 'react';
import { render, screen } from '@testing-library/react';

import { DebugMenu } from './DebugMenu';

describe('DebugMenu', () => {
  test('renders', () => {
    render(<DebugMenu onClickStock={() => {}} onClickActive={() => {}} />);
    const element = screen.getByText('DebugMenu');
    expect(element).toBeInTheDocument();
  });
});
