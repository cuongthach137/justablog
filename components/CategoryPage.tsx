import React from "react";
import { Post } from "../types";
import NewsCard from "./News/NewsCard";

const CategoryPage = ({
  posts,
  category,
}: {
  posts: Post[];
  category: string;
}) => {
  return (
    <div className="mt-16">
      <h1 className="text-center text-2xl uppercase mb-14">{category}</h1>
      <div className="container 2xl:mx-auto 2xl:flex 2xl:gap-20 2xl:px-60 ">
        <div>
          <NewsCard posts={posts} />
        </div>
        <aside className="hidden 2xl:flex flex-col gap-20">
          {/* news letter */}
        </aside>
      </div>
    </div>
  );
};

export default CategoryPage;
