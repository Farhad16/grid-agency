"use client";
import React from "react";
import { motion } from "framer-motion";
import { bottomDimensions } from "@/constance/dimentions";
import { useMediaQuery } from "react-responsive";

const ImageWithMotion = ({ isTextHovered, dimension, src, alt }) => (
  <div className="xl:min-w-[400px] lg:min-w-[340px] md:min-w-[250px] h-[380px]">
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

const GridHoverBottom = ({ isTextHovered }) => {
  const isDesktop = useMediaQuery({ minWidth: 900, maxWidth: 1200 });
  const isTablet = useMediaQuery({ minWidth: 621, maxWidth: 899 });
  const isMobile = useMediaQuery({ minWidth: 480, maxWidth: 620 });
  const isSmallMobile = useMediaQuery({ maxWidth: 479 });

  const getDimensions = () => {
    if (isDesktop) return bottomDimensions.desktop;
    if (isTablet) return bottomDimensions.tablet;
    if (isMobile) return bottomDimensions.mobile;
    if (isSmallMobile) return bottomDimensions.smallMobile;
    return bottomDimensions.default;
  };

  const { dimension1, dimension2 } = getDimensions();

  return (
    <>
      <div className="grid grid-cols-2 w-full gap-6 sm:mt-24">
        <ImageWithMotion
          isTextHovered={isTextHovered}
          dimension={dimension1}
          src="/assets/contact/shoes.png"
          alt="shoes"
        />
        <ImageWithMotion
          isTextHovered={isTextHovered}
          dimension={dimension2}
          src="/assets/contact/ice.png"
          alt="ice"
        />
      </div>
    </>
  );
};

export default GridHoverBottom;
