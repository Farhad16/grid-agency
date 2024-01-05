import Image from "next/image";
import React from "react";
import DividerElement from "../shared/DividerElement";

const Mission = () => {
  return (
    <>
      <div className="sm:mt-[100px] mt-12 flex sm:flex-row items-center gap-8">
        <div className="md:w-[738px] w-[228px]">
          <img
            layout="responsive"
            alt="man"
            src="/assets/about/man.gif"
            objectFit="cover w-full h-full"
          />
        </div>
        <div className="flex flex-col pr-8">
          <DividerElement tag="MISSION">
            To empower businesses to{" "}
            <span className="text-yellow-550 font-extrabold">
              embrace bold and unconventional ideas.
            </span>
          </DividerElement>
        </div>
      </div>
    </>
  );
};

export default Mission;
