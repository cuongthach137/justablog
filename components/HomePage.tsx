import React from "react";
import InterNews from "./News/InternationalNews";
import StyledNews from "./News/StyledNews";
import FeaturedNews from "./News/FeaturedNews";
import FeaturedVideos from "./Widgets/FeaturedVideos";
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
          <InterNews posts={posts.international} />
          {/* Featured article */}
          {/* random news? */}
          <StyledNews />
        </div>
        <aside className="hidden lg:block p-3">
          <FeaturedVideos />
          <FeaturedVideos />
        </aside>
      </div>
    </div>
  );
};

export default Main;
