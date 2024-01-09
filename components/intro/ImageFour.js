import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ImageFour = () => {
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
      src={`/assets/intro/text4.png`}
      alt="text4"
      style={{ opacity, scale }}
      transition={{ duration: 0.3, easing: "easeOut" }}
    />
  );
};

export default ImageFour;
