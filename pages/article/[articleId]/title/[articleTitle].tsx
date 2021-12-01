import { useRouter } from "next/dist/client/router";
import React from "react";

const article = () => {
  const { query } = useRouter();

  return (
    <div>
      {query.articleId} -{query.articleTitle}
    </div>
  );
};

export default article;
