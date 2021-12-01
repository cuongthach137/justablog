import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import { getHomePagePosts } from "../services";
import { Categories } from "../types";

export const getStaticProps: GetStaticProps = async () => {
  const posts: Categories = (await getHomePagePosts()) || {};

  return {
    props: {
      posts,
    },
  };
};

//"posts" still infers any type wtf?
const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout
      title="Home - NewsInABox"
      description="News in a box pioneers in news delivery"
      keywords="news new trend delivery hot steemy"
    >
      {(values) => <HomePage posts={posts} {...values} />}
    </Layout>
  );
};

export default Home;
