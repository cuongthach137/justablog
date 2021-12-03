import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import ByAuthorPage from "../../components/ByAuthorPage";
import Layout from "../../components/Layout";
import { getAuthors, getPostsByAuthor } from "../../services";
import { Author, Post } from "../../types";

export const getStaticPaths = async () => {
  const data: [] = (await getAuthors()) || [];

  const paths = data.map((c: { name: string }) => ({
    params: {
      authorName: c.name,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

interface Params extends ParsedUrlQuery {
  authorName: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { authorName } = params as Params;
  const posts: Post[] = (await getPostsByAuthor(authorName)) || [];

  return {
    props: {
      posts,
      authorName,
    },
  };
};

const Author = ({
  posts,
  authorName,
}: {
  posts: Post[];
  authorName: string;
}) => {
  return (
    <Layout
      title="Home - NewsInABox"
      description="News in a box pioneers in news delivery"
      keywords="news new trend delivery hot steemy"
    >
      {() => <ByAuthorPage posts={posts} authorName={authorName} />}
    </Layout>
  );
};

export default Author;
