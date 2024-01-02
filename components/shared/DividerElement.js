import { Divider } from "@mui/material";
import React from "react";

const DividerElement = ({ tag, children }) => {
  return (
    <>
      <p className="text-2xl sm:text-3xl text-yellow-550">{tag}</p>
      <div className="grid sm:grid-cols-4 grid-col-1 gap-6">
        <Divider className="w-[2px] h-16 bg-[#E6E0D2] col-span-1 ml-2" />
        <div className="text-base sm:text-[26px] text-light-50 sm:col-span-3 col-span-1 text-light-50 leading-[30px]">
          {children}
        </div>
      </div>
    </>
  );
};

export default DividerElement;
