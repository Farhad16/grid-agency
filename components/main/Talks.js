import React from "react";
import Wrapper from "../shared/Wrapper";
import ScrollTalks from "./ScrollTalks";
import ScrollTalkMobile from "./ScrollTalkMobile";

const Talks = () => {
  return (
    <div className="bg-[#241f20] border-top border-bottom pt-20 relative">
      <ScrollTalks />
      <ScrollTalkMobile />
    </div>
  );
};

export default Talks;
