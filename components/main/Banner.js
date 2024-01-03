import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import VerticleEl from "../shared/VerticleEl";
import TextSlider from "./TextSlider";

const Banner = () => {
  return (
    <Wrapper className="flex items-center justify-center px-14">
      <div className="flex flex-col">
        <p className="text-light-50 text-4xl md:text-[40px] lg:text-[60px] font-extrabold">
          We make
        </p>
        <div className="flex flex-col">
          <div className="text-light-50 text-[100px] sm:text-[180px] md:text-[220px] lg:text-[280px] font-extrabold leading-[100px] sm:leading-[200px] tracking-wide flex relative">
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
          <div className="flex flex-row items-center justify-end sm:mt-0 -mt-6">
            <TextSlider />
          </div>
        </div>

        <div className="relative sm:mt-[200px] mt-24 flex items-center sm:!justify-start justify-center">
          <VerticleEl className="sm:-left-[180px] sm:top-14 -left-12 top-8">
            OUR STUPID
          </VerticleEl>
          <p className="sm:leading-normal leading-[34px] text-light-50 text-[24px] md:text-[28px] lg:text-[34px] font-medium sm:tracking-[-1.7px] tracking-[-1.25px] sm:!text-left text-center">
            We are the catalyst for
            <br />
            turning{" "}
            <span className="text-yellow-550 font-extrabold">
              unconventional <br /> ideas into realities.
            </span>
          </p>
        </div>

        <div className="relative sm:mt-[200px] mt-24 flex items-center sm:!justify-end justify-center">
          <VerticleEl className="sm:-right-[120px] sm:top-14 -right-4 top-8 rotate-[0deg]">
            <Image
              src="/assets/main_page/line-v.png"
              alt="line"
              width={100}
              height={100}
              layout="responsive"
            />
          </VerticleEl>
          <p className="sm:leading-normal leading-[34px] text-light-50 text-[24px] md:text-[28px] lg:text-[34px] font-medium text-right sm:tracking-[-1.7px] tracking-[-1.25px] sm:!text-right text-center">
            We leverage our expertise in ideation,
            <br className="md:block hidden" />
            content creation, video production, and
            <br className="md:block hidden" /> communication solutions to
            consistently
            <br />
            <span className="text-yellow-550 font-extrabold">
              redefine what's attainable
            </span>
          </p>
        </div>

        <div className="sm:mt-[200px] mt-24">
          <p className="text-light-50 text-[28px] md:text-[40px] lg:text-[54px] font-medium text-center sm:tracking-[-2.7px] tracking-[-1.05px] sm:leading-normal leading-[34px]">
            We do this by transforming
            <br /> the seemingly ‘STUPID'
            <br />
            <span className="bg-yellow-550 rotate-[2deg] inline-block text-[#231F20] mt-2 font-extrabold py-3 sm:px-4 sm:leading-[40px] leading-[19px]">
              into brilliant innovative outcomes.
            </span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
