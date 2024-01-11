import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ImageOne = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.2, 2.5]);

  return (
    <div className="min-h-screen">
      <motion.img
        ref={targetRef}
        src={`/assets/intro/text1.png`}
        alt="text1"
        style={{ opacity, scale, transition: "transform .9s ease-in-out" }}
      />
    </div>
  );
};

export default ImageOne;
