export type Post = {
  id: string;
  title: string;
  author: {
    name: string;
    id: string;
  };
  comments: [];
  excerpt: string;
  featuredImage: {
    url: string;
  };
  slug: string;
  createdAt: Date;
  categories: [
    {
      slug: string;
      name: string;
    }
  ];
  content: {
    text: string;
    raw: {
      children: [];
    };
  };
};
export type Categories = {
  featured: [];
  international: [];
  business: [];
  gaming: [];
  featuredVideos: [];
};

export type Category = {
  slug: string;
  name: string;
};
