export type FetchUnsplashPhotosTypes = {
  query: string;
};

export type UnsplashData = {
  id: string;
  description: string;
  created: string;
  url: string;
  user: {
    uid: string;
    firstName: string;
    lastName: string;
    userLink: string;
  };
};
