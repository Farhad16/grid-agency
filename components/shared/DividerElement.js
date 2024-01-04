import { Divider } from "@mui/material";
import React from "react";

const DividerElement = ({ tag, children }) => {
  return (
    <>
      <p className="text-[10px] sm:text-[30px] text-yellow-550 leading-[89.473%] sm:tracking-[7.5px] tracking-[2.324px] font-extrabold">
        {tag}
      </p>
      <div className="flex flex-row sm:gap-12 gap-10  w-full">
        <Divider className="sm:w-[2px] w-[1px] sm:h-16 h-10 bg-[#E6E0D2] col-span-1 ml-2 mt-2" />
        <div className="text-[15px] sm:text-[34px] text-light-50 col-span-3 text-light-50 sm:leading-normal font-normal">
          {children}
        </div>
      </div>
    </>
  );
};

export default DividerElement;
