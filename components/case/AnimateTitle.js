"use client";
import React from "react";
import Wrapper from "../shared/Wrapper";
import { motion } from "framer-motion";

const AnimateTitle = ({ title }) => {
  return (
    <Wrapper className="w-full">
      <motion.div
        className="flex flex-row justify-between mb-6 w-full items-end"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
      >
        <p className="text-light-50 md:text-[60px] lg:text-[80px] text-[40px] font-extrabold sm:leading-[70px] leading-[50px]">
          {title}
        </p>
        <p className="text-yellow-550 tracking-[3.75px] flex items-end font-extrabold">
          OSMOW'S
        </p>
      </motion.div>
    </Wrapper>
  );
};

export default AnimateTitle;
