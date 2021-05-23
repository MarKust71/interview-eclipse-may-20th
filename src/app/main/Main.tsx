import React from 'react';

import './Main.css';
import { Typography } from 'ui/typography/Typography';
import { Box } from 'ui/box/Box';
import { Link } from 'ui/link/Link';

export const Main = (): JSX.Element => {
  return (
    <div className="container-main">
      <div className="wrapper-main">
        <Typography variant="header">Simple menu</Typography>
        <Box mb={6} />
        <Link href={'/shop'}>
          <Typography>Shop</Typography>
        </Link>
        <Link href={'/photos/mobile'}>
          <Typography>Photos - mobile</Typography>
        </Link>
        <Link href={'/photos/desktop'}>
          <Typography>Photos - desktop</Typography>
        </Link>
      </div>
    </div>
  );
};
