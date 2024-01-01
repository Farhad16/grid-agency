"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { topDimensions } from "@/constance/dimentions";

const ImageWithMotion = ({ isTextHovered, dimension, src, alt }) => (
  <div className="xl:min-w-[400px] lg:min-w-[340px] md:min-w-[250px] sm:h-[300px] h-[200px]">
    <motion.img
      src={src}
      alt={alt}
      className={`object-cover transition-transform duration-300 ease-in-out ${dimension.width.initial} ${dimension.height.initial}`}
      initial={{ x: dimension.xAxis.initial, y: dimension.yAxis.initial }}
      animate={{
        x: isTextHovered ? dimension.xAxis.hover : dimension.xAxis.initial,
        y: isTextHovered ? dimension.yAxis.hover : dimension.yAxis.initial,
        width: isTextHovered ? dimension.width.hover : dimension.width.initial,
        height: isTextHovered
          ? dimension.height.hover
          : dimension.height.initial,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  </div>
);

const GridHoverTop = ({ isTextHovered }) => {
  const isDesktop = useMediaQuery({ minWidth: 900, maxWidth: 1200 });
  const isTablet = useMediaQuery({ minWidth: 650, maxWidth: 899 });
  const isMobile = useMediaQuery({ minWidth: 480, maxWidth: 649 });
  const isSmallMobile = useMediaQuery({ maxWidth: 479 });

  const getDimensions = () => {
    if (isDesktop) return topDimensions.desktop;
    if (isTablet) return topDimensions.tablet;
    if (isMobile) return topDimensions.mobile;
    if (isSmallMobile) return topDimensions.smallMobile;
    return topDimensions.default;
  };

  const { dimension1, dimension2, dimension3 } = getDimensions();

  return (
    <div className="grid grid-cols-3 gap-6">
      <ImageWithMotion
        isTextHovered={isTextHovered}
        dimension={dimension1}
        src="/assets/contact/cake.png"
        alt="cake"
      />
      <ImageWithMotion
        isTextHovered={isTextHovered}
        dimension={dimension2}
        src="/assets/contact/trophy.png"
        alt="trophy"
      />
      <ImageWithMotion
        isTextHovered={isTextHovered}
        dimension={dimension3}
        src="/assets/contact/human.png"
        alt="human"
      />
    </div>
  );
};

export default GridHoverTop;
