import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div className={`flex sm:px-[100px] px-8 relative ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
