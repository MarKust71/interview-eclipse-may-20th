import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from 'app/main/Main';

export const Root = (): JSX.Element => {
  return (
    <Router>
      <Main />
    </Router>
  );
};
