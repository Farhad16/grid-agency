"use client";
import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";
import AnimatedMenu from "./AnimatedMenu";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="relative flex flex-col">
      <Wrapper className="flex items-center justify-between bg-black py-[28px] nav-boxShadow !fixed w-full z-20 h-[15%] overflow-hidden">
        <Link href="/">
          <Image
            src="/assets/main_page/grid.svg"
            alt="Grid"
            width={40}
            height={32}
          />
        </Link>

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
      <div className={`${open ? "block" : "hidden"}`}>
        <AnimatedMenu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;
