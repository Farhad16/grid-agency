import React from "react";
import Wrapper from "../shared/Wrapper";
import VerticleEl from "../shared/VerticleEl";
import Link from "next/link";

const SelectedWork = () => {
  return (
    <div className="flex flex-col w-full sm:mt-[200px] pt-16">
      <div className="flex flex-col relative sm:px-[100px] px-14">
        <div className="flex gap-6">
          <img
            src="/assets/main_page/stupid.png"
            alt="stupid"
            className="md:w-[325px] md:h-[174px] w-[200px] h-[100px]"
          />
          <img
            src="/assets/main_page/Sparkle.gif"
            alt="stupid"
            className="sm:w-[130px] sm:h-[130px] w-[70px] h-[70px]"
          />
        </div>
        <p className="uppercase text-[30px] md:text-[53px] text-light-50 sm:tracking-[10.5px] tracking-[6px] absolute top-[70%] font-extrabold leading-[107.231%]">
          SELECTED <br /> WORKS
        </p>
      </div>
      <Wrapper className="flex items-end justify-end relative sm:!px-[100px] !px-14">
        <VerticleEl className="sm:right-0 sm:top-14 sm:block hidden">
          SELECTED WORKS
        </VerticleEl>
      </Wrapper>
      <Wrapper className="sm:mt-36 mt-20 flex flex-col mb-4 sm:!px-[100px] !px-14 pt-16">
        <p className="text-yellow-550 md:text-xl uppercase text-[15px] tracking-[4.5px] font-extrabold">
          OSMOW’S
        </p>
        <p className="text-light-50 text-[30px] md:text-[40px] lg:text-[90px] font-extrabold sm:tracking-[-4.5px] tracking-[-1.5px] sm:leading-[78.682px] leading-[26.227px]">
          Super Bowl Special
        </p>
      </Wrapper>

      <Wrapper className="sm:!px-[100px] !px-0">
        <div className="w-full group relative">
          <img
            src="/assets/main_page/dish.png"
            alt="dish"
            className="sm:rounded-xl w-full h-full clip-path-triangle"
          />

          <Link href="/case/1">
            <img
              src="/assets/main_page/hover.png"
              alt="hover"
              className="sm:rounded-xl clip-path-triangle opacity-10 w-full h-full absolute top-0 flex items-center justify-center group-hover:h-full group-hover:opacity-90 duration-500 group-hover:visible"
            />
          </Link>
        </div>
      </Wrapper>
      <div className="sm:px-[100px] px-14">
        <p className="md:text-[15px] text-[10px] text-light-50 md:tracking-[3.75px] uppercase">
          Design / digital / experiential
        </p>
      </div>
    </div>
  );
};

export default SelectedWork;
