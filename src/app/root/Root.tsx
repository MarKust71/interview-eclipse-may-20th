import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main } from 'app/main/Main';
import { PhotosMobile } from 'app/photos/photosMobile/PhotosMobile';
import { PhotosDesktop } from 'app/photos/photosDesktop/PhotosDesktop';

export const Root = (): JSX.Element => {
  return (
    <Router>
      <Route path="/shop" exact component={() => <Main />} />
      <Route path="/photos/mobile" exact component={() => <PhotosMobile />} />
      <Route path="/photos/desktop" exact component={() => <PhotosDesktop />} />
    </Router>
  );
};
