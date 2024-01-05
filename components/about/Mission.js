import Image from "next/image";
import React from "react";
import DividerElement from "../shared/DividerElement";

const Mission = () => {
  return (
    <>
      <div className="sm:mt-0 mt-12 flex flex-row items-center w-full">
        <div className="md:w-[738px] w-[200px] h-fit sm:h-[795px] h-[220px] sm:ml-0 -ml-6 flex items-center justify-center">
          <Image
            src="/assets/about/man.gif"
            layout="responsive"
            alt="man"
            width={100}
            height={100}
            className="min-h-[220px] min-w-[200px] h-fit"
          />
        </div>
        <div className="flex flex-col pr-4 sm:ml-0 -ml-4">
          <DividerElement tag="MISSION" dividerClassName="gap-6">
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
