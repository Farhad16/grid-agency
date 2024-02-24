"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimatedMenu from "./AnimatedMenu";
import Wrapper from "./Wrapper";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="relative flex flex-col !font-manrope h-[10%] xl:h-[12%]">
      <Wrapper
        className="flex items-center justify-between bg-black nav-boxShadow !fixed w-full z-20 h-[10%] xl:h-[12%] !overflow-hidden !pointer-events-auto"
        style={{ zIndex: 999999 }}
      >
        <Link href="/" className="no-underline hover:no-underline">
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

      <AnimatedMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
