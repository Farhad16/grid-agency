"use client";
import Image from "next/image";
import React from "react";

const Loading = ({ step, handleButtonClick }) => {
  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="relative min-h-screen flex items-center justify-center w-full">
            <Image
              src="/assets/intro/loading.jpg"
              alt="in"
              layout="responsive"
              width={100}
              height={100}
              className="min-h-screen min-h-[300px] cover"
            />
            <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 transform flex flex-col items-center gap-24">
              <img
                src="/assets/intro/stupid.png"
                className="w-[412px] h-[127px]"
                alt="stupid"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="relative min-h-screen flex items-center justify-center w-full">
            <Image
              src="/assets/intro/loading-g.gif"
              alt="Loading"
              layout="responsive"
              width={100}
              height={100}
              className="min-h-screen min-h-[300px] cover"
            />
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 transform flex flex-col items-center gap-24">
              <img
                src="/assets/intro/stupid.png"
                className="w-[412px] h-[127px]"
                alt="stupid"
              />
              <button
                onClick={handleButtonClick}
                className="flex items-center justify-center px-[27px] py-[10px] border border-[#E6E0D2] hover:bg-yellow-550 hover:bg-opacity-20 w-fit bg-[#231F20] rounded-[30px]"
              >
                <img src="/assets/intro/arrow.png" alt="arrow" />
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="min-h-screen w-full">
            <video
              src="/assets/intro/intro-v.mp4"
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              className="xl:block hidden w-full h-full cover"
            ></video>

            <Image
              src="/assets/intro/video.gif"
              layout="responsive"
              width={100}
              height={100}
              className="min-h-screen xl:hidden block cover"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="sm:!flex !hidden flex-col items-center justify-center relative z-10 min-h-screen sm:pb-[40px] pb-[70px]">
      {renderContent()}
    </div>
  );
};

export default Loading;
