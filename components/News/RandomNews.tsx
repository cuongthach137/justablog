import React from "react";
import { Post } from "../../types";
import Link from "next/link";

const RandomNews = ({ post }: { post: Post }) => {
  return (
    <div className="p-4 mb-2 flex gap-3 border-blue-200 border-t-[1px] border-b-[1px]">
      <div className="text-right">
        <div className="text-sm font-semibold">
          <Link href={`/article/${post.id}/title/${post.slug}`}>
            {post.title}
          </Link>
        </div>
        <div className="text-sm">
          <span className="font-semibold"></span>
          <span className="text-blue-500">
            <span className="font-semibold">
              <Link href={`/author/${post.author.name}`}>
                {post.author.name}
              </Link>
            </span>
          </span>
        </div>
      </div>
      <div className="cursor-pointer text-blue-500 text-xl hover:text-blue-800">
        <i>
          {" "}
          <Link href={`/article/${post.id}/title/${post.slug}`}>
            {post.excerpt}
          </Link>
        </i>
      </div>
    </div>
  );
};

export default RandomNews;
