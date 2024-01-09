import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ImageOne = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.2, 3]);

  return (
    <motion.img
      ref={targetRef}
      src={`/assets/intro/text1.png`}
      alt="text1"
      style={{ opacity, scale }}
      transition={{ duration: 0.3, easing: "easeOut" }}
    />
  );
};

export default ImageOne;
