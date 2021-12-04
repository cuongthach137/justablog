import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "../components/Layout";
import { getPosts } from "../services";
import { Post } from "../types";
import ArchivePage from "../components/ArchivePage";

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

//"posts" still infers "any type "wtf?
const Archives: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout
      title="All articles - News In A Box"
      description="News in a box pioneers in news delivery"
      keywords="news new trend hot steemy sexy ass booty"
    >
      {() => <ArchivePage posts={posts} />}
    </Layout>
  );
};

export default Archives;
