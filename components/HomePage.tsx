import React from "react";
import NewsCard from "./News/NewsCard";
import FeaturedNews from "./News/FeaturedNews";
import RightSideContent from "./Widgets/RightSideContent";
import { Categories } from "../types";

const Main = ({ posts }: { posts: Categories }) => {
  return (
    <div className="">
      <div className="bg-black 2xl:px-60">
        <FeaturedNews posts={posts.featured} />
      </div>
      <div className="2xl:flex 2xl:gap-5 2xl:px-60 container 2xl:mx-auto">
        <div className="max-w-3xl">
          <NewsCard posts={posts.international} />
          <NewsCard posts={posts.entertainment} />
          <NewsCard posts={posts.business} />
          <NewsCard posts={posts.tech} />
        </div>
        <div className=" hidden 2xl:block">
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
