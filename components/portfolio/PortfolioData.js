"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getPortfolio } from "@/apis/portfolio.api";
import Wrapper from "../shared/Wrapper";
import { CircularProgress } from "@mui/material";
import NoDataFound from "../shared/NoDataFound";

const PortfolioData = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getPortfolio();
        setPortfolioData(data.data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper className="flex flex-col mt-24 sm:pb-[150px] pb-24 sm:mt-[200px] overflow-hidden items-center justify-center">
      {loading ? (
        <CircularProgress
          className="text-white"
          sx={{ width: "100px" }}
          size={60}
        />
      ) : (
        <>
          {portfolioData.length < 0 ? (
            <NoDataFound data="portfolio" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-16 lg:gap-6">
              {portfolioData.map((port) => (
                <Link href="" key={port.serial} className="flex flex-col gap-4">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${port.img}`}
                    alt="portimg"
                    className="min-h-[300px] sm:h-[560px] h-[300px] object-cover"
                  />
                  <div className="flex gap-4 items-center text-[15px]">
                    <p className="text-yellow-550 font-bold uppercase">
                      {port.name}
                    </p>
                    <p className="text-light-50 font-bold">{port.des}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default PortfolioData;
