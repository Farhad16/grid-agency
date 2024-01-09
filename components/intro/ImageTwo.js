import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ImageTwo = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.1, 4]);
  const translate = useTransform(scrollYProgress, [0, 0.5], [-150, 0]);

  return (
    <motion.img
      src={`/assets/intro/text2.png`}
      alt="text2"
      style={{ opacity, scale, translateY: translate }}
      transition={{ duration: 0.5, easing: "easeOut" }}
      ref={targetRef}
    />
  );
};

export default ImageTwo;
