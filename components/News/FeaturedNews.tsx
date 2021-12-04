import React from "react";
import Link from "next/link";
import { joinClx } from "../../utils/joinClassName";
import { Post } from "../../types";

type NewsProps = {
  posts: Post[];
};

const FeaturedNews = ({ posts }: NewsProps) => {
  return (
    <div className="p-4 mb-10">
      <div className="mb-4 w-full bg-gradient-to-r from-blue-700 to-blue-300 p-[2px] lg:flex lg:flex-wrap lg:p-[2px]">
        {/* daily bites */}
        {posts &&
          posts.length > 0 &&
          posts.map((post: Post, index) => {
            const half = index === 0 || index === 3;
            const outerMost = joinClx(
              "w-full border-blue-200  lg:p-[2px] lg:h-80 lg:relative lg:border-none ",
              half ? "lg:w-2/3" : "lg:w-1/3 ",
              index === 7 ? "lg:hidden" : "",
              index === posts.length - 2 ? "" : "border-b-[1px]"
            );

            const inner = joinClx(
              "md-h-96  flex items-center bg-black gap-2 lg:gap-0 lg:p-0 lg:w-full lg:h-full ",
              half ? "" : "lg:block"
            );

            const innerMostText = joinClx(
              "flex-none lg:p-2",
              index !== 0 ? "w-2/3 " : "w-[10rem] ",
              half ? "lg:w-1/2 lg:h-full lg:p-5" : "lg:w-full "
            );
            const innerMostImg = joinClx(
              "cursor-pointer w-full",
              half ? "lg:h-full" : "lg:w-full lg:h-3/5 2xl:h-2/3"
            );

            const img = joinClx(
              "object-cover lg:h-full w-full ",
              half ? "" : "lg:w-full"
            );

            const titleClx = joinClx(
              "text-lg leading-3 text-white hover:text-blue-500 font-semibold max-w-[9rem] cursor-pointer 2xl:w-full ",
              half ? "lg:text-4xl" : "2xl:text-lg"
            );

            const creditClx = joinClx(
              "text-sm 2xl:uppercase lg-text",
              half ? "2xl:my-5" : ""
            );
            if (index === posts.length - 1) {
              return (
                <div
                  key={post.id}
                  className="hidden gap-5 items-center justify-center w-full m-12 2xl:flex"
                >
                  <div className="text-right flex-1 text-2xl">
                    <div className="text-white hover:text-blue-100 cursor-pointer">
                      <Link href={`/article/${post.id}/title/${post.slug}`}>
                        {post.title}
                      </Link>
                    </div>
                    <div className="uppercase text-white hover:text-blue-100">
                      BY{" "}
                      <span className=" cursor-pointer">
                        <Link href={`/author/${post.author.name}`}>
                          {post.author.name}
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="text-5xl flex-1 ">
                    <i className="cursor-pointer text-white hover:text-blue-100 ">
                      <Link href={`/article/${post.id}/title/${post.slug}`}>
                        {post.excerpt}
                      </Link>
                    </i>
                  </div>
                </div>
              );
            }
            return (
              <div key={post.id} className={outerMost}>
                <div className={inner}>
                  <div className={innerMostImg}>
                    <Link href={`/article/${post.id}/title/${post.slug}`}>
                      <img
                        className={img}
                        src={post.featuredImage?.url}
                        alt={post.title}
                      />
                    </Link>
                  </div>
                  <div className={innerMostText}>
                    <div className="text-xs lg:hidden text-white">Featured</div>
                    <Link href={`/article/${post.id}/title/${post.slug}`}>
                      <span className={titleClx}>{post.title}</span>
                    </Link>
                    <div className={creditClx}>
                      <span className="font-semibold text-blue-500">By </span>
                      <Link href={`/author/${post.author.name}`}>
                        <span className="text-blue-500 cursor-pointer">
                          {post.author.name}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                {index === 0 && (
                  <div className="hidden 2xl:block absolute left-[7rem] bottom-5">
                    <div className="absolute before:block before:w-12 before:bg-blue-700 before:h-[4px] before:rotate-[130deg] " />
                    <div className="absolute after:block after:w-96 after:bg-blue-700 after:h-[4px] left-[2.4rem] bottom-[13px] " />
                  </div>
                )}
                {index === 3 && (
                  <div className="hidden 2xl:block absolute right-[7rem] bottom-5">
                    <div className="absolute before:block before:w-12 before:bg-blue-300 before:h-[4px] before:rotate-[50deg] " />
                    <div className="absolute after:block after:w-96 after:bg-blue-300 after:h-[4px] right-[-10px] bottom-[13px] " />
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FeaturedNews;
