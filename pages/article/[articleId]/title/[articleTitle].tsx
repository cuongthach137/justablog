import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import ArticlePage from "../../../../components/ArticlePage";
import Layout from "../../../../components/Layout";
import { getPost, getPosts } from "../../../../services";
import { Post } from "../../../../types";

export const getStaticPaths = async () => {
  const data: Post[] = (await getPosts()) || [];
  const paths = data.map((c) => ({
    params: {
      articleTitle: c.slug,
      articleId: c.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  articleTitle: string;
  articleId: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { articleTitle, articleId } = params as Params;
  const post: Post = (await getPost(articleTitle, articleId)) || {};

  return {
    props: {
      post,
    },
  };
};
const article = ({ post }: { post: Post }) => {
  return (
    <Layout>
      {() => (
        <>
          <ArticlePage post={post} />
        </>
      )}
    </Layout>
  );
};

export default article;
