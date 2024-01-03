"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Loading = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStep((prevStep) => prevStep + 1);
      window.scrollTo(0, 0);
    }, 200);
    if (step === 0) {
      // Disable scrolling when case 0 is active
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }
    return () => clearTimeout(timeout);
  }, []);

  const handleButtonClick = () => {
    if (step !== 0) {
      // Disable scrolling when case 0 is active
      document.body.style.overflow = "visible";
    }
    setStep((prevStep) => prevStep + 1);
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <Image
              src="/assets/intro/loading.jpg"
              alt="Loading"
              layout="responsive"
              width={100}
              height={100}
              className="sm:min-h-screen min-h-[300px]"
            />
            <div className="w-[412px] h-[127px] text-center flex items-center justify-center flex-col absolute -mt-10">
              <h1 className="sm:text-3xl text-xl font-medium">STU.PID</h1>
              <p className="uppercase text-light-50 font-extralight sm:text-xl text-base mt-1">
                Adjective
              </p>
              <p className="text-light-50 font-extralight sm:text-lg text-sm sm:mt-8 mt-4">
                - having or showing a great lack of intelligence <br />
                or common sense.
              </p>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <Image
              src="/assets/intro/loading-g.gif"
              alt="Loading"
              layout="responsive"
              width={100}
              height={100}
              className="sm:min-h-screen min-h-[300px]"
            />
            <div className="w-[412px] h-[127px] text-center flex items-center justify-center flex-col absolute">
              <h1 className="sm:text-3xl text-xl font-medium">STU.PID</h1>
              <p className="uppercase text-light-50 font-extralight sm:text-xl text-base mt-1">
                Adjective
              </p>
              <p className="text-light-50 font-extralight sm:text-lg text-sm sm:mt-8 mt-4">
                - having or showing a great lack of intelligence <br />
                or common sense.
              </p>
              <button
                onClick={handleButtonClick}
                className="flex items-center justify-center px-[27px] py-[10px] sm:mt-24 mt-4 border border-[#E6E0D2] hover:bg-yellow-550 hover:bg-opacity-20 w-fit bg-[#231F20] rounded-[30px]"
              >
                <img src="/assets/intro/arrow.png" alt="arrow" />
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <video
              src="/assets/intro/intro-v.mp4"
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
            ></video>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center relative z-10 sm:min-h-screen sm:pb-[40px] pb-[70px]">
      {renderContent()}
    </div>
  );
};

export default Loading;
