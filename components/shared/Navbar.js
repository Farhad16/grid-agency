"use client";
import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";
import AnimatedMenu from "./AnimatedMenu";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="relative flex flex-col">
      <Wrapper className="flex items-center justify-between bg-black py-[28px] nav-boxShadow !fixed w-full z-20 h-[15%] overflow-hidden">
        <Image
          src="/assets/main_page/grid.svg"
          alt="Grid"
          width={40}
          height={32}
        />
        <Image
          src="/assets/main_page/menu.svg"
          alt="Grid"
          width={40}
          height={32}
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </Wrapper>

      {/* Menu Content */}
      <div onMouseLeave={() => setOpen(false)}>
        <AnimatedMenu open={open} />
      </div>
    </div>
  );
};

export default Navbar;
