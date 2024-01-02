import React from "react";
import Circle from "./Circle";

const Mesh = () => {
  return (
    <div className="relative flex items-center justify-center w-full pb-[150px] pt-16 mt-10">
      <img
        src="/assets/about/aline.png"
        alt="aline"
        className="sm:w-[800px] sm:h-[700px] xl:w-[1000px] w-[500px] h-[450px] 2xl:w-[1300px]"
      />
      <div className="flex flex-col absolute top-[5%] sm:left-[30%] left-[20%]">
        <p className="lg:text-[54px] md:text-[40px] text-[30px] text-light-50 font-extralight tracking-[-2.7px]">
          Mesh
        </p>
        <p className="text-yellow-550 font-semibold text-base sm:text-xl lg:text-[26px] tracking-[5.4px]">
          OUR PROCESS
        </p>
      </div>
      <Circle
        className="xl:-top-[5%] xl:right-[10%] lg:right-[8%] lg:-top-[7%] top-0 md:right-[5%] right-0"
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
        className="left-[45%] xl:left-[50%] xl:top-[35%]"
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
        className="xl:left-0 xl:top-[20%] lg:-left-[3%] lg:top-[20%] -left-[8%] top-[28%]"
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
              Our teams go through a <br />
              concept development <br />
              process where we gather
              <br />
              diverse perspectives for <br />
              brainstorming, shaping <br />
              innovative concepts.
            </span>
          ),
        }}
      />
      <Circle
        className="xl:right-0 md:right-0 -right-[10%] bottom-[32%]"
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
      <Circle
        className="xl:bottom-0 bottom-20 xl:left-[30%] left-[20%]"
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
    </div>
  );
};

export default Mesh;
