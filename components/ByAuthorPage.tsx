import React from "react";
import { Author, Post } from "../types";
import NewsCard from "./News/NewsCard";

const ByAuthorPage = ({
  posts,
  authorName,
}: {
  posts: Post[];
  authorName: string;
}) => {
  return (
    <div className="container mx-auto lg:px-60">
      <div>
        <h1 className="text-2xl lg:text-3xl text-center mb-10">
          Posts published by <span className="font-semibold">{authorName}</span>
          :
        </h1>
      </div>
      <NewsCard posts={posts} />
    </div>
  );
};

export default ByAuthorPage;
