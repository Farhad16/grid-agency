"use client";
import React from "react";
import NoDataFound from "../shared/NoDataFound";
import StupidWork from "./StupidWork";
import PortfolioItem from "./PortfolioItem";

const PortfolioData = ({ portfolioData }) => {
  const colThree = Math.floor(portfolioData.length / 3);
  const colDynamic = portfolioData.length % 3;

  return (
    <>
      <StupidWork />
      <div className="flex flex-col mt-24 sm:pb-[150px] pb-24 sm:mt-[200px] overflow-hidden items-center justify-center sm:px-[100px] px-4 !cursor-default">
        {portfolioData.length < 0 ? (
          <NoDataFound data="portfolio" />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-10 lg:gap-6 w-full mb-12">
              {colThree > 0 &&
                portfolioData
                  .slice(0, colThree * 3)
                  .map((port) => <PortfolioItem key={port.id} port={port} />)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-6 w-full">
              {colDynamic > 0 &&
                portfolioData
                  .slice(-colDynamic)
                  .map((port) => <PortfolioItem key={port.id} port={port} />)}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PortfolioData;
