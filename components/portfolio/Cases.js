import { caseData, portFolioData } from "@/constance/portlio.data";
import Link from "next/link";
import React from "react";
import Wrapper from "../shared/Wrapper";

const Cases = () => {
  return (
    <Wrapper className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-16 lg:gap-6 mt-[200px]">
        {portFolioData.map((port) => (
          <Link href="" key={port.serial}>
            <div className="flex flex-col gap-4 max-h-[560px] min-h-[560px]">
              <img
                src={port.img}
                alt="portimg"
                className="w-full h-full min-h-[560px] object-cover"
              />
              <div className="flex gap-4 items-center text-[15px]">
                <p className="text-[#F9BC32] font-extrabold uppercase">
                  {port.name}
                </p>
                <p className="text-[#E6E0D2] font-extrabold">{port.des}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-16 lg:gap-6 mt-[200px]">
        {caseData.map((port, i) => (
          <Link
            href=""
            key={port.serial}
            className="md:first:col-span-2 col-span-1"
          >
            <div className="flex flex-col gap-4 max-h-[560px] min-h-[560px]">
              <img
                src={port.img}
                alt="portimg"
                className="w-full h-full min-h-[560px] object-cover"
              />
              <div className="flex gap-4 items-center text-[15px]">
                <p className="text-[#F9BC32] font-extrabold uppercase">
                  {port.name}
                </p>
                <p className="text-[#E6E0D2] font-extrabold">{port.des}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default Cases;
