import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ImageTwo = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.2, 3]);
  return (
    <motion.img
      src={`/assets/intro/text2.png`}
      alt="text2"
      style={{ opacity, scale }}
      transition={{ duration: 0.3, easing: "easeOut" }}
      ref={targetRef}
    />
  );
};

export default ImageTwo;
