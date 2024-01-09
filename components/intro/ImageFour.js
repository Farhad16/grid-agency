import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ImageFour = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.01, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.1, 4]);
  const translate = useTransform(scrollYProgress, [0, 0.5], [-150, 0]);

  return (
    <motion.img
      ref={targetRef}
      src={`/assets/intro/text4.png`}
      alt="text4"
      style={{ opacity, scale, translateY: translate }}
      transition={{ duration: 0.5, easing: "easeOut" }}
    />
  );
};

export default ImageFour;
