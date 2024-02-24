"use client";
import Image from "next/image";
import { useState } from "react";
import DividerElement from "../shared/DividerElement";

const Vision = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="w-full flex items-end justify-end sm:mt-0 mt-10">
        <div
          className={`sm:w-2/3 w-full sm:pl-0 pl-14 ${loaded ? "" : "mixBg"}`}
        >
          <Image
            layout="responsive"
            alt="mix"
            width={100}
            height={100}
            src="/assets/about/mix.gif"
            objectFit="cover"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
      <div
        className={`flex flex-col w-full px-12 sm:px-[100px] sm:gap-6 gap-3 md:ml-[0%] xl:ml-[16%] ${
          !loaded && "lg:-mt-24"
        }`}
      >
        <DividerElement tag="VISION" dividerClassName="xl:!gap-32">
          To fearlessly pioneer <br />
          unconventional thinking in our
          <br />
          <span className="text-yellow-550 font-extrabold">
            pursuit of the extraordinary.
          </span>
        </DividerElement>
      </div>
    </div>
  );
};

export default Vision;
