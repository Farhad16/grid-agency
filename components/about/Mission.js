import Image from "next/image";
import React from "react";
import DividerElement from "../shared/DividerElement";

const Mission = () => {
  return (
    <>
      <div className="sm:mt-[150px] mt-24 flex sm:flex-row items-center sm:gap-8">
        <div>
          <img
            layout="responsive"
            alt="man"
            src="/assets/about/man.gif"
            objectFit="cover md:w-[738px] w-[228px] "
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
