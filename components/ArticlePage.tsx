import moment from "moment";
import React from "react";
import { Post } from "../types";
import capitalize from "../utils/capitalize";
import Link from "next/link";
import RightSideContent from "./Widgets/RightSideContent";
import { RichText } from "@graphcms/rich-text-react-renderer";

const ArticlePage = ({ post, nextPosts }: { post: Post; nextPosts: [] }) => {
  return (
    <div className="container mx-auto px-4 lg:px-60">
      <div>
        {post.categories.map((c) => (
          <span className="text-blue-500 cursor-pointer">
            <Link href={`/${c.slug}`}>{capitalize(c.name)}</Link>
          </span>
        ))}
      </div>
      <div className="mb-5">
        <h1 className="text-3xl leading-[1.2] mb-3 lg:text-5xl lg:mb-4 font-semibold ">
          {post.title}
        </h1>
        <div className="mb-2 lg:mb-4">
          <i className="text-lg lg:text-xl text-gray-500">{post.excerpt}</i>
        </div>
        <div className="text-sm lg:text-lg">
          By{" "}
          <span className="text-blue-500 cursor-pointer">
            {post.author.name}
          </span>
          {" | "}
          <span className="text-gray-500">
            {moment(post.createdAt).format("LLLL")}
          </span>
        </div>
      </div>
      <div className=" flex justify-between gap-10 ">
        <div className="max-w-3xl">
          <div className=" lg:mb-4h-[35rem] pb-5 mb-4 border-blue-100 border-b-[1px]">
            <img
              className=" w-full h-full object-cover"
              src={post.featuredImage.url}
              alt={post.title}
            />
          </div>
          <div className="text-gray-700">
            <RichText
              content={post.content.raw.children}
              renderers={{
                p: ({ children }) => <p className="mb-[1.2rem]">{children}</p>,
                ul: ({ children }) => (
                  <ul className="mb-4 list-disc ml-10">{children}</ul>
                ),
                ol: ({ children }) => <ol className="mb-4">{children}</ol>,
                li: ({ children }) => (
                  <li className="font-bold leading-6 mb-[0.6rem]">
                    <p className="font-normal">{children}</p>
                  </li>
                ),
                bold: ({ children }) => <strong>{children}</strong>,
                italic: ({ children }) => <em>{children}</em>,
                h2: ({ children }) => (
                  <h2 className="font-semibold text-2xl my-5">{children}</h2>
                ),
                h1: ({ children }) => (
                  <h1 className="font-semibold">{children}</h1>
                ),
                blockquote: ({ children }) => {
                  return (
                    <div className="ml-5 lg:ml-10 float-right lg:max-w-[20rem] ">
                      <aside>
                        <q className="block mb-[1.2rem] pr-[1.25rem] pt-4 text-3xl font-semibold uppercase relative after:absolute after:h-[2px] after:top-0 after:left-0 after:right-[18px] after:z-10 after:bg-blue-500 before:absolute before:bg-blue-500 before:w-[35px] before:h-[2px] before:rotate-[-120deg] before:right-[19px] before:top-[1px] italic before:origin-top-right">
                          {children}
                        </q>
                      </aside>
                    </div>
                  );
                },
                a: ({ children, openInNewTab, href, rel, ...rest }) => {
                  if (href?.match(/^https?:\/\/|^\/\//i)) {
                    return (
                      <a
                        className="font-semibold text-blue-500 hover:text-blue-800 underline"
                        href={href}
                        target={openInNewTab ? "_blank" : "_self"}
                        rel={rel || "noopener noreferrer"}
                        {...rest}
                      >
                        {children}
                      </a>
                    );
                  }

                  return (
                    <Link href={href || "#"}>
                      <a className="font-bold" {...rest}>
                        {children}
                      </a>
                    </Link>
                  );
                },
              }}
            />
          </div>
          <div className="mb-5">
            <h2 className="inline-block relative text-3xl mb-3 mt-10 before:absolute before:bg-transparent before:border-r-2 before:border-t-2 before:border-solid before:border-blue-500 before-w-full before:z-0 z-10 py-[12px] px-4 ">
              Up Next
            </h2>
            {nextPosts.map((post: Post) => {
              return (
                <>
                  <ol>
                    <li className="mb-1 text-blue-500 hover:text-blue-800">
                      <Link href={`/article/${post.id}/title/${post.slug}`}>
                        {post.title}
                      </Link>
                    </li>
                  </ol>
                </>
              );
            })}
          </div>
          <div>
            <div className="mb-5">
              <h2 className="text-3xl">
                There are {post.comments.length} comments
              </h2>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <RightSideContent
            title="up next"
            category={post.categories[0]?.name}
            posts={nextPosts}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;