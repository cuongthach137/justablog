import React from "react";
import Link from "next/link";
const StyledNews = () => {
  return (
    <div className=" bg-blue-600 text-white">
      <div className="p-4 mb-3 ">
        <div className="text-2xl leading-[24px] mb-2">
          WHY A TOASTER FROM 1949 IS STILL SMARTER THAN ANY SOLD TODAY
        </div>
        <div className="flex gap-1 text-xs">
          <div>
            <span className="font-semibold">By</span>{" "}
            <span className="cursor-pointer">
              <Link href={"/author/sam-byford"}>Sam Byford</Link>
            </span>
          </div>
          <div>|</div>
          <div>Today at 1:59pm</div> <div>|</div>
          <div className="cursor-pointer">2 comments</div>
        </div>
      </div>
      <div className="relative pb-2">
        <div className="absolute right-[2rem]">
          <div className="absolute before:block before:w-8 before:bg-white before:h-[2px] before:rotate-[50deg] " />
          <div className="absolute after:block after:w-48 after:bg-white after:h-[2px] right-[-6px] bottom-[10px] " />
        </div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/BKu5K5bBzfG7pDASQnsRm_FaIdw=/0x127:2040x1275/560x315/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70192418/shollister_toaster_20211123.0.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default StyledNews;
