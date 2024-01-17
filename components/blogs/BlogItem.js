"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import CursorView from "./CursorView";
import HTMLParser from "../shared/HTMLParser";

const BlogItem = ({ blog }) => {
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
      href={`/blogs/${blog.slug}`}
      className="flex flex-col gap-4 relative hover:no-underline no-underline"
      onMouseOver={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseLeave}
      ref={itemRef}
    >
      <img
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${blog.featured_image}`}
        alt="portimg"
        className="object-cover min-h-[560px] sm:h-[560px] w-full h-full"
      />

      <div className="flex gap-4 items-center text-[15px]">
        <p className="hover:text-yellow-550 text-yellow-550 font-extrabold uppercase">
          {blog.title}
        </p>
        <div className="hover:text-light-50 text-light-50 font-extrabold">
          <HTMLParser content={blog.description} />
        </div>
      </div>
      <CursorView cursorPosition={cursorPosition} isHovered={isHovered} />
    </Link>
  );
};

export default BlogItem;
