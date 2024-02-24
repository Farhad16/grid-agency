"use client";
import { useEffect, useRef, useState } from "react";

const Loading = ({ step, setStep, handleButtonClick }) => {
  const [play, setPlay] = useState(true);
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
      }
    };

    const intervalId = setInterval(checkVideoEnd, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [setStep, setPlay, videoRef.current]);

  const handleStep2 = () => {
    handleButtonClick();
    handlePlay();
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div
            ref={videoSectionRef}
            className="h-fit w-full video-zoom-in"
            onClick={handleStep2}
          >
            <video
              src="/assets/intro/intro-v.mp4"
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              className="w-full h-full cover cursor-[url(/assets/intro/play.svg),_pointer]"
            ></video>
          </div>
        );

      case 2:
        return (
          <div className="h-fit w-full" onClick={handlePlay}>
            <video
              ref={videoRef}
              src="/assets/intro/intro-video.mp4"
              width="100%"
              height="100%"
              loop={false}
              autoPlay={play}
              onClick={handlePlay}
              className={`"w-full h-full object-cover" ${
                !play
                  ? "cursor-[url(/assets/intro/play.svg),_pointer]"
                  : "cursor-[url(/assets/intro/pause.svg),_pointer]"
              }`}
            ></video>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="sm:!flex !hidden flex-col items-center justify-center relative h-fit"
      style={{ cursor: "none" }}
    >
      {renderContent()}
    </div>
  );
};

export default Loading;
