import React from "react";
import { Post } from "../types";
import NewsCard from "./News/NewsCard";

const ByAuthorPage = ({
  posts,
  authorName,
}: {
  posts: Post[];
  authorName: string;
}) => {
  return (
    <div className="container mx-auto 2xl:px-60 mt-16">
      <div>
        <h1 className="text-2xl 2xl:text-3xl text-center mb-14">
          Posts published by <span className="font-semibold">{authorName}</span>
          :
        </h1>
      </div>
      <NewsCard posts={posts} />
    </div>
  );
};

export default ByAuthorPage;
