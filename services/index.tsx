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
      posts(where: { categories_every: { slug: $slug } }) {
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
      featured: posts(where: { categories_some: { name: "featured" } } last:8 orderBy: createdAt_ASC) { slug
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
      international: posts(where: { categories_some: { name: "international" } }) {        id slug
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
      gaming: posts(where: { categories_some: { name: "gaming" } }) {id slug
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
      business: posts(where: { categories_some: { name: "business" } }) {id slug
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
      featuredVideos: posts(where: { categories_some: { name: "featuredVideos"} }) {id slug
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
    query MyQuery() {
      posts {
        slug
        title
       id
      }
    }
  `;
  const result = await client.request(query);
  return result.posts;
};

export const getPostsByAuthor = async (authorId: string) => {
  const query = gql`
    query MyQuery($authorId: ID) {
      posts(where: { author: { id: $authorId } }) {
        slug
        title
        excerpt
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
        }
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await client.request(query, { authorId });
  return result.posts;
};

export const getNextPosts = async (categories: string[], slug: string) => {
  const query = gql`
    query MyQuery($categories: [String!], $slug: String!) {
      posts(
        where: { slug_not: $slug, categories_some: { slug_in: $categories } }
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
