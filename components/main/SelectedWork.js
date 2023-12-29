import React from "react";
import Wrapper from "../shared/Wrapper";
import VerticleEl from "../shared/VerticleEl";
import Link from "next/link";

const SelectedWork = () => {
  return (
    <Wrapper className="flex flex-col w-full sm:mt-[200px] py-16 overflow-hidden">
      <div className="flex flex-col relative">
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
        <p className="text-[40px] sm:text-[53px] text-light-50 tracking-[10.5px] absolute top-[42%] font-bold">
          SELECTED
        </p>
        <p className="text-[40px] sm:text-[53px] text-light-50 tracking-[10.5px] font-bold">
          WORKS
        </p>
      </div>
      <div className="flex items-end justify-end relative">
        <VerticleEl className="sm:-right-[80px] sm:top-14 -right-4 top-8">
          SELECTED WORKS
        </VerticleEl>
      </div>
      <p className="text-yellow-550 text-xl font-bold mt-20">OSMOW’S</p>
      <p className="text-light-50 text-[50px] md:text-[90px] font-bold tracking-[-4.5px]">
        Super Bowl Special
      </p>
      <div className="w-full group relative ">
        <img
          src="/assets/main_page/dish.png"
          alt="dish"
          className="rounded-xl w-full h-full"
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
            className="rounded-xl opacity-10 w-full h-full absolute top-0 flex items-center justify-center group-hover:h-full group-hover:opacity-90 duration-500 group-hover:visible"
          />
          <div className="absolute right-20 md:right-40 sm:w-[84px] sm:h-[61px] w-[40px] h-[15px] clip-path-triangle bg-[#282425] bg-opacity-0 group-hover:bg-opacity-90 duration-500" />
        </Link>
      </div>
    </Wrapper>
  );
};

export default SelectedWork;
