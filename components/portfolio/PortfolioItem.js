"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import CursorView from "./CursorView";

const PortfolioItem = ({ port, colDynamic, firstGrid }) => {
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

  const classNames = !firstGrid
    ? `${
        colDynamic === 2 ? "sm:first:col-span-2 sm:mb-0 mb-10" : "col-span-3"
      } flex flex-col gap-4 group relative hover:no-underline no-underline`
    : "flex flex-col gap-4 group relative hover:no-underline no-underline";

  return (
    <Link
      href={`/case/${port.casestudy.id}`}
      key={port.id}
      className={classNames}
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

export default PortfolioItem;
