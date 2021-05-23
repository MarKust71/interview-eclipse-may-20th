import React, { useEffect, useState } from 'react';

import { LayoutPhotosGeneral } from 'ui/layout/layoutPhotosGeneral/LayoutPhotosGeneral';

import './PhotosDesktop.css';
import { UnsplashData } from 'api/fetchUnsplashPhotos.types';
import { fetchUnsplashPhotos } from 'api/fetchUnsplashPhotos';
import { PhotoBoxDesktop } from 'ui/photoBox/photoBoxDesktop/PhotoBoxDesktop';
import { Typography } from 'ui/typography/Typography';

export const PhotosDesktop = (): JSX.Element => {
  const [images, setImages] = useState<UnsplashData[]>([]);

  const fetchData = async () => {
    const photo = await fetchUnsplashPhotos({ query: 'random' });
    if (photo) {
      setImages((prevState) => [...prevState, ...photo]);
    }
  };

  const handleClick = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!images || images.length < 1) return <></>;

  return (
    <LayoutPhotosGeneral>
      <Typography>Click to fetch next image...</Typography>
      <div className="wrapper-photos-desktop" onClick={handleClick}>
        {images.map((image) => {
          const firstName = image.user.firstName ?? '';
          const lastName = image.user.lastName ?? '';
          const author = `${lastName}${firstName && lastName ? ', ' : ''}${firstName}`;
          return (
            <PhotoBoxDesktop
              key={image.id}
              description={image.description}
              image={image.url}
              author={author}
              url={`${image.user.userLink}?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`}
              date={new Date(Date.parse(image.created)).toLocaleDateString('en-GB')}
            />
          );
        })}
      </div>
    </LayoutPhotosGeneral>
  );
};
