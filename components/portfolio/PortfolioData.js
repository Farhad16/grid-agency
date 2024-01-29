"use client";
import { CircularProgress, Pagination } from "@mui/material";
import PortfolioFunctionalPage from "./PortfolioFunctionalPage";
import { useState, useEffect } from "react";

const PortfolioData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolios?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (isLoading)
    return (
      <div className="w-full flex items-center justify-center">
        <CircularProgress
          className="text-light-50 mb-[100px]"
          style={{ color: "#E6E0D2" }}
        />
      </div>
    );

  if (!data) return <p>No profile data</p>;

  return (
    <>
      <PortfolioFunctionalPage portfolioData={data.data} />
      <div className="flex justify-center sm:pb-[150px] pb-24 mt-10 text-light-50">
        <Pagination
          count={data.data.last_page}
          page={page}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default PortfolioData;
