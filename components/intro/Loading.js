"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Loading = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStep((prevStep) => prevStep + 1);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  const handleButtonClick = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col items-center justify-center relative overflow-hidden z-10">
            <Image
              src="/assets/intro/loading.jpg"
              alt="Loading"
              layout="responsive"
              width={100}
              height={100}
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
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col items-center justify-center relative overflow-hidden z-10">
            <Image
              src="/assets/intro/loading-g.gif"
              alt="Loading"
              layout="responsive"
              width={100}
              height={100}
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
                className="flex items-center justify-center px-[27px] py-[10px] sm:mt-24 mt-10 border border-[#E6E0D2] hover:bg-yellow-550 hover:bg-opacity-20 w-fit bg-[#231F20] rounded-[30px]"
              >
                <img src="/assets/intro/arrow.png" alt="arrow" />
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full h-full overflow-hidden z-10">
            <video
              src="/assets/intro/intro-v.mp4"
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
            ></video>
          </div>
        );
      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
};

export default Loading;
