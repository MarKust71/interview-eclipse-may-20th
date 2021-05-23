import React from 'react';

import { PhotoBoxDesktopProps } from './PhotoBoxDesktop.types';

import './PhotoBoxDesktop.css';
import { Typography } from 'ui/typography/Typography';
import { Link } from 'ui/link/Link';

export const PhotoBoxDesktop: React.FC<PhotoBoxDesktopProps> = ({
  description,
  image,
  author = '',
  date = '',
  url = '#',
}) => {
  return (
    <div className="container-photo-box-desktop" style={{ backgroundImage: `url(${image})` }}>
      <div className="description-box">
        <Typography
          variant="description"
          className="header-photo-box-mobile"
          style={{
            fontSize: '48px',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            width: 'calc(100% - 2 * 16px)',
            overflow: 'hidden',
          }}
        >
          {description && description}
        </Typography>
        <div className="footer-photo-box-mobile" style={{ minHeight: 48 }}>
          <div className="footer-box-mobile">
            <Typography style={{ fontWeight: 700, fontSize: '24px' }}>by</Typography>
            <div className="footer-box-mobile-center">
              <Link href={url}>
                <Typography
                  style={{
                    fontSize: '36px',
                  }}
                  className="footer-box-mobile-center"
                >
                  {author}
                </Typography>
              </Link>
            </div>
          </div>
          <div className="footer-box-mobile">
            <Typography style={{ fontWeight: 700, fontSize: '24px' }}>on</Typography>
            <div className="footer-box-mobile-center">
              <Typography style={{ fontSize: '36px' }}>{date}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
