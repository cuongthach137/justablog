import React from "react";
import { Post } from "../types";
import NewsCard from "./News/NewsCard";
import RightSide from "./Widgets/RightSideContent";

const CategoryPage = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <div className="container lg:mx-auto lg:flex lg:gap-20 lg:px-60 ">
        <div>
          <NewsCard posts={posts} />
        </div>
        <aside className="hidden lg:flex flex-col gap-20">
          <RightSide title="Featured Videos" category="featured videos" />
        </aside>
      </div>
    </div>
  );
};

export default CategoryPage;
