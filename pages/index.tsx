import type { NextPage, GetServerSideProps } from "next";
import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import { getHomePagePosts } from "../services";
import { Categories } from "../types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts: Categories = await getHomePagePosts();
  if (!posts) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      posts,
    },
  };
};

//"posts" still infers "any type "wtf?
const Home: NextPage = ({ posts }: any) => {
  return (
    <Layout
      title="Home - NewsInABox"
      description="News in a box pioneers in news delivery"
      keywords="news new trend hot steemy sexy ass booty"
    >
      {(values) => <HomePage posts={posts} {...values} />}
    </Layout>
  );
};

export default Home;
