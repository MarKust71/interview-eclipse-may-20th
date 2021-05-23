import { FetchUnsplashPhotosTypes, UnsplashData } from './fetchUnsplashPhotos.types';
import axios from 'axios';

export const fetchUnsplashPhotos = async ({ query }: FetchUnsplashPhotosTypes) => {
  if (!query) return;

  const url_query = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
  const url_random = `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;

  const url = query === 'random' ? url_random : url_query;

  try {
    const response = await axios.get(url);

    const photosData = query === 'random' ? [response.data] : [...response.data.results];

    return photosData.map((item) => {
      const photo: UnsplashData = {
        id: item.id,
        description: item.alt_description,
        created: item.created_at,
        url: item.urls.small,
        user: {
          uid: item.user.id,
          firstName: item.user.first_name,
          lastName: item.user.last_name,
          userLink: item.user.links.self,
        },
      };
      return photo;
    });
  } catch (error) {
    alert(error.message);
  }
};
