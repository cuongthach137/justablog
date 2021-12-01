import React from "react";
import { Post } from "../../types";

const RandomNews = ({ post }: { post: Post }) => {
  return (
    <div className="p-4 mb-2 flex gap-3 border-blue-200 border-t-[1px] border-b-[1px]">
      <div className="text-right">
        <div className="text-sm font-semibold">{post.title}</div>
        <div className="text-sm">
          <span className="font-semibold"></span>
          <span className="text-blue-500">
            <span className="font-semibold"> {post.author.name}</span>
          </span>
        </div>
      </div>
      <div className="cursor-pointer text-blue-500 text-xl hover:text-blue-800">
        <i>{post.excerpt}</i>
      </div>
    </div>
  );
};

export default RandomNews;
