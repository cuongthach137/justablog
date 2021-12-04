import React from "react";
import { Post } from "../types";
import NewsCard from "./News/NewsCard";

const ArchivePage = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="container mt-16 px-60 mx-auto">
      <NewsCard posts={posts} />
    </div>
  );
};

export default ArchivePage;
