import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ImageFive = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.01, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.1, 2.5]);
  const translate = useTransform(scrollYProgress, [0, 0.5], [-150, -100]);

  return (
    <motion.img
      src={`/assets/intro/text5.png`}
      alt="text5"
      style={{
        opacity,
        scale,
        translateY: translate,
        transition: "transform .9s ease-in-out",
      }}
      ref={targetRef}
    />
  );
};

export default ImageFive;
