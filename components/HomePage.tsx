import React from "react";
import NewsCard from "./News/NewsCard";
import StyledNews from "./News/StyledNews";
import FeaturedNews from "./News/FeaturedNews";
import RightSideContent from "./Widgets/RightSideContent";
import { Categories } from "../types";

const Main = ({ posts }: { posts: Categories }) => {
  return (
    <div className="container lg:mx-auto lg:px-24">
      {/* internaltion news */}
      <FeaturedNews posts={posts.featured} />
      {/* random news? */}
      <div className="lg:flex lg:gap-5 lg:px-32">
        <div>
          {" "}
          <NewsCard posts={posts.international} />
          {/* Featured article */}
          {/* random news? */}
          <StyledNews />
        </div>
        <div className=" ">
          <RightSideContent title="featured videos" category="videos" />
          <RightSideContent title="reviews" category="reviews" />
        </div>
      </div>
    </div>
  );
};

export default Main;
