"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const MobileLoading = ({ step, handleButtonClick }) => {
  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <Image
              src="/assets/intro/l-mobile.png"
              alt="Loading"
              layout="responsive"
              width={100}
              height={100}
              className="min-h-screen"
            />
          </>
        );
      case 1:
        return (
          <div className="relative">
            <Image
              src="/assets/intro/intro-g.gif"
              alt="Loading"
              layout="responsive"
              width={100}
              height={100}
              className="min-h-screen"
            />
            <>
              <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 transform flex flex-col items-center">
                <img
                  src="/assets/intro/stupid.png"
                  className="w-[244px] h-[75px]"
                  alt="stupid"
                />
              </div>

              <div className="!z-10 absolute bottom-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2 transform flex flex-col items-center">
                <button
                  onClick={handleButtonClick}
                  className="flex items-center justify-center px-[27px] py-[10px]  border border-[#E6E0D2] hover:bg-yellow-550 hover:bg-opacity-20 w-fit bg-[#231F20] rounded-[30px]"
                >
                  <img src="/assets/intro/arrow.png" alt="arrow" />
                </button>
              </div>
            </>
          </div>
        );
      case 2:
        return (
          <>
            <img
              src="/assets/intro/video.gif"
              width="100%"
              height="100%"
              className="min-h-screen"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="sm:!hidden flex flex-col items-center justify-center relative z-10 min-h-screen pb-[70px]">
      {renderContent()}
    </div>
  );
};

export default MobileLoading;
