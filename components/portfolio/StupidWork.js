import React from "react";
import Wrapper from "../shared/Wrapper";

const StupidWork = () => {
  return (
    <Wrapper className="flex flex-col px-14">
      <div className="flex gap-6 relative">
        <img
          src="/assets/main_page/stupid.png"
          alt="stupid"
          className="sm:w-[405px] sm:h-[204px] w-[200px] h-[100px]"
        />
        <img
          src="/assets/main_page/Sparkle.gif"
          alt="stupid"
          className="sm:w-[130px] sm:h-[130px] w-[70px] h-[70px]"
        />
        <p className="absolute top-[35%] text-[60px] md:text-[120px] sm:text-[150px] text-light-50 md:tracking-[10.5px] font-extrabold">
          Works
        </p>
      </div>
    </Wrapper>
  );
};

export default StupidWork;
