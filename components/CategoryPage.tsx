import React from "react";
import { Post } from "../types";
import InterNews from "./News/InternationalNews";

const CategoryPage = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      sdsds
      <InterNews posts={posts} />
    </div>
  );
};

export default CategoryPage;
