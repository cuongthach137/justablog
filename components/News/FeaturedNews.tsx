import React from "react";
import Link from "next/link";
import { joinClx } from "../../utils/joinClassName";
import { Post } from "../../types";

type NewsProps = {
  posts: Post[];
};

const InterNews = ({ posts }: NewsProps) => {
  return (
    <div className="p-4">
      <div className="mb-4 w-full bg-gradient-to-r from-blue-500 to-blue-200 p-[3px] lg:flex lg:flex-wrap lg:p-[2px]">
        {/* daily bites */}
        {posts &&
          posts.length > 0 &&
          posts.map((post: Post, index) => {
            const half = index === 0 || index === 3;
            const outerMost = joinClx(
              "w-full lg:p-[2px] lg:h-80 lg:relative",
              half ? "lg:w-2/3" : "lg:w-1/3 ",
              index === 7 ? "lg:hidden" : ""
            );

            const inner = joinClx(
              "flex gap-2 lg:gap-0 p-2 bg-white lg:p-0 lg:w-full lg:h-full",
              half ? "lg:h-full" : "lg:block"
            );

            const innerMostText = joinClx(
              "flex-none  lg:p-4",
              index !== 0 ? "w-2/3 " : "w-[10rem] ",
              half ? "lg:w-1/2 lg:h-full" : "lg:w-full "
            );
            const innerMostImg = joinClx(
              "cursor-pointer ",
              half ? "lg:h-full" : "lg:w-full lg:h-2/3"
            );

            const img = joinClx(
              "object-cover lg:h-full ",
              half ? "" : "lg:w-full"
            );

            const titleClx = joinClx(
              "text-lg leading-3  font-semibold max-w-[9rem] cursor-pointer lg:w-full",
              half ? "lg:text-5xl" : "lg:text-xl"
            );

            const creditClx = joinClx(
              "text-sm lg:uppercase lg-text",
              half ? "lg:my-5" : ""
            );
            if (index === posts.length - 1) {
              return (
                <div className="hidden lg:flex gap-5 items-center justify-center w-full m-12">
                  <div className="text-right text-2xl flex-1">
                    <div className="hover:text-white cursor-pointer">
                      <Link href={`/article/${post.id}/title/${post.slug}`}>
                        {post.title}
                      </Link>
                    </div>
                    <div className="uppercase">
                      BY{" "}
                      <span className="hover:text-white cursor-pointer">
                        <Link href={`/author/${post.author.name}`}>
                          {post.author.name}
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="text-5xl flex-1">
                    <i className="cursor-pointer hover:text-white">
                      <Link href={`/article/${post.id}/title/${post.slug}`}>
                        {post.excerpt}
                      </Link>
                    </i>
                  </div>
                </div>
              );
            }
            return (
              <div className={outerMost}>
                <div className={inner}>
                  <div className={innerMostImg}>
                    <img className={img} src={post.featuredImage.url} alt="" />
                  </div>
                  <div className={innerMostText}>
                    <div className="text-xs lg:hidden ">Daily bites</div>
                    <Link href={`/article/${post.id}/title/${post.slug}`}>
                      <span className={titleClx}>{post.title}</span>
                    </Link>
                    <div className={creditClx}>
                      <span className="font-semibold">By </span>
                      <Link href={`/author/${post.author.name}`}>
                        <span className="text-blue-500 cursor-pointer">
                          {post.author.name}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {index === 0 && (
                  <div className="hidden lg:block absolute left-[7rem] bottom-5">
                    <div className="absolute before:block before:w-12 before:bg-blue-500 before:h-[4px] before:rotate-[130deg] " />
                    <div className="absolute after:block after:w-96 after:bg-blue-500 after:h-[4px] left-[2.4rem] bottom-[13px] " />
                  </div>
                )}
                {index === 3 && (
                  <div className="hidden lg:block absolute right-[7rem] bottom-5">
                    <div className="absolute before:block before:w-12 before:bg-blue-200 before:h-[4px] before:rotate-[50deg] " />
                    <div className="absolute after:block after:w-96 after:bg-blue-200 after:h-[4px] right-[-10px] bottom-[13px] " />
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default InterNews;
