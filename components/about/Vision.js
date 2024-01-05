import Image from "next/image";
import React from "react";
import DividerElement from "../shared/DividerElement";

const Vision = () => {
  return (
    <>
      <div className="w-full flex items-end justify-end sm:mt-20 mt-16">
        <div className="sm:w-2/3 w-full sm:pl-0 pl-14">
          <Image
            layout="responsive"
            alt="mix"
            width={100}
            height={100}
            src="/assets/about/mix.gif"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-12 sm:px-[100px] mt-6">
        <DividerElement tag="VISION">
          To fearlessly pioneer <br />
          unconventional thinking in our
          <br />
          <span className="text-yellow-550 font-extrabold">
            pursuit of the extraordinary.
          </span>
        </DividerElement>
      </div>
    </>
  );
};

export default Vision;
