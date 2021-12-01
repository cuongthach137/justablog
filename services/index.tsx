import { request, gql } from "graphql-request";

const graphqlAPI =
  "https://api-ap-northeast-1.graphcms.com/v2/ckwhcb47q0xpu01ze1iyxa67e/master";

//get posts by category: 7 for featured

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
