import React from "react";
import Wrapper from "../shared/Wrapper";
import ScrollTalks from "./ScrollTalks";
import ScrollTalkMobile from "./ScrollTalkMobile";

const Talks = () => {
  return (
    <div className="bg-[#241f20] border-top border-bottom pt-20 relative">
      <Wrapper className="w-full h-full flex items-center justify-center min-h-[200px]">
        <ScrollTalks />
        <ScrollTalkMobile />
      </Wrapper>
    </div>
  );
};

export default Talks;
