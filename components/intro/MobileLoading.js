"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const MobileLoading = ({ step }) => {
  const renderContent = () => {
    switch (step) {
      case 1:
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
