import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Shop } from 'app/shop/Shop';
import { PhotosMobile } from 'app/photos/photosMobile/PhotosMobile';
import { PhotosDesktop } from 'app/photos/photosDesktop/PhotosDesktop';
import { Main } from 'app/main/Main';

export const Root = (): JSX.Element => {
  return (
    <Router>
      <Route path="/shop" exact component={() => <Shop />} />
      <Route path="/photos/mobile" exact component={() => <PhotosMobile />} />
      <Route path="/photos/desktop" exact component={() => <PhotosDesktop />} />
      <Route path="/" exact component={() => <Main />} />
    </Router>
  );
};
