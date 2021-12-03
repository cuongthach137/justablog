import React from "react";
import Link from "next/link";
import { Post } from "../../types";
import RandomNews from "./RandomNews";
import moment from "moment";
import StyledNews from "./StyledNews";
import Image from "next/image";

type News = {
  posts: Post[];
};
const NewsCard = ({ posts }: News) => {
  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts.map((post: Post, index) => {
          if (posts.length > 4 && index === posts.length - 3)
            return (
              <div key={post.id}>
                <RandomNews post={post} />
              </div>
            );
          if (posts.length > 2 && index === posts.length - 1)
            return (
              <div key={post.id}>
                <StyledNews post={post} />
              </div>
            );
          return (
            <div
              key={post.id}
              className="flex gap-3 mb-2 border-t-[1px] border-blue-200 pt-1 lg:gap-0 lg:h-32 "
            >
              <div className="flex-auto cursor-pointer max-h-[7.5rem] lg:w-[13rem] lg:flex-none">
                <Link href={`/article/${post.id}/title/${post.slug}`}>
                  <Image
                    className="object-cover h-full w-full "
                    src={post.featuredImage.url}
                    alt={post.title}
                  />
                </Link>
              </div>
              <div className="flex-none w-2/3 lg:p-3">
                <div className="font-semibold cursor-pointer hover:text-blue-500 lg:text-xl">
                  <Link href={`/article/${post.id}/title/${post.slug}`}>
                    {post.title}
                  </Link>
                </div>
                <div className="text-xs lg:text-sm">
                  <div className="font-semibold inline-block">By</div>{" "}
                  <div className="text-blue-500 cursor-pointer inline-block">
                    <Link href={`/author/${post.author.name}`}>
                      {post.author.name}
                    </Link>
                  </div>
                  <div className="inline-block mx-1">|</div>
                  <div className="inline-block">
                    {moment(post.createdAt).calendar()}
                  </div>
                  {post.comments.length > 0 && (
                    <div className="cursor-pointer inline-block">
                      <div className="inline-block mx-1">|</div>
                      {post.comments.length + " comment(s)"}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default NewsCard;
