"use client";
import React, { useEffect, useRef, useState } from "react";
import CursorView from "./CursorView";

const Loading = ({ step, setStep, handleButtonClick }) => {
  const [play, setPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 300, y: 300 });
  const [cursorPosition1, setCursorPosition1] = useState({ x: 300, y: 300 });
  const videoRef = useRef();
  const videoSectionRef = useRef();

  const handlePlay = () => {
    const video = videoRef.current;
    if (video && video.readyState >= 2) {
      if (play) {
        video.pause();
      } else {
        video.play();
      }

      setPlay(!play);
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    const checkVideoEnd = () => {
      if (video && video.currentTime === video.duration) {
        setStep(1);
        setPlay(false);
      }
    };

    const intervalId = setInterval(checkVideoEnd, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [setStep, setPlay, videoRef.current]);

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

  const handleScroll = () => {
    const section = videoSectionRef.current;
    if (section) {
      const rect = section.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInViewport) {
        handleCursorEnter();
      } else {
        handleMouseLeave();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              onMouseMove={handleCursorMove}
              onMouseEnter={handleCursorEnter}
              style={{ cursor: "none !important" }}
              className="w-full h-full cover"
            ></video>

            <CursorView
              cursorPosition={cursorPosition1}
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
              style={{
                cursor: "none !important",
              }}
              autoPlay={play}
              loop={false}
              onClick={handlePlay}
              onMouseMove={handleMouseMove}
              onMouseOver={handleCursorEnter}
              onMouseOut={handleMouseLeave}
              onMouseLeave={handleMouseLeave}
              className="w-full h-full cover"
            ></video>
            <CursorView
              cursorPosition={cursorPosition}
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
    <div
      className="sm:!flex !hidden flex-col items-center justify-center relative z-10 min-h-screen sm:pb-[40px] pb-[70px]"
      style={{ cursor: "none" }}
      onMouseLeave={handleMouseLeave}
      ref={videoSectionRef}
    >
      {renderContent()}
    </div>
  );
};

export default Loading;
