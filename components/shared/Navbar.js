"use client";
import Image from "next/image";
import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex flex-col">
      <Wrapper className="flex items-center justify-between bg-black py-[28px] nav-boxShadow !fixed w-full z-20">
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
          onClick={() => setOpen(!open)}
          className="cursor-pointer"
        />
      </Wrapper>
      <motion.div
        className={`flex-row min-h-screen ${open ? "flex" : "hidden"}`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 300 }}
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
          className="bg-yellow-300 w-1/2 py-100 text-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
          className="bg-black w-1/2 flex flex-col items-start justify-center pl-16 gap-4 pt-24"
        >
          <p className="text-3xl font-bold relative text-yellow-550">menu</p>
          <p className="text-light-50 md:text-[80px] lg:text-[100px] text-6xl font-bold relative">
            homepage
          </p>
          <p className="text-light-50 md:text-[80px] lg:text-[100px] text-6xl font-bold relative">
            works
          </p>
          <p className="text-light-50 md:text-[80px] lg:text-[100px] text-6xl font-bold relative">
            talks
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
