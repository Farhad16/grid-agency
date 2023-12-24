import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import VerticleEl from "../shared/VerticleEl";

const Banner = () => {
  return (
    <Wrapper className="flex items-center justify-center">
      <div className="flex flex-col">
        <p className="text-[#E6E0D2] text-4xl md:text-[40px] lg:text-[60px] font-bold">
          We make
        </p>
        <div className="text-[#E6E0D2] text-[80px] sm:text-[150px] md:text-[220px] lg:text-[280px] font-bold leading-[100px] sm:leading-[200px] tracking-wide flex relative">
          <h1>stup</h1>
          <div className="relative">
            <h1>i</h1>
            <Image
              src="/assets/main_page/Cat.gif"
              alt="cat"
              width={220}
              height={220}
              className="absolute -top-[30px] sm:-top-[150px] -left-10 sm:-left-20 sm:max-w-[220px] max-w-[100px]"
            />
          </div>
          d
          <Image
            src="/assets/main_page/line.png"
            alt="line"
            width={515}
            height={515}
            layout="responsive"
            className="absolute -bottom-[10px] sm:-bottom-[90px] left-0 sm:max-w-[515px] max-w-[150px]"
          />
        </div>

        <div className="relative sm:mt-[200px] mt-24 flex items-center">
          <VerticleEl className="sm:-left-[180px] sm:top-14 -left-12 top-8">
            OUR STUPID
          </VerticleEl>
          <p className="text-[#E6E0D2] md:text-[28px] lg:text-[34px] font-bold sm:!leading-[40px]">
            We are the catalyst for
            <br />
            turning{" "}
            <span className="text-[#F9BC32]">
              unconventional <br /> ideas into realities.
            </span>
          </p>
        </div>

        <div className="relative sm:mt-[200px] mt-24 flex items-center sm:justify-end">
          <VerticleEl className="sm:-right-[120px] sm:top-14 -right-4 top-8 rotate-[0deg]">
            <Image
              src="/assets/main_page/line-v.png"
              alt="line"
              width={100}
              height={100}
              layout="responsive"
            />
          </VerticleEl>
          <p className="text-[#E6E0D2] md:text-[28px] lg:text-[34px] font-bold sm:!leading-[40px] text-right">
            We leverage our expertise in ideation,
            <br /> content creation, video production, and
            <br /> communication solutions to consistently
            <br />
            <span className="text-[#F9BC32]">redefine what's attainable</span>
          </p>
        </div>

        <div className="sm:mt-[200px] mt-24">
          <p className="text-[#E6E0D2] md:text-[28px] lg:text-[34px] font-bold sm:!leading-[40px] text-center">
            We do this by transforming
            <br /> the seemingly ‘STUPID'
            <br />
            <span className="bg-[#F9BC32] rotate-[2deg] inline-block text-[#231F20] mt-2">
              into brilliant innovative outcomes.
            </span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
