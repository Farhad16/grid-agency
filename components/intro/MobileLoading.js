"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const MobileLoading = ({ step }) => {
  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="relative w-full">
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
