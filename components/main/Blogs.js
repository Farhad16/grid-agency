import React from "react";
import ScrollTalkMobile from "./ScrollTalkMobile";
import BlogScroll from "./BlogScroll";

const Blogs = () => {
  return (
    <div className="bg-[#241f20] border-top border-bottom pt-20 relative">
      <div className="w-full h-full flex items-center justify-center">
        <BlogScroll />
        <ScrollTalkMobile />
      </div>
    </div>
  );
};

export default Blogs;
