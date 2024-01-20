import React from "react";
import NoDataFound from "../shared/NoDataFound";
import StupidWork from "./StupidWork";
import PortfolioItem from "./PortfolioItem";

const PortfolioData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolios`);
  const portfolioData = await res.json();
  const data = portfolioData.data;
  const colThree = Math.floor(data.data.length / 3);
  const colDynamic = data.data.length % 3;

  return (
    <>
      <StupidWork />
      <div className="flex flex-col mt-24 sm:pb-[150px] pb-24 sm:mt-[150px] overflow-hidden items-center justify-center sm:px-[100px] px-4 !cursor-default">
        {data.data.length < 0 ? (
          <NoDataFound data="portfolio" className="text-light-50" />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-10 lg:gap-6 w-full mb-12">
              {colThree > 0 &&
                data.data
                  .slice(0, colThree * 3)
                  .map((port) => (
                    <PortfolioItem key={port.id} port={port} firstGrid={true} />
                  ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-6 w-full">
              {colDynamic > 0 &&
                data.data
                  .slice(-colDynamic)
                  .map((port) => (
                    <PortfolioItem
                      key={port.id}
                      port={port}
                      colDynamic={colDynamic}
                      firstGrid={false}
                    />
                  ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PortfolioData;
