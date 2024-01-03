import { Divider } from "@mui/material";
import React from "react";

const DividerElement = ({ tag, children }) => {
  return (
    <>
      <p className="text-2xl sm:text-3xl text-yellow-550">{tag}</p>
      <div className="grid grid-cols-4 sm:gap-6 w-full">
        <Divider className="sm:w-[2px] w-[1px] sm:h-16 h-10 bg-[#E6E0D2] col-span-1 ml-2" />
        <div className="text-[15px] sm:text-[26px] text-light-50 col-span-3 text-light-50 sm:leading-[30px]">
          {children}
        </div>
      </div>
    </>
  );
};

export default DividerElement;
