"use client";
import React, { useEffect, useState } from "react";
import VerticleEl from "../shared/VerticleEl";
import Wrapper from "../shared/Wrapper";
import ScrollTalks from "./ScrollTalks";
import ScrollTalkMobile from "./ScrollTalkMobile";

const Talks = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#241f20] sm:mt-[200px] mt-24 py-[100px] border-top border-bottom">
      <ScrollTalks />

      <Wrapper className="sm:!hidden flex-row w-full h-full !flex overflow-hidden sm:!px-[100px] !px-12">
        <ScrollTalkMobile />
      </Wrapper>
    </div>
  );
};

export default Talks;
