import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
    <div className="flex flex-col w-full sm:mt-[200px] mt-24 relative">
      <div className="rotate-[4.2deg] absolute top-1/2 right-0 transform -translate-y-1/2 bg-black">
        <Marquee
          className="flex items-center gap-2 sm:text-[30px] text-sm text-light-50 tracking-[10.5px] p-3 border border-[#E6E0D2]"
          speed={200}
        >
          <Image
            src="/assets/main_page/msg.png"
            alt="msg"
            width={60}
            height={41}
            className="mr-4 w-8 sm:w-12"
          />
          <span>FOSTERING HUMAN CONNECTIONS THROUGH IMPACTFUL CREATIVE</span>
        </Marquee>
      </div>
      <div className="-rotate-[4.2deg] relative bg-black">
        <Marquee
          className="flex items-center sm:text-[30px] text-sm text-light-50 tracking-[10.5px] p-3 border border-[#E6E0D2]"
          speed={200}
        >
          <Image
            src="/assets/main_page/msg.png"
            alt="msg"
            width={60}
            height={41}
            className="mr-4 w-6 w-8 sm:w-12"
          />
          <span>FOSTERING HUMAN CONNECTIONS THROUGH IMPACTFUL CREATIVE</span>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeText;
