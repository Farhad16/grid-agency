"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

import CursorView from "./CursorView";

const Loading = ({ step, handleButtonClick }) => {
  const [play, setPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 300, y: 300 });
  const [cursorPosition1, setCursorPosition1] = useState({ x: 300, y: 300 });
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

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="min-h-screen w-full" onClick={handleStep2}>
            <video
              src="/assets/intro/intro-v.mp4"
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              style={{ cursor: "auto" }}
              onMouseMove={handleCursorMove}
              onMouseEnter={handleCursorEnter}
              className="w-full h-full cover"
            ></video>

            <CursorView
              cursorPosition={cursorPosition1}
              handlePlay={handlePlay}
              play={play}
              step={step}
              isHovered={isHovered}
            />
          </div>
        );

      case 2:
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
              onMouseLeave={handleMouseLeave}
              style={{ cursor: isHovered ? "none" : "auto" }}
              className="xl:block hidden w-full h-full cover"
            ></video>
            <CursorView
              cursorPosition={cursorPosition}
              handlePlay={handlePlay}
              play={play}
              step={step}
              isHovered={isHovered}
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
