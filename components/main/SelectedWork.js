import React from "react";
import Wrapper from "../shared/Wrapper";
import VerticleEl from "../shared/VerticleEl";
import Link from "next/link";

const SelectedWork = () => {
  return (
    <div className="flex flex-col w-full sm:mt-[200px] py-16 overflow-hidden">
      <Wrapper className="flex flex-col relative px-16">
        <div className="flex gap-6">
          <img
            src="/assets/main_page/stupid.png"
            alt="stupid"
            className="sm:w-[325px] sm:h-[174px] w-[200px] h-[100px]"
          />
          <img
            src="/assets/main_page/Sparkle.gif"
            alt="stupid"
            className="sm:w-[130px] sm:h-[130px] w-[70px] h-[70px]"
          />
        </div>
        <p className="uppercase text-[30px] md:text-[40px] lg:text-[53px] text-light-50 md:tracking-[10.5px] tracking-[6px] absolute top-[42%] font-bold">
          SELECTED
        </p>
        <p className="uppercase text-[30px]  md:text-[40px] lg:text-[53px] text-light-50 md:tracking-[10.5px] tracking-[6px] font-bold">
          WORKS
        </p>
      </Wrapper>
      <Wrapper className="flex items-end justify-end relative px-16">
        <VerticleEl className="sm:-right-[80px] sm:top-14 sm:block hidden">
          SELECTED WORKS
        </VerticleEl>
      </Wrapper>
      <Wrapper className="px-16 flex flex-col">
        <p className="text-yellow-550 md:text-xl uppercase text-[15px] tracking-[4.5px] font-bold mt-20">
          OSMOW’S
        </p>
        <p className="text-light-50 text-[30px] md:text-[40px] lg:text-[90px] font-bold sm:tracking-[-4.5px]">
          Super Bowl Special
        </p>
      </Wrapper>

      <Wrapper className="w-full group relative md:px-16 px-0">
        <img
          src="/assets/main_page/dish.png"
          alt="dish"
          className="md:rounded-xl w-full h-full"
        />
        <img
          src="/assets/main_page/poly.png"
          alt="stupid"
          className="absolute right-20 md:right-40 sm:w-[84px] sm:h-[61px] w-[40px] h-[15px] clip-path-triangle"
        />
        <Link href="/case/1">
          <img
            src="/assets/main_page/hover.png"
            alt="hover"
            className="md:rounded-xl opacity-10 w-full h-full absolute top-0 flex items-center justify-center group-hover:h-full group-hover:opacity-90 duration-500 group-hover:visible"
          />
          <div className="absolute right-20 md:right-40 sm:w-[84px] sm:h-[61px] w-[40px] h-[15px] clip-path-triangle bg-[#282425] bg-opacity-0 group-hover:bg-opacity-90 duration-500" />
        </Link>
      </Wrapper>
      <Wrapper className="px-16">
        <p className="md:text-[15px] text-[10px] text-light-50 md:tracking-[3.75px] uppercase mt-4">
          Design / digital / experiential
        </p>
      </Wrapper>
    </div>
  );
};

export default SelectedWork;
