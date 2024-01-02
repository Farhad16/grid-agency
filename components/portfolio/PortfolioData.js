import Link from "next/link";
import React from "react";
import { getPortfolio } from "@/apis/portfolio.api";
import Wrapper from "../shared/Wrapper";
import NoDataFound from "../shared/NoDataFound";

const PortfolioData = async () => {
  const portfolioData = await getPortfolio();

  const colThree = Math.floor(portfolioData.length / 3);
  const colDynamic = portfolioData.length % 3;

  return (
    <Wrapper className="flex flex-col mt-24 sm:pb-[150px] pb-24 sm:mt-[200px] overflow-hidden items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-10 lg:gap-6 w-full mb-12">
        {colThree > 0 &&
          portfolioData.slice(0, colThree * 3).map((port) => (
            <Link
              href={`case/${port.id}`}
              key={port.id}
              className="flex flex-col gap-4 relative group"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${port.img}`}
                alt="portimg"
                className="min-h-[300px] sm:h-[560px] h-[300px] object-cover w-full"
              />
              <div className="flex gap-4 items-center text-[15px]">
                <p className="text-yellow-550 font-bold uppercase">
                  {port.name}
                </p>
                <p className="text-light-50 font-bold">{port.desc}</p>
              </div>
              <img
                src="/assets/case/view.svg"
                alt="view"
                className="absolute hidden transition duration-500 group-hover:block top-[30%] right-[10%]"
              />
            </Link>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-6 w-full">
        {colDynamic > 0 &&
          portfolioData.slice(-colDynamic).map((port, i) => (
            <Link
              href={`case/${port.id}`}
              key={port.id}
              className={`${
                colDynamic === 2
                  ? "sm:first:col-span-2 space-y-10"
                  : "col-span-3"
              } flex flex-col gap-4 relative group`}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${port.img}`}
                alt="portimg"
                className="min-h-[300px] sm:h-[560px] h-[300px] object-cover w-full"
              />
              <div className="flex gap-4 items-center text-[15px]">
                <p className="text-yellow-550 font-bold uppercase">
                  {port.name}
                </p>
                <p className="text-light-50 font-bold">{port.desc}</p>
              </div>
              <img
                src="/assets/case/view.svg"
                alt="view"
                className="absolute hidden transition duration-500 group-hover:block top-[30%] right-[10%]"
              />
            </Link>
          ))}
      </div>
      {portfolioData.length < 0 && <NoDataFound data="portfolio" />}
    </Wrapper>
  );
};

export default PortfolioData;
