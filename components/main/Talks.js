"use client";
import React from "react";
import VerticleEl from "../shared/VerticleEl";
import { talkData } from "@/constance/talks.data";
import Wrapper from "../shared/Wrapper";
import ScrollTalks from "./ScrollTalks";

const Talks = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#241F20] sm:mt-[200px] mt-24 py-[100px] border-top border-bottom">
      <VerticleEl className="left-0 top-[10%] !text-light-50 z-10">
        STUPID TALKS
      </VerticleEl>

      <Wrapper className="flex flex-row w-full h-full">
        <ScrollTalks />
      </Wrapper>

      <VerticleEl className="sm:-right-[0px] -right-4 !text-yellow-550 z-10">
        READ MORE
      </VerticleEl>
    </div>
  );
};

export default Talks;
