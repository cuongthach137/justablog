import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "../components/Layout";
import { ParsedUrlQuery } from "querystring";
import { getCategories, getPostsByCategory } from "../services";
import CategoryPage from "../components/CategoryPage";

type Category = {
  id: string;
  slug: string;
};

type Categories = {
  categories: Category[];
};

export const getStaticPaths = async () => {
  const data: Categories = await getCategories();

  const paths = data.categories.map((c) => ({
    params: {
      category: c.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

interface Params extends ParsedUrlQuery {
  category: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params as Params;
  const posts: Categories = (await getPostsByCategory(category)) || [];

  return {
    props: {
      posts,
      category,
    },
  };
};

//"posts" still infers "any type "wtf?
const Category: NextPage = ({
  posts,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout
      title="Home - NewsInABox"
      description="News in a box pioneers in news delivery"
      keywords="news new trend hot steemy sexy ass booty"
    >
      {() => <CategoryPage category={category} posts={posts} />}
    </Layout>
  );
};

export default Category;
