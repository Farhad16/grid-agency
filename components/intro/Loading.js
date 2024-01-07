"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

import CursorView from "./CursorView";

const Loading = ({ step, handleButtonClick }) => {
  const [play, setPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition1, setCursorPosition1] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);

  const handlePlay = () => {
    const video = videoRef.current;

    if (video) {
      if (play) {
        video.pause();
      } else {
        video.play();
      }

      setPlay(!play);
    }
  };

  const handleCursorEnter = () => {
    setIsHovered(true);
  };

  const handleCursorMove = (e) => {
    setCursorPosition1({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleStep2 = () => {
    handleButtonClick();
    handlePlay();
  };

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
                className="z-[100] flex items-center justify-center px-[27px] py-[10px] border border-[#E6E0D2] hover:bg-yellow-550 hover:bg-opacity-20 w-fit bg-[#231F20] rounded-[30px]"
              >
                <img src="/assets/intro/arrow.png" alt="arrow" />
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="min-h-screen w-full" onClick={handleStep2}>
            <video
              src="/assets/intro/intro-v.mp4"
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              style={{ cursor: isHovered ? "none" : "auto" }}
              onMouseMove={handleCursorMove}
              onMouseEnter={handleCursorEnter}
              className="w-full h-full cover"
            ></video>

            <CursorView
              cursorPosition={cursorPosition1}
              handlePlay={handlePlay}
              play={play}
              step={step}
            />
          </div>
        );

      case 3:
        return (
          <div className="min-h-screen w-full" onClick={handlePlay}>
            <video
              ref={videoRef}
              src="/assets/intro/intro-video.mp4"
              width="100%"
              height="100%"
              autoPlay={play}
              loop
              muted
              onMouseMove={handleMouseMove}
              style={{ cursor: isHovered ? "none" : "auto" }}
              className="xl:block hidden w-full h-full cover"
            ></video>
            <CursorView
              cursorPosition={cursorPosition}
              handlePlay={handlePlay}
              play={play}
              step={step}
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
