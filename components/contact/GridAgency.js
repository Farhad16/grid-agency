"use client";
import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const GridAgency = () => {
  const [isTextHovered, setIsTextHovered] = useState(false);

  return (
    <div
      className="border-top sm:pt-24 pt-24 group flex flex-col items-center"
      onMouseEnter={() => setIsTextHovered(true)}
      onMouseLeave={() => setIsTextHovered(false)}
    >
      <Wrapper className="flex flex-col items-center sm:min-h-[800px]">
        <div className="sm:grid grid-cols-3 gap-6 hidden">
          <div className="h-[400px] w-full cols-span-1">
            <motion.img
              src="/assets/contact/cake.png"
              alt="cake"
              className="object-cover w-[318px] h-[169px] transition-transform duration-300 ease-in-out"
              initial={{ x: 0, y: 50 }}
              animate={{
                y: isTextHovered ? 200 : 50,
                x: isTextHovered ? 100 : 0,
                scale: isTextHovered ? 0.6 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className=" h-[300px]">
            <motion.img
              src="/assets/contact/trophy.png"
              alt="trophy"
              className="object-cover w-[157px] h-[168px] transition-transform duration-300 ease-in-out"
              initial={{ x: "60%", y: 0 }}
              animate={{
                y: isTextHovered ? 100 : 0,
                scale: isTextHovered ? 0.8 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className=" h-[300px]">
            <motion.img
              src="/assets/contact/human.png"
              alt="trophy"
              className="object-cover mt-[50px] w-[134px] h-[168px] transition-transform duration-300 ease-in-out"
              initial={{ x: 100, y: 0 }}
              animate={{
                x: isTextHovered ? -60 : 100,
                y: isTextHovered ? 130 : 0,
                scale: isTextHovered ? 0.9 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* small device */}
        <div className="grid grid-cols-3 gap-6 sm:hidden">
          <div className="w-full ">
            <motion.img
              src="/assets/contact/cake.png"
              alt="cake"
              className="object-cover w-[318px] h-[169px] transition-transform duration-300 ease-in-out"
              initial={{ x: 0, y: 40 }}
              animate={{
                y: isTextHovered ? 200 : 40,
                x: isTextHovered ? 50 : 0,
                scale: isTextHovered ? 0.8 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="">
            <motion.img
              src="/assets/contact/trophy.png"
              alt="trophy"
              className="object-cover w-[157px] h-[168px] transition-transform duration-300 ease-in-out"
              initial={{ x: 0, y: 0 }}
              animate={{
                x: isTextHovered ? 20 : 0,
                y: isTextHovered ? 150 : 0,
                scale: isTextHovered ? 0.5 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="">
            <motion.img
              src="/assets/contact/human.png"
              alt="trophy"
              className="object-cover mt-[50px] w-[134px] h-[168px] transition-transform duration-300 ease-in-out"
              initial={{ x: 10, y: 0 }}
              animate={{
                x: isTextHovered ? 0 : 10,
                y: isTextHovered ? 120 : 0,
                scale: isTextHovered ? 0.6 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-light-50 mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="md:text-[26px] lg:text-[30px] font-medium sm:!leading-[40px] uppercase tracking-[4.5px] flex items-center sm:ml-16 ml-10">
            Follow Us
            <img
              src="/assets/contact/Sparkle.gif"
              alt="stupid"
              className="sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]"
            />
          </div>
          <h1 className="lg:text-[110px] text-[40px] md:text-[90px] font-bold relative sm:-mt-10 -mt-5">
            @gridagencyinc
            <img
              src="/assets/contact/lines.png"
              alt="lines"
              className="absolute w-[60%] sm:-bottom-10 -bottom-4 left-[-4]"
            />
          </h1>
        </div>

        <div className="sm:flex w-full justify-between gap-12 hidden">
          <div className="h-[380px]">
            <motion.img
              src="/assets/contact/shoes.png"
              alt="shoes"
              className="object-cover w-[318px] h-[169px] mt-4"
              initial={{ x: 0, y: 200 }}
              animate={{
                x: isTextHovered ? 200 : 0,
                y: isTextHovered ? 50 : 200,
                scale: isTextHovered ? 0.5 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="h-[380px]">
            <motion.img
              src="/assets/contact/ice.png"
              alt="ice"
              className="object-cover w-[157px] h-[168px] mt-4"
              initial={{ x: 0, y: 150 }}
              animate={{
                x: isTextHovered ? -200 : 0,
                y: isTextHovered ? 20 : 150,
                scale: isTextHovered ? 0.8 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* <div className="flex w-full justify-between gap-12 sm:hidden">
          <div className="h-[380px]">
            <motion.img
              src="/assets/contact/shoes.png"
              alt="shoes"
              className="object-cover w-[318px] h-[169px] mt-4"
              initial={{ x: 0, y: 200, scale: 0.8 }}
              animate={{
                x: isTextHovered ? -20 : 0,
                y: isTextHovered ? 100 : 200,
                scale: isTextHovered ? 0.5 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="h-[380px]">
            <motion.img
              src="/assets/contact/ice.png"
              alt="ice"
              className="object-cover w-[157px] h-[168px] mt-4"
              initial={{ x: 0, y: 150 }}
              animate={{
                x: isTextHovered ? -10 : 0,
                y: isTextHovered ? 100 : 150,
                scale: isTextHovered ? 0.6 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div> */}

        <div className="flex items-center justify-end sm:mt-0 mt-10 text-light-50">
          <InstagramIcon sx={{ fontSize: "50px" }} />
          <LinkedInIcon sx={{ fontSize: "50px" }} />
        </div>
      </Wrapper>
    </div>
  );
};

export default GridAgency;
