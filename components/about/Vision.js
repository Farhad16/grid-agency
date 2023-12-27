import Image from "next/image";
import React from "react";
import DividerElement from "../shared/DividerElement";

const Vision = () => {
  return (
    <>
      <div className="w-full flex items-end justify-end mt-16">
        <div className="w-2/3">
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
      <div className="flex flex-col gap-2 sm:w-1/2 w-full">
        <DividerElement tag="VISION">
          To fearlessly pioneer
          <br /> unconventional thinking in our
          <br />
          <span className="text-yellow-550 font-semibold">
            pursuit of the extraordinary.
          </span>
        </DividerElement>
      </div>
    </>
  );
};

export default Vision;
