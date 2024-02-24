"use client";
import Image from "next/image";
import { useState } from "react";

const Achieve = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={`"relative pb-12" ${
        loaded ? "relative" : "relative placeholder w-full"
      }`}
    >
      <Image
        src="/assets/about/achieve.gif"
        alt="case"
        layout="responsive"
        width={100}
        height={100}
        objectFit="cover"
        onLoad={() => setLoaded(true)}
      />
      <p className="lg:text-[54px] md:text-[40px] text-[26px] text-light-50 w-full text-center font-medium tracking-[-2.7px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        lies the potential to revolutionize and
        <br /> redefine what is achievable.
      </p>
    </div>
  );
};

export default Achieve;
