import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect } from "react";
import ArticlePage from "../../../../components/ArticlePage";
import Layout from "../../../../components/Layout";
import { getNextPosts, getPost, getPosts } from "../../../../services";
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
    fallback: "blocking",
  };
};

interface Params extends ParsedUrlQuery {
  articleTitle: string;
  articleId: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { articleTitle, articleId } = params as Params;
  const post: Post = (await getPost(articleTitle, articleId)) || {};

  const nextPosts = await getNextPosts(
    post.categories.map((c) => c.slug),
    post.slug
  );
  return {
    props: {
      post,
      nextPosts,
    },
  };
};
const article = ({ post, nextPosts }: { post: Post; nextPosts: [] }) => {
  console.log(nextPosts);
  return (
    <Layout>
      {() => (
        <>
          <ArticlePage post={post} nextPosts={nextPosts} />
        </>
      )}
    </Layout>
  );
};

export default article;
