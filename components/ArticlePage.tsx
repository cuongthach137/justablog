import moment from "moment";
import React from "react";
import { Post } from "../types";
import capitalize from "../utils/capitalize";
import Link from "next/link";
const ArticlePage = ({ post }: { post: Post }) => {
  return (
    <div className="container mx-auto lg:px-40">
      <div>
        {post.categories.map((c) => (
          <span className="text-blue-500 cursor-pointer">
            <Link href={`/${c.slug}`}>{capitalize(c.name)}</Link>
          </span>
        ))}
      </div>
      <div>
        <h1 className="text-5xl mb-4 font-semibold">{post.title}</h1>
        <div className="mb-4">
          <i className="text-xl text-gray-500">{post.excerpt}</i>
        </div>
        <div>
          By{" "}
          <span className="text-blue-500 cursor-pointer">
            {post.author.name}
          </span>{" "}
          <span className="text-gray-500">
            {moment(post.createdAt).format("LLLL")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
