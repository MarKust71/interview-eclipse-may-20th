import React from 'react';

import { PhotoBoxProps } from './PhotoBox.types';

import './PhotoBox.css';
import { Typography } from 'ui/typography/Typography';
import { Link } from 'ui/link/Link';

export const PhotoBox: React.FC<PhotoBoxProps> = ({ description, image, author = '', date = '', url = '#' }) => {
  return (
    <div className="container-photo-box">
      <Typography variant="description" className="header-photo-box">
        {description && description}
      </Typography>
      <img src={image} alt="" className="photo" />
      <div className="footer-photo-box">
        <div className="footer-box">
          <Typography style={{ fontWeight: 700 }}>by</Typography>
          <div className="footer-box-center">
            <Link href={url}>
              <Typography style={{ fontSize: '18px' }} className="footer-box-center">
                {author}
              </Typography>
            </Link>
          </div>
        </div>
        <div className="footer-box">
          <Typography style={{ fontWeight: 700 }}>on</Typography>
          <div className="footer-box-center">
            <Typography style={{ fontSize: '18px' }}>{date}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
