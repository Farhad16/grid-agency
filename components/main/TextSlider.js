"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const words = ["happen", "successful", "brilliant", "happen"];

const TextSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-right h-[100px]">
      <AnimatePresence>
        <motion.div
          key={`${words[index]}-${index}`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextSlider;
