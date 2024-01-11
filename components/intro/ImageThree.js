import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ImageThree = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7, 0.9], [0.1, 2, 2.5]);
  const translate = useTransform(scrollYProgress, [0, 0.5], [-150, 0]);

  return (
    <div className="min-h-screen">
      <motion.img
        src={`/assets/intro/text3.png`}
        alt="text3"
        style={{
          opacity,
          scale,
          translateY: translate,
          transition: "transform 1s ease-in-out",
        }}
        ref={targetRef}
      />
    </div>
  );
};

export default ImageThree;
