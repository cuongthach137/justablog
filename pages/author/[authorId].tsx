import { useRouter } from "next/dist/client/router";
import React from "react";
import Layout from "../../components/Layout";

const Author = () => {
  const { query } = useRouter();
  return (
    <Layout
      title="Home - NewsInABox"
      description="News in a box pioneers in news delivery"
      keywords="news new trend delivery hot steemy"
    >
      {(values) => (
        <>
          <div className="text-center uppercase">{query.authorId} </div>
        </>
      )}
    </Layout>
  );
};

export default Author;
