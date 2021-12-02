import React from "react";
import Link from "next/link";
import { Post } from "../../types";
import RandomNews from "./RandomNews";
import moment from "moment";
type News = {
  posts: Post[];
};
const InterNews = ({ posts }: News) => {
  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts.map((post: Post, index) => (
          <>
            {index === 4 && <RandomNews post={post} />}
            <div className="flex gap-3 mb-2 border-t-[1px] border-blue-200 pt-1 lg:gap-0 lg:h-32 ">
              <div className="flex-auto cursor-pointer lg:h-full lg:w-[13rem] lg:flex-none">
                {" "}
                <Link href={`/article/${post.id}/title/${post.slug}`}>
                  <img
                    className="object-cover lg:h-full lg:w-full "
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
                <div className="flex gap-1 text-xs lg:text-sm">
                  <div>
                    <span className="font-semibold">By</span>{" "}
                    <span className="text-blue-500 cursor-pointer">
                      <Link href={`/author/${post.author.name}`}>
                        {post.author.name}
                      </Link>
                    </span>
                  </div>
                  <div>|</div>
                  <div>{moment(post.createdAt).calendar()}</div>
                  <div className="cursor-pointer">
                    {post.comments.length > 0
                      ? "|" + post.comments.length + "comment(s)"
                      : ""}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </>
  );
};

export default InterNews;
