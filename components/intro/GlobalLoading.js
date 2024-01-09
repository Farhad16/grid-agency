/** @jsxImportSource @emotion/react */
import Image from "next/image";
import React, { useEffect } from "react";

const GlobalLoading = ({ setStep }) => {
  useEffect(() => {
    const delay = 2000;

    const timeoutId = setTimeout(() => {
      setStep(1);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center w-full">
      <Image
        src="/assets/intro/loading-g.gif"
        alt="in"
        layout="responsive"
        width={100}
        height={100}
        className="min-h-screen cover"
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
};

export default GlobalLoading;
