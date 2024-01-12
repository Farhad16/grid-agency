"use client";
import React, { useEffect, useState } from "react";
import VerticleEl from "../shared/VerticleEl";
import Wrapper from "../shared/Wrapper";
import ScrollTalks from "./ScrollTalks";
import ScrollTalkMobile from "./ScrollTalkMobile";

const Talks = () => {
  return (
    <div className="relative w-full bg-[#241f20] border-top border-bottom pt-20">
      <Wrapper className="w-full h-full flex items-center justify-center min-h-[400px]">
        <ScrollTalks />
      </Wrapper>

      <Wrapper className="sm:!hidden flex-row w-full h-full !flex overflow-hidden sm:!px-[100px] !px-12">
        <ScrollTalkMobile />
      </Wrapper>
    </div>
  );
};

export default Talks;
