"use client";
import React, { useRef, useEffect } from "react";
import VerticleEl from "../shared/VerticleEl";
import { talkData } from "@/constance/talks.data";

const Talks = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#241F20] sm:mt-[200px] mt-24 overflow-x-auto">
      <VerticleEl className="left-0 !text-[#E6E0D2]">STUPID TALKS</VerticleEl>
      <div
        className="min-h-[900px] overflow-x-auto text-[#161515]"
        style={{
          backgroundImage: "url('/assets/main_page/talks.png')",
          backgroundSize: "cover", // or "contain" depending on your preference
          backgroundRepeat: "no-repeat",
          backgroundPosition: "contain",
          width: "100%", // Adjust this to your desired width
        }}
      >
        <div className="flex flex-row absolute w-full h-full top-[100px] bottom-[100px]">
          {talkData.map((talk, i) => (
            <div
              className={`flex flex-row gap-6 min-w-[600px] ${
                i % 2 === 0 ? "items-start" : "items-end"
              }`}
            >
              <span className="font-extrabold text-lg sm:text-[40px] text-left flex items-end justify-end text-[#F9BC32]">
                {talk.serial}
              </span>
              <div>
                <img
                  className="relative w-[600px] rounded-xl"
                  src={talk.img}
                  alt="img"
                />
                <h1 className="absolute text-[70px] text-[#E6E0D2] top-[50%]">
                  {talk.about}
                </h1>
              </div>
              <p className="text-lg font-normal tracking-widest ml-8">
                {talk.date}
              </p>
            </div>
          ))}
        </div>
      </div>
      <VerticleEl className="sm:-right-[0px] -right-4 !text-[#F9BC32]">
        READ MORE
      </VerticleEl>
    </div>
  );
};

export default Talks;
