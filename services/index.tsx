import { gql, GraphQLClient, request } from "graphql-request";
import { Comment } from "../types";

const graphqlAPI = process.env.GMS_ENDPOINT || "";

const client = new GraphQLClient(graphqlAPI, {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
});

//get posts by category: 7 for featured

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        slug
      }
    }
  `;
  const result = await client.request(query);
  return result;
};

export const getPostsByCategory = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String) {
      posts(
        where: { categories_some: { slug: $slug } }
        orderBy: createdAt_DESC
      ) {
        id
        slug
        title
        excerpt
        author {
          name
          id
        }
        comments {
          id
        }
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await client.request(query, { slug });
  return result.posts;
};

export const getHomePagePosts = async () => {
  const query = gql`
    query MyQuery(
    ) {
      featured: posts(where: { categories_some: { slug: "featured" } } last:8 orderBy: createdAt_DESC) { slug
          id
        title
        author {
          name id
        }
        excerpt
        comments {
          id
        }featuredImage {
      url
    } createdAt
      }
      international: posts(where: { categories_some: { slug: "international" } }) {        id slug
        title
        author {
          name id
        }
        excerpt
        comments {
          id
        }featuredImage {
      url
    }createdAt
      }
      entertainment: posts(where: { categories_some: { slug: "entertainment" } }) {id slug
        title
        author {
          name id
        }
        excerpt
        comments {
          id
        }featuredImage {
      url
    }createdAt
      }
      business: posts(where: { categories_some: { slug: "business" } }) {id slug
        title
        author {
          name id
        }
        excerpt
        comments {
          id
        }featuredImage {
      url
    }createdAt
      }
      featuredVideos: posts(where: { categories_some: { slug: "featured-video"} }) {
        id slug
        title
        author {
          name id
        }
        excerpt
        comments {
          id
        }featuredImage {
      url
    }createdAt
      }
      tech: posts(where: { categories_some: { slug: "tech"} }) {
        id slug
        title
        author {
          name id
        }
        excerpt
        comments {
          id
        }featuredImage {
      url
    }createdAt
      }
    }
  `;
  const result = await client.request(query);

  return result;
};

export const getPost = async (title: string, id: string) => {
  const query = gql`
    query MyQuery($id: ID, $title: String) {
      post(where: { slug: $title, id: $id }) {
        slug
        title
        excerpt
        createdAt
        categories {
          slug
          name
        }
        author {
          name
          id
        }
        comments {
          id
          createdAt
          name
          email
          comment
        }
        featuredImage {
          url
        }
        content {
          text
          markdown
          html
          raw
        }
      }
    }
  `;
  const result = await client.request(query, { title, id });
  return result.post;
};

export const getPosts = async () => {
  const query = gql`
    query MyQuery(orderBy: createdAt_DESC) {
      posts {
        id slug
        title
        author {
          name id
        }
        excerpt
        comments {
          id
        }featuredImage {
      url
    }createdAt
      }
    }
  `;
  const result = await client.request(query);
  return result.posts;
};

export const getPostsByAuthor = async (authorName: string) => {
  const query = gql`
    query MyQuery($authorName: String) {
      posts(where: { author: { name: $authorName } }) {
        id
        slug
        title
        excerpt
        author {
          name
          id
        }
        comments {
          id
        }
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await client.request(query, { authorName });
  return result.posts;
};
export const getAuthors = async () => {
  const query = gql`
    query MyQuery {
      authors {
        name
        id
      }
    }
  `;
  const result = await client.request(query);
  return result.authors;
};
export const getAuthor = async (authorName: string) => {
  const query = gql`
    query MyQuery($authorName: String) {
      author(where: { name: $authorName }) {
        name
        id
        bio
        photo {
          url
        }
      }
    }
  `;
  const result = await client.request(query, { authorName });
  return result.author;
};

export const getNextPosts = async (categories: string[], slug: string) => {
  const query = gql`
    query MyQuery($categories: [String!], $slug: String!) {
      posts(
        where: { slug_not: $slug, categories_some: { slug_in: $categories } }
        last: 4
        orderBy: createdAt_ASC
      ) {
        id
        slug
        title
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await client.request(query, { categories, slug });
  return result.posts;
};

export const submitComment = async (comment: Comment) => {
  const result = await fetch("/api/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });

  return result.json();
};
