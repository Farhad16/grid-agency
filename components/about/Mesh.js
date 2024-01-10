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
      <div className="flex flex-col absolute top-[5%] sm:left-[30%] left-[10%]">
        <p className="lg:text-[54px] md:text-[40px] text-[30px] text-light-50 font-extralight tracking-[-2.7px] sm:tracking-[-1px]">
          Mesh
        </p>
        <p className="text-yellow-550 font-extrabold text-base sm:text-xl lg:text-[26px] sm:tracking-[5.4px] tracking-[2.4px]">
          OUR PROCESS
        </p>
      </div>
      <Circle
        className="xl:top-0 xl:right-[17%] lg:right-[8%] lg:-top-[7%] md:right-[15%] md:top-[5%] top-8 right-14"
        data={{
          text1: (
            <span>
              Curiosity & <br />
              Exploration
            </span>
          ),
          text2: (
            <span>
              We encourage
              <br /> curiosity and
              <br /> exploration to initiate
              <br /> our process and unveil
              <br /> innovative possibilities
            </span>
          ),
        }}
      />
      <Circle
        className="xl:left-[48%] xl:top-[35%] md:left-[48%] left-[42%]"
        data={{
          text1: (
            <span>
              Driven <br />
              Creative
            </span>
          ),
          text2: (
            <span>
              We take a deep <br /> understanding of our <br />
              audience's emotions and
              <br />
              experiences and evaluate what <br />
              creative will work
              <br /> based on data and
              <br />
              insights.
            </span>
          ),
        }}
      />
      <Circle
        className="2xl:top-[20%] xl:left-[10%] xl:top-[28%] lg:left-[0%] lg:top-[20%] md:left-[8%] md:top-[30%] left-5 top-[24%]"
        data={{
          text1: (
            <span>
              Innovative
              <br /> Concept
              <br /> Development
            </span>
          ),
          text2: (
            <span>
              Our teams go through a <br /> concept development <br />
              process where we gather <br />
              diverse perspectives for <br />
              brainstorming, shaping <br /> innovative concepts.
            </span>
          ),
        }}
      />
      <Circle
        className="xl:bottom-[4%] xl:left-[32%] lg:left-[33%] lg:bottom-[4%] md:left-[30%] md:bottom-[6%] left-[30%] bottom-16"
        data={{
          text1: (
            <span>
              Technology <br />
              Consideration
            </span>
          ),
          text2: (
            <span>
              A continuous journey
              <br /> of improvement where
              <br /> we monitor results and
              <br />
              re-invent solutions to
              <br /> be better optimized.
            </span>
          ),
        }}
      />

      <Circle
        className="xl:right-[12%] md:right-[8%] md:bottom-[30%] right-[5%] bottom-[30%]"
        data={{
          text1: <span>Transformation</span>,
          text2: (
            <span>
              We explore technology <br />
              solutions and seamlessly
              <br /> integrate them across <br />
              various channels, amplifying
              <br /> the impact for our partners.
            </span>
          ),
        }}
      />
    </div>
  );
};

export default Mesh;
