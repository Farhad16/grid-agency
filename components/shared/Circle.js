"use client";
import React, { useState } from "react";

const Circle = ({ className, children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOpen = () => {
    setIsClicked(true);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  return (
    <div
      className={`absolute w-[110px] h-[110px] md:w-[180px] md:h-[180px] lg:w-[230px] lg:h-[230px] rounded-full border border-[#E6E0D2] text-light-50 flex items-center justify-center text-center z-5 bg-[#0A0808] transition duration-300 ease hover:text-yellow-500 hover:border-yellow-550 md:text-[25px] text-sm font-extralight sm:p-2 p-1 lg:leading-[30px] ${className}`}
      style={{
        transform: isClicked ? "scale(1.3)" : "scale(1)",
      }}
      onClick={handleOpen}
      onMouseLeave={handleClose}
    >
      {children}
    </div>
  );
};

export default Circle;
