import Image from "next/image";
import React from "react";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ContentHeader = () => {
  return (
    <Wrapper className="flex items-center flex-col justify-center px-14 lg:px-[100px] 2xl:px-[120px] py-[150px] sm:py-[100px] !font-manrope bg-content">
      <div className="flex flex-col sm:flex-row items-center gap-[80px]">
        <div className="flex flex-col w-full gap-4 sm:gap-2 relative h-full">
          <p className="z-10 bg-yellow-550 rotate-[2deg] w-fit inline-block text-4xl xl:text-5xl 2xl:text-7xl font-extrabold text-[#231F20] px-8 xl:px-10 2xl:px-16 pb-1 2xl:pb-2 -mb-3 font-extrabold tracking-[-0.648px] sm:tracking-[-1.5px]">
            content
          </p>
          <div className="z-10 flex gap-2 text-4xl xl:text-5xl 2xl:text-7xl font-extrabold text-light-50 font-extrabold tracking-[-0.648px] sm:tracking-[-1.5px]">
            <span>that</span>
            {/* <img
              src="/assets/main_page/text-ani.gif"
              alt="animated"
              className="w-[150px] sm:w-[250px] lg:w-[350px] lg:h-[80px]"
            /> */}
            <span>converts</span>
          </div>
          <p className="text-xl sm:text-[22px] tracking-[0px] sm:leading-normal leading-[20px] z-10">
            Transform Your Ideas into Visual Stories
          </p>

          <Link
            style={{ textDecoration: "none" }}
            href="/contact"
            className="z-10 !no-underline hover:no-underline focus:outline-none outline-none border-[3px] rounded-full border-yellow-550 w-full sm:w-[90%] py-2 flex items-center justify-center text-center  gap-6 xl:gap-8 2xl:gap-12"
          >
            <span className="uppercase !text-light-50 hover:text-light-50 font-bold text-lg sm:text-xl tracking-[2.727px]">
              SAY HELLO!
            </span>
            <ArrowForwardIcon
              className="text-light-50 hover:text-light-50"
              sx={{ fontSize: "30px", fontWeight: 100 }}
            />
          </Link>

          <img
            src="/assets/content/tiger.png"
            alt="tiger"
            className="absolute -bottom-[30%] lg:-bottom-[30%] 2xl:-bottom-[50%] left-0 sm:-left-[10%] z-0 w-[150px] sm:w-[60%]"
          />
        </div>
        <Image
          src="/assets/content/tv.png"
          alt="plan"
          width={100}
          height={100}
          layout="responsive"
          className="object-contain z-10"
        />
      </div>
    </Wrapper>
  );
};

export default ContentHeader;
