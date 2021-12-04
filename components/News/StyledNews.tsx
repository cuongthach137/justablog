import React from "react";
import Link from "next/link";
import { Post } from "../../types";
import moment from "moment";
const StyledNews = ({ post }: { post: Post }) => {
  return (
    <div className=" bg-blue-600 text-white">
      <div className="p-4 mb-3 ">
        <div className="text-2xl leading-[24px] mb-2 uppercase">
          <Link href={`/article/${post.id}/title/${post.slug}`}>
            {post.title}
          </Link>
        </div>
        <div className="flex gap-1 text-xs">
          <div>
            <span className="font-semibold">By</span>{" "}
            <span className="cursor-pointer">
              <Link href={"/author/sam-byford"}>{post.author.name}</Link>
            </span>
          </div>
          <div>{moment(post.createdAt).calendar()}</div>
          {post.comments.length > 0 && (
            <div className="cursor-pointer inline-block">
              <div className="inline-block mx-1">|</div>
              {post.comments.length + " comment(s)"}
            </div>
          )}
        </div>
      </div>
      <div className="relative">
        <div className="absolute right-[2rem]">
          <div className="absolute before:block before:w-8 before:bg-white before:h-[2px] before:rotate-[50deg] " />
          <div className="absolute after:block after:w-48 after:bg-white after:h-[2px] right-[-6px] bottom-[10px] " />
        </div>
        <Link href={`/article/${post.id}/title/${post.slug}`}>
          <img
            className="w-full cursor-pointer"
            src={post.featuredImage.url}
            alt={post.title}
          />
        </Link>
      </div>
    </div>
  );
};

export default StyledNews;
