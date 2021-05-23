import React from 'react';

import { PhotoBoxMobileProps } from './PhotoBoxMobile.types';

import './PhotoBoxMobile.css';
import { Typography } from 'ui/typography/Typography';
import { Link } from 'ui/link/Link';

export const PhotoBoxMobile: React.FC<PhotoBoxMobileProps> = ({
  description,
  image,
  author = '',
  date = '',
  url = '#',
}) => {
  return (
    <div className="container-photo-box-mobile">
      <Typography variant="description" className="header-photo-box-mobile">
        {description && description}
      </Typography>
      <img src={image} alt="" className="photo-mobile" />
      <div className="footer-photo-box-mobile">
        <div className="footer-box-mobile">
          <Typography style={{ fontWeight: 700 }}>by</Typography>
          <div className="footer-box-mobile-center">
            <Link href={url}>
              <Typography style={{ fontSize: '18px' }} className="footer-box-mobile-center">
                {author}
              </Typography>
            </Link>
          </div>
        </div>
        <div className="footer-box-mobile">
          <Typography style={{ fontWeight: 700 }}>on</Typography>
          <div className="footer-box-mobile-center">
            <Typography style={{ fontSize: '18px' }}>{date}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
