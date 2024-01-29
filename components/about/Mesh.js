import React from "react";
import Circle from "./Circle";

const Mesh = () => {
  return (
    <div className="relative flex items-center justify-center w-full pb-[80px] pt-16 mt-10 sm:px-[100px] px-8">
      <img
        src="/assets/about/aline.png"
        alt="aline"
        className="sm:w-[800px] sm:h-[700px] md:h-[913px] xl:w-[1000px] w-[275px] h-[282px] 2xl:w-[1100px] 4xl:w-[1200px] 5xl:w-[1250px] 6xl:w-[1400px]"
      />
      <div className="flex flex-col absolute top-[10%] left-[10%] md:left-[30%] lg:left-[40%] ">
        <p className="text-yellow-550 font-extrabold text-base sm:text-xl lg:text-[26px] sm:tracking-[5.4px] tracking-[2.4px]">
          OUR PROCESS
        </p>
      </div>
      <Circle
        className="right-14 md:right-[15%] lg:right-[8%] xl:right-[17%] 3xl:right-[22%] 5xl:right-[24%] 6xl:right-[26%] top-8 md:top-[5%] lg:-top-[7%] xl:top-0"
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
        className="left-[42%] md:left-[48%] xl:left-[48%] xl:top-[35%]"
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
        className="left-5 md:left-[8%] top-[25%] md:top-[30%] lg:left-[2%] xl:left-[10%] 3xl:left-[18%] 5xl:left-[15%] 6xl:left-[20%] lg:top-[20%] xl:top-[28%] 4xl:top-[24%]"
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
        className="left-[30%] md:left-[30%] lg:left-[33%] xl:left-[32%] 4xl:left-[38%] bottom-16 md:bottom-[6%] lg:bottom-[4%] xl:bottom-[4%] 4xl:bottom-[3%]"
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
        className="right-[5%] md:right-[8%] xl:right-[10%] 5xl:right-[18%] 6xl:right-[20%] bottom-[30%] md:bottom-[30%] lg:bottom-[25%]"
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
