export type Post = {
  id: string;
  title: string;
  author: {
    name: string;
  };
  comments: [];
  excerpt: string;
  featuredImage: {
    url: string;
  };
  slug: string;
  createdAt: Date;
};
export type Categories = {
  featured: [];
  international: [];
  business: [];
  gaming: [];
  featuredVideos: [];
};
