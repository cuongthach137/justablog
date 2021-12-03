export type Comment = {
  name: string;
  email: string;
  comment: string;
  createdAt?: Date;
};

export type Post = {
  id: string;
  title: string;
  author: {
    name: string;
    id: string;
  };
  comments: Comment[];
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
  entertainment: [];
  featuredVideos: [];
  tech: [];
};

export type Category = {
  slug: string;
  name: string;
};
export type Author = {
  id: string;
  name: string;
  bio: string;
  photo: string;
};
