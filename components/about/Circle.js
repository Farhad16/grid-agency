"use client";
import React, { useState } from "react";

const Circle = ({ className, data }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { text1, text2 } = data;

  const handleOpen = () => {
    setIsClicked(true);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  return (
    <div
      className={`${
        isClicked
          ? "transform scale-[1.8] md:scale-[1.7] lg:scale-[1.4]"
          : "transform scale-1 md:scale-1 lg:scale-1"
      } leading-normal font-extralight lg:text-[25px] md:text-base text-[8px] w-[91px] h-[91px] md:w-[180px] md:h-[180px] lg:w-[230px] lg:h-[230px] overflow-hidden absolute rounded-full border border-[#E6E0D2] text-light-50 flex items-center justify-center text-center z-5 bg-[#0A0808] transition-all duration-300 ease hover:text-yellow-500 hover:border-yellow-550 ${className}`}
      onMouseOver={handleOpen}
      onMouseLeave={handleClose}
    >
      <span
        className={`
          ${
            isClicked
              ? "md:text-[14px] lg:text-[18px] text-[6px] lg:leading-[18px] md:leading-[16px]"
              : "scale-1"
          }
        `}
      >
        {isClicked ? text2 : text1}
      </span>
    </div>
  );
};

export default Circle;
