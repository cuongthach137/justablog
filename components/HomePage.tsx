import React from "react";
import NewsCard from "./News/NewsCard";
import FeaturedNews from "./News/FeaturedNews";
import RightSideContent from "./Widgets/RightSideContent";
import { Categories } from "../types";

const Main = ({ posts }: { posts: Categories }) => {
  return (
    <div className="">
      <div className="bg-black lg:px-60">
        <FeaturedNews posts={posts.featured} />
      </div>
      <div className="lg:flex lg:gap-5 lg:px-60 container lg:mx-auto">
        <div className="max-w-3xl">
          <NewsCard posts={posts.international} />
          <NewsCard posts={posts.entertainment} />
          <NewsCard posts={posts.business} />
          <NewsCard posts={posts.tech} />
        </div>
        <div className=" hidden lg:block">
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
