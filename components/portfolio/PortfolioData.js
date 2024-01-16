"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import NoDataFound from "../shared/NoDataFound";
import CursorView from "./CursorView";

const PortfolioItem = ({ port }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 300, y: 300 });
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const item = itemRef.current;

    const handleScroll = () => {
      const rect = item.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInViewport) {
        handleMouseEnter();
      } else {
        handleMouseLeave();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href={`/case/${port.casestudy.id}`}
      key={port.id}
      className="flex flex-col gap-4 relative hover:no-underline no-underline"
      onMouseOver={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseLeave}
      ref={itemRef}
    >
      <img
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${port.img}`}
        alt="portimg"
        className="object-cover min-h-[560px] sm:h-[560px] w-full h-full"
      />

      <div className="flex gap-4 items-center text-[15px]">
        <p className="hover:text-yellow-550 text-yellow-550 font-extrabold uppercase">
          {port.name}
        </p>
        <span className="hover:text-light-50 text-light-50 font-extrabold">
          {port.desc}
        </span>
      </div>
      <CursorView cursorPosition={cursorPosition} isHovered={isHovered} />
    </Link>
  );
};

const PortfolioData = ({ portfolioData }) => {
  const colThree = Math.floor(portfolioData.length / 3);
  const colDynamic = portfolioData.length % 3;

  return (
    <div className="flex flex-col mt-24 sm:pb-[150px] pb-24 sm:mt-[200px] overflow-hidden items-center justify-center sm:px-[100px] px-4 !cursor-default">
      {portfolioData.length < 0 ? (
        <NoDataFound data="portfolio" />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-10 lg:gap-6 w-full mb-12">
            {colThree > 0 &&
              portfolioData
                .slice(0, colThree * 3)
                .map((port) => <PortfolioItem key={port.id} port={port} />)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-6 w-full">
            {colDynamic > 0 &&
              portfolioData
                .slice(-colDynamic)
                .map((port) => <PortfolioItem key={port.id} port={port} />)}
          </div>
        </>
      )}
    </div>
  );
};

export default PortfolioData;
