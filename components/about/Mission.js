import Image from "next/image";
import React from "react";
import DividerElement from "../shared/DividerElement";

const Mission = () => {
  return (
    <>
      <div className="sm:mt-[150px] mt-24 flex flex-col sm:flex-row items-center gap-8">
        <div>
          <Image
            layout="responsive"
            alt="man"
            width={100}
            height={100}
            src="/assets/about/man.gif"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <DividerElement tag="MISSION">
            To empower businesses to{" "}
            <span className="text-yellow-550 font-semibold">
              embrace bold and unconventional ideas.
            </span>
          </DividerElement>
        </div>
      </div>
    </>
  );
};

export default Mission;
