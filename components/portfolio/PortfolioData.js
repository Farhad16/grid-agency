import Link from "next/link";
import React from "react";

import NoDataFound from "../shared/NoDataFound";

const PortfolioData = ({ portfolioData }) => {
  const colThree = Math.floor(portfolioData.length / 3);
  const colDynamic = portfolioData.length % 3;

  return (
    <div className="flex flex-col mt-24 sm:pb-[150px] pb-24 sm:mt-[200px] overflow-hidden items-center justify-center sm:px-[100px] px-4 !cursor-default">
      {portfolioData.length < 0 ? (
        <NoDataFound data="portfolio" />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-10 lg:gap-6 w-full mb-12">
            {colThree > 0 &&
              portfolioData.slice(0, colThree * 3).map((port) => (
                <Link
                  href={`/case/${port.casestudy.id}`}
                  key={port.id}
                  className="flex flex-col gap-4 group"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${port.img}`}
                    alt="portimg"
                    className="object-cover min-h-[560px] sm:h-[560px] w-full h-full"
                  />

                  <div className="flex gap-4 items-center text-[15px]">
                    <p className="text-yellow-550 font-extrabold uppercase">
                      {port.name}
                    </p>
                    <p className="text-light-50 font-extrabold">{port.desc}</p>
                  </div>
                  <img
                    src="/assets/case/view.svg"
                    alt="view"
                    className="absolute hidden transition duration-500 group-hover:block top-[30%] right-[10%]"
                  />
                </Link>
              ))}
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-6 w-full"
            onMouseOut={handleMouseLeave}
          >
            {colDynamic > 0 &&
              portfolioData.slice(-colDynamic).map((port, i) => (
                <Link
                  href={`/case/${port.casestudy.id}`}
                  key={port.id}
                  className={`${
                    colDynamic === 2
                      ? "sm:first:col-span-2 sm:mb-0 mb-10"
                      : "col-span-3"
                  } flex flex-col gap-4 group`}
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${port.img}`}
                    alt="portimg"
                    className="min-h-[560px] sm:h-[560px] object-cover w-full"
                  />
                  <div className="flex gap-4 items-center text-[15px]">
                    <p className="text-yellow-550 font-extrabold uppercase">
                      {port.name}
                    </p>
                    <p className="text-light-50 font-extrabold">{port.desc}</p>
                  </div>
                  <img
                    src="/assets/case/view.svg"
                    alt="view"
                    className="absolute hidden transition duration-500 group-hover:block top-[30%] right-[10%]"
                  />
                </Link>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PortfolioData;
