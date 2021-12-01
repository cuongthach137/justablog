import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GMS_ENDPOINT || "";

//get posts by category: 7 for featured

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result;
};

export const getPostsByCategory = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String) {
      posts(where: { categories_every: { slug: $slug } }) {
        slug
        title
        excerpt
        author {
          name
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
  const result = await request(graphqlAPI, query, { slug });
  return result.posts;
};

export const getHomePagePosts = async () => {
  const query = gql`
    query MyQuery(
    ) {
      featured: posts(where: { categories_every: { name: "featured" } } last:8 orderBy: createdAt_ASC) { slug
          id
        title
        author {
          name
        }
        excerpt
        comments {
          id
        }featuredImage {
      url
    } createdAt
      }
      international: posts(where: { categories_every: { name: "international" } }) {        id slug
        title
        author {
          name
        }
        excerpt
        comments {
          id
        }featuredImage {
      url
    }createdAt
      }
      gaming: posts(where: { categories_every: { name: "gaming" } }) {id slug
        title
        author {
          name
        }
        excerpt
        comments {
          id
        }featuredImage {
      url
    }createdAt
      }
      business: posts(where: { categories_every: { name: "business" } }) {id slug
        title
        author {
          name
        }
        excerpt
        comments {
          id
        }featuredImage {
      url
    }createdAt
      }
      featuredVideos: posts(where: { categories_every: { name: "featuredVideos"} }) {id slug
        title
        author {
          name
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
  const result = await request(graphqlAPI, query);

  return result;
};
