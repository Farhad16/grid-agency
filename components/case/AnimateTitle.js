"use client";
import React from "react";
import Wrapper from "../shared/Wrapper";
import { motion } from "framer-motion";

const AnimateTitle = () => {
  return (
    <Wrapper className="w-full">
      <motion.div
        className="flex flex-row justify-between mb-6 w-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
      >
        <p className="text-light-50 md:text-[60px] lg:text-[80px] text-4xl font-bold">
          Super Bowl Special
        </p>
        <p className="text-yellow-550 tracking-[3.75px] flex items-end font-bold">
          OSMOW'S
        </p>
      </motion.div>
    </Wrapper>
  );
};

export default AnimateTitle;
