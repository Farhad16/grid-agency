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
      className={`overflow-hidden absolute w-[110px] h-[110px] md:w-[180px] md:h-[180px] lg:w-[230px] lg:h-[230px] rounded-full border border-[#E6E0D2] text-light-50 flex items-center justify-center text-center z-5 bg-[#0A0808] transition duration-300 ease hover:text-yellow-500 hover:border-yellow-550 md:text-[20px] text-sm font-extralight sm:p-2 p-1 lg:leading-[30px] ${className}`}
      style={{
        transform: isClicked ? "scale(1.4)" : "scale(1)",
        border: isClicked && "1px solid #E6E0D2",
      }}
      onClick={handleOpen}
      onMouseLeave={handleClose}
    >
      {isClicked ? (
        <span className="md:!text-[15px] !leading-[20px] !text-light-50">
          {text2}
        </span>
      ) : (
        text1
      )}
    </div>
  );
};

export default Circle;
