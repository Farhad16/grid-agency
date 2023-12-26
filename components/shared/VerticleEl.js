import React from "react";

const VerticleEl = ({ className, children }) => {
  return (
    <p
      className={`-rotate-90 absolute font-extralight text-xs sm:text-[21px] text-light-50 ${className}`}
    >
      {children}
    </p>
  );
};

export default VerticleEl;
