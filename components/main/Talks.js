"use client";
import React, { useRef, useEffect } from "react";
import VerticleEl from "../shared/VerticleEl";
import { talkData } from "@/constance/talks.data";
import Wrapper from "../shared/Wrapper";

const Talks = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#241F20] sm:mt-[200px] mt-24 overflow-hidden overflow-x-auto py-[100px]">
      <VerticleEl className="left-0 !text-[#E6E0D2] z-10">
        STUPID TALKS
      </VerticleEl>
      <div class="background-text"></div>
      <Wrapper className="flex flex-row w-full h-full z-10 sm:min-h-[700px] min-h-[500px]">
        {talkData.map((talk, i) => (
          <div
            className={`flex flex-row min-w-[900px] ${
              i % 2 === 0 ? "items-start" : "items-end"
            }`}
          >
            <div className="flex gap-6 items-start">
              <span className="font-extrabold text-lg sm:text-[40px] text-left flex items-end justify-end text-[#F9BC32]">
                {talk.serial}
              </span>
              <div className="relative">
                <img
                  className="sm:max-w-[600px] max-w-[500px] sm:h-[385px] h-[300px] rounded-xl"
                  src={talk.img}
                  alt="img"
                />
                <h1 className="font-extrabold absolute text-[70px] text-[#E6E0D2] top-[40%] -right-[200px] leading-[70px] tracking-[-3.5px]">
                  {talk.about}
                </h1>
              </div>
              <p className="text-lg font-normal tracking-widest ml-8">
                {talk.date}
              </p>
            </div>
          </div>
        ))}
      </Wrapper>
      <VerticleEl className="sm:-right-[0px] -right-4 !text-[#F9BC32] z-10">
        READ MORE
      </VerticleEl>
    </div>
  );
};

export default Talks;
