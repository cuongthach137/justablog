import React from "react";

const FeaturedVideos = () => {
  return (
    <div className="relative before:absolute before:w-[35rem] before:h-[2.2px] before:bg-blue-500 before:origin-bottom-right before:rotate-[-90deg] before:top-[3.91%] before:right-[-5.7%] mb-[150rem]">
      <h3 className="text-center mb-3 text-2xl before:absolute before:w-[95.5%] before:h-[2.2px] before:bg-blue-500 before:top-9 before:right-[-0.8rem] after:absolute after:w-9 after:h-[2.2px] after:bg-blue-500 after:rotate-45 after:left-[-0.4rem] after:top-[1.5rem]">
        Featured Videos
      </h3>
      {Array(4)
        .fill("")
        .map((a) => (
          <div>
            <div className="w-full">
              <img
                className="w-full"
                src="https://cdn.vox-cdn.com/thumbor/NrItqxz7kOfWjZqWMW3Q4MWN9Gc=/0x0:1920x1080/250x141/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70144165/UDC_v02.0.jpeg"
                alt=""
              />
            </div>
            <div>Under-display cameras are slowly geting better</div>
          </div>
        ))}
      <h4 className="text-right relative after:absolute after:w-[65%] after:h-[2.2px] after:bg-blue-500 after:bottom-0 after:right-0  before:absolute before:w-[2rem] before:h-[2.2px] before:bg-blue-500 before:bottom-0 before:left-[100%] before:rotate-[-50deg] before:origin-bottom-left mt-6">
        More in featured videos
      </h4>
    </div>
  );
};

export default FeaturedVideos;
