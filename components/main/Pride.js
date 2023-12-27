import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const Pride = () => {
  return (
    <Wrapper className="flex flex-col w-full sm:mt-[200px] overflow-hidden">
      <p className="text-yellow-550 text-xl font-bold mt-20">JAGERMEISTER</p>
      <p className="text-light-50 text-[50px] md:text-[90px] font-bold sm:tracking-[-4.5px]">
        PrideMeister
      </p>
      <div className="w-full">
        <Image
          src="/assets/main_page/pride.gif"
          alt="dish"
          layout="responsive"
          width={100}
          height={100}
          className="rounded-xl"
        />
      </div>
      <div className="sm:mt-[150px] mt-16 flex items-center justify-center flex-col sm:gap-8 gap-4 py-4 min-h-[200px]">
        <p className="text-light-50 md:text-[70px] lg:text-[100px] text-4xl">
          <span className="font-bold">Stupid</span> enough?
        </p>
        <p className="bg-yellow-550 rotate-[2deg] inline-block text-xl sm:text-[29px] text-[#231F20] px-4 sm:py-2">
          Boy, we got more
        </p>
      </div>
    </Wrapper>
  );
};

export default Pride;
