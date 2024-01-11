import React from "react";
import Circle from "./Circle";

const Mesh = () => {
  return (
    <div className="relative flex items-center justify-center w-full pb-[80px] pt-16 mt-10 sm:px-[100px] px-8">
      <img
        src="/assets/about/aline.png"
        alt="aline"
        className="sm:w-[800px] sm:h-[700px] md:h-[913px] xl:w-[1000px] w-[275px] h-[282px] 2xl:w-[1300px]"
      />
      <div className="flex flex-col absolute top-[10%] left-[10%] md:left-[30%] lg:left-[40%] ">
        <p className="text-yellow-550 font-extrabold text-base sm:text-xl lg:text-[26px] sm:tracking-[5.4px] tracking-[2.4px]">
          OUR PROCESS
        </p>
      </div>
      <Circle
        className="xl:top-0 xl:right-[17%] lg:right-[8%] lg:-top-[7%] md:right-[15%] md:top-[5%] top-8 right-14"
        data={{
          text1: <span>Curiosity</span>,
          text2: (
            <span>
              It’s about asking <br /> the right questions <br /> and being open{" "}
              <br /> to where they <br /> lead us.
            </span>
          ),
        }}
      />
      <Circle
        className="xl:left-[48%] xl:top-[35%] md:left-[48%] left-[42%]"
        data={{
          text1: (
            <span>
              Exploration <br />&<br /> Brainstorming
            </span>
          ),
          text2: (
            <span>
              We dig into
              <br /> what really matters <br /> to your audience. <br /> No
              guesswork, <br /> just understanding.
            </span>
          ),
        }}
      />
      <Circle
        className="2xl:top-[20%] xl:left-[10%] xl:top-[28%] lg:left-[0%] lg:top-[20%] md:left-[8%] md:top-[30%] left-5 top-[24%]"
        data={{
          text1: (
            <span>
              Concept
              <br /> Development
            </span>
          ),
          text2: (
            <span>
              Our team develops <br /> ideas, while considering <br /> diverse
              perspectives,
              <br /> to increase <br /> brand affinity.
            </span>
          ),
        }}
      />
      <Circle
        className="xl:bottom-[4%] xl:left-[32%] lg:left-[33%] lg:bottom-[4%] md:left-[30%] md:bottom-[6%] left-[30%] bottom-16"
        data={{
          text1: (
            <span>
              Digital <br />
              Consideration
            </span>
          ),
          text2: (
            <span>
              We navigate digital <br /> trends with a <br />
              practical approach , <br />
              finding where you
              <br /> best fit.
            </span>
          ),
        }}
      />

      <Circle
        className="xl:right-[10%] lg:bottom-[25%] md:right-[8%] md:bottom-[30%] right-[5%] bottom-[30%]"
        data={{
          text1: (
            <span>
              Make
              <br />
              Stupid
              <br />
              Happen
            </span>
          ),
          text2: (
            <span>
              We bring ideas to <br />
              life, straightforward <br />
              and impactful.
            </span>
          ),
        }}
      />
    </div>
  );
};

export default Mesh;
