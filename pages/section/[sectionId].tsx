import React from "react";
import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
import SectionPage from "../../components/SectionPage";

const Section = () => {
  const { query } = useRouter();

  return (
    <Layout
      title="Home - NewsInABox"
      description="News in a box pioneers in news delivery"
      keywords="news new trend delivery hot steemy"
    >
      {(values) => (
        <>
          <div className="text-center uppercase">{query.sectionId} news</div>
          <SectionPage {...values} />
        </>
      )}
    </Layout>
  );
};

export default Section;
