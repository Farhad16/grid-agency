"use client";
import { CircularProgress } from "@mui/material";
import PortfolioFunctionalPage from "./PortfolioFunctionalPage";
import { useState, useEffect } from "react";

const PortfolioData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolios`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

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
  return <PortfolioFunctionalPage portfolioData={data.data} />;
};

export default PortfolioData;
