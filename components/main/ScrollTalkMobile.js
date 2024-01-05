import { talkData } from "@/constance/talks.data";
import React from "react";
import VerticleEl from "../shared/VerticleEl";
import Link from "next/link";

const ScrollTalkMobile = () => {
  return (
    <div className="pb-6 w-full relative">
      <div className="background-text-verticle"></div>
      <VerticleEl className="-left-14 top-[40%] !text-light-50 z-10 text-[#e6e0d22e] tracking-[3.96px]">
        STUPID TALKS
      </VerticleEl>
      {talkData.slice(0, 2).map((talk, i) => (
        <div className="flex flex-col pt-2 items-center justify-center gap-12">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-normal tracking-[3.171px] z-10 text-right text-[#e6e0d22e]">
              {talk.date}
            </p>
            <div className="flex flex-row items-start gap-2">
              <span className="font-extrabold text-lg text-left flex items-end justify-end text-yellow-550 z-10">
                {talk.serial}
              </span>
              <div className="relative">
                <img
                  className="w-[313.488px] h-[233.417px] rounded-xl"
                  src={talk.img}
                  alt="img"
                />
                <h1 className="font-extrabold absolute text-[32px] text-light-50 top-[30%] left-[10%] leading-[94.937%] tracking-[-1.63px] hover:bg-yellow-600 transition duration-300 ease">
                  {talk.about}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Link href="/works">
        <p className="text-center !text-yellow-550 z-10 tracking-[3.96px] pt-16">
          READ MORE
        </p>
      </Link>
    </div>
  );
};

export default ScrollTalkMobile;
