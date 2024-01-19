import React from "react";
import ScrollTalks from "./ScrollTalks";
import ScrollTalkMobile from "./ScrollTalkMobile";

const Talks = () => {
  return (
    <div className="bg-[#241f20] border-top border-bottom pt-20 relative">
      <div className="w-full h-full flex items-center justify-center">
        <ScrollTalks />
        <ScrollTalkMobile />
      </div>
    </div>
  );
};

export default Talks;
