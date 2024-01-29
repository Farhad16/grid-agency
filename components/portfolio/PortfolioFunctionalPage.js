"use client";
import { useMemo, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import StupidWork from "./StupidWork";

const PortfolioFunctionalPage = ({ portfolioData }) => {
  const { data } = portfolioData;

  const colThree = Math.floor(data.length / 3);
  const colDynamic = data.length % 3;

  const [selectClient, setSelectClient] = useState("");
  const [selectCategory, setSelectCategory] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const clientFilter = selectClient
        ? item.port_client === selectClient
        : true;
      const categoryFilter = selectCategory
        ? item.category === selectCategory
        : true;

      return clientFilter && categoryFilter;
    });
  }, [data, selectClient, selectCategory]);

  return (
    <>
      <StupidWork
        setSelectClient={setSelectClient}
        setSelectCategory={setSelectCategory}
      />

      <div className="flex flex-col mt-24 sm:mt-[150px] overflow-hidden items-center justify-center sm:px-[100px] px-4 !cursor-default">
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-10 lg:gap-6 w-full mb-12">
            {colThree > 0 &&
              filteredData
                .slice(0, colThree * 3)
                .map((port) => (
                  <PortfolioItem key={port.id} port={port} firstGrid={true} />
                ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-6 w-full">
            {colDynamic > 0 &&
              filteredData
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
      </div>
    </>
  );
};

export default PortfolioFunctionalPage;
