import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ImageThree = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.2, 3]);
  return (
    <motion.img
      src={`/assets/intro/text3.png`}
      alt="text3"
      style={{ opacity, scale }}
      ref={targetRef}
      transition={{ duration: 0.1, easing: "easeOut" }}
    />
  );
};

export default ImageThree;
