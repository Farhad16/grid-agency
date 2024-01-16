"use client";
import { useEffect, useRef, useState } from "react";

const MobileLoading = ({ step, setStep, handleButtonClick }) => {
  const [play, setPlay] = useState(true);
  const mobileVideoRef = useRef();
  const videoSectionRef = useRef();

  const handlePlay = () => {
    const video = mobileVideoRef.current;
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
    const video = mobileVideoRef.current;

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
  }, [setStep, setPlay, mobileVideoRef.current]);

  const handleStep2 = () => {
    handleButtonClick();
    handlePlay();
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
            <img
              src="/assets/intro/video.gif"
              width="100%"
              height="100%"
              className="min-h-screen"
              style={{ cursor: "none !important" }}
            />
          </div>
        );

      case 2:
        return (
          <div className="min-h-screen w-full" onClick={handlePlay}>
            <video
              ref={mobileVideoRef}
              src="/assets/intro/mobile-v.mp4"
              width="100%"
              height="100%"
              style={{
                cursor: "none !important",
              }}
              autoPlay={play}
              loop={false}
              onClick={handlePlay}
              className="w-full h-full cover"
            ></video>
          </div>
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
