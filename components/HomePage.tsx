import React from "react";
import NewsCard from "./News/NewsCard";
import FeaturedNews from "./News/FeaturedNews";
import RightSideContent from "./Widgets/RightSideContent";
import { Categories } from "../types";

const Main = ({ posts }: { posts: Categories }) => {
  return (
    <div className="">
      <div className="bg-black lg:px-5 xl:px-20 2xl:px-60">
        <FeaturedNews posts={posts.featured} />
      </div>
      <div className=" xl:container mx-auto xl:flex xl:justify-center xl:gap-5 2xl:px-60 ">
        <div className="w-full mx-auto xl:mx-0 md:max-w-3xl">
          <NewsCard posts={posts.international} />
          <NewsCard posts={posts.entertainment} />
          <NewsCard posts={posts.business} />
          <NewsCard posts={posts.tech} />
        </div>
        <div className=" hidden max-w-[300px] xl:block">
          <RightSideContent
            posts={posts.featuredVideos}
            title="featured videos"
            category="featured-video"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
