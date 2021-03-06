import React, { useEffect, useState } from 'react';

import { fetchUnsplashPhotos } from 'api/fetchUnsplashPhotos';
import { UnsplashData } from 'api/fetchUnsplashPhotos.types';
import { LayoutPhotosGeneral } from 'ui/layout/layoutPhotosGeneral/LayoutPhotosGeneral';
import { PhotoBoxMobile } from 'ui/photoBox/photoBoxMobile/PhotoBoxMobile';
import { Box } from 'ui/box/Box';

import './PhotosMobile.css';

export const PhotosMobile = (): JSX.Element => {
  const [images, setImages] = useState<UnsplashData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const photos = await fetchUnsplashPhotos({ query: 'cats' });
      if (photos) {
        setImages(photos);
      }
    };
    fetchData();
  }, []);

  if (!images || images.length < 1) return <></>;

  return (
    <LayoutPhotosGeneral>
      <div className="wrapper-photos-mobile">
        {images.map((image, index) => {
          const firstName = image.user.firstName ?? '';
          const lastName = image.user.lastName ?? '';
          const author = `${lastName}${firstName && lastName ? ', ' : ''}${firstName}`;
          return (
            <>
              <PhotoBoxMobile
                key={image.id}
                description={image.description}
                image={image.url}
                author={author}
                url={`${image.user.userLink}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`}
                date={new Date(Date.parse(image.created)).toLocaleDateString('en-GB')}
              />
              {index < images.length - 1 && <Box mb={5} />}
            </>
          );
        })}
      </div>
    </LayoutPhotosGeneral>
  );
};
