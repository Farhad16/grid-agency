"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import StupidWork from "./StupidWork";

const PortfolioFunctionalPage = ({ portfolioData, setCount, count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const initialSelectClient = searchParams.get("clients") || "";
  const initialSelectCategory = searchParams.get("category") || "";

  const [data, setData] = useState([]);
  const [selectClient, setSelectClient] = useState(initialSelectClient);
  const [selectCategory, setSelectCategory] = useState(initialSelectCategory);

  useEffect(() => {
    const clientName = selectClient.replace(/ /g, "%20");
    const categoryName = selectCategory.replace(/ /g, "%20");
    const fetchData = async () => {
      replace(`${pathname}?clients=${clientName}&category=${categoryName}`);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolios?clients=${clientName}&category=${categoryName}`
        );
        const result = await response.json();
        setCount(result.data.last_page);
        setData(result.data.data);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
        setData([]);
      }
    };

    if (selectClient || selectCategory) {
      fetchData();
    } else {
      setData(portfolioData.data);
      replace(`${pathname}`);
      setCount(count);
    }
  }, [selectClient, selectCategory]);

  const colThree = Math.floor(data.length / 3);
  const colDynamic = data.length % 3;

  return (
    <>
      <StupidWork
        setSelectClient={setSelectClient}
        selectClient={selectClient}
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />

      <div className="flex flex-col mt-24 sm:mt-[150px] overflow-hidden items-center justify-center sm:px-[100px] px-4 !cursor-default">
        {data.length === 0 ? (
          <p className="text-center text-light-50">No portfolio data</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-10 lg:gap-6 w-full mb-12">
              {colThree > 0 &&
                data
                  .slice(0, colThree * 3)
                  .map((port) => (
                    <PortfolioItem key={port.id} port={port} firstGrid={true} />
                  ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-6 w-full">
              {colDynamic > 0 &&
                data
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

export default PortfolioFunctionalPage;
