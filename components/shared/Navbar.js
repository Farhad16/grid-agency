import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";

const Navbar = () => {
  return (
    <Wrapper className="flex items-center justify-between bg-black py-[28px] nav-boxShadow sticky w-full">
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
      />
    </Wrapper>
  );
};

export default Navbar;
