// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { GraphQLClient, gql } from "graphql-request";
const graphqlAPI = process.env.GMS_ENDPOINT || "";
const token = process.env.GMS_COMMENT_TOKEN || "";
const client = new GraphQLClient(graphqlAPI, {
  method: "POST",
  headers: {
    Authorization: "Bearer " + token,
  },
});
type Data = {
  comment: string;
  email: string;
  name: string;
  slug: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);

  const query = gql`
    mutation CreateComment(
      $comment: String!
      $name: String!
      $email: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          post: { connect: { Post: { slug: $slug } } }
          comment: $comment
        }
      ) {
        comment
        name
        email
        id
      }
    }
  `;

  const result: {
    createComment: Data;
  } = await client.request(query, req.body);

  res.status(200).json({
    comment: result.createComment.comment,
    email: result.createComment.email,
    name: result.createComment.name,
    slug: result.createComment.slug,
  });
}
