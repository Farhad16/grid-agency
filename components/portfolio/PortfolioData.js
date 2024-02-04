"use client";
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import PortfolioFunctionalPage from "./PortfolioFunctionalPage";
import ProductSkeleton from "./ProductSkeleton";

const PortfolioData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [initialCount, setInitailCount] = useState(0);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolios?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCount(data.data.last_page);
        setInitailCount(data.data.last_page);
        setLoading(false);
      });
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (isLoading) return <ProductSkeleton />;

  if (!data) return <p>No profile data</p>;

  return (
    <>
      <PortfolioFunctionalPage
        portfolioData={data.data}
        setCount={setCount}
        count={initialCount}
      />
      <div className="flex justify-center sm:pb-[150px] pb-24 mt-10 text-light-50">
        <Pagination count={count} page={page} onChange={handlePageChange} />
      </div>
    </>
  );
};

export default PortfolioData;
