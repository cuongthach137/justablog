import React from "react";
import { Post } from "../../types";
import capitalize from "../../utils/capitalize";
import Link from "next/link";

type PropTypes = {
  title: string;
  category: string;
  posts?: Post[];
};
const RightSide = ({
  title = "News",
  category = "Category",
  posts,
}: PropTypes) => {
  return (
    <aside>
      <h3 className="relative text-center mb-3 text-2xl before:absolute before:w-[95.5%] before:h-[2.2px] before:bg-blue-500 before:top-9 before:right-[-0.8rem] after:absolute after:w-9 after:h-[2.2px] after:bg-blue-500 after:rotate-45 after:left-[-0.4rem] after:top-[1.5rem]">
        {capitalize(title)}
      </h3>
      <div className="py-4 pr-[12px] ">
        {posts &&
          posts.length > 0 &&
          posts.map((p, index) => (
            <div key={index} className="mb-4">
              <div className="w-full">
                <Link href={`/article/${p.id}/title/${p.slug}`}>
                  <img
                    className="w-full cursor-pointer"
                    src={p.featuredImage.url}
                    alt={p.title}
                  />
                </Link>
              </div>
              <div className="cursor-pointer text-sm font-semibold">
                <Link href={`/article/${p.id}/title/${p.slug}`}>{p.title}</Link>
              </div>
            </div>
          ))}
      </div>
      <h4 className="text-right relative after:absolute after:w-[65%] after:h-[2.2px] after:bg-blue-500 after:bottom-0 after:right-0  before:absolute before:w-[2rem] before:h-[2.2px] before:bg-blue-500 before:bottom-0 before:left-[100%] before:rotate-[-50deg] before:origin-bottom-left mt-6">
        <Link href={`/${category}`}>
          <span className="cursor-pointer">More in {capitalize(category)}</span>
        </Link>
      </h4>
    </aside>
  );
};

export default RightSide;
