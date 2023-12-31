"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Wrapper from "../shared/Wrapper";
import { getCases } from "@/apis/case.api";
import { CircularProgress } from "@mui/material";
import NoDataFound from "../shared/NoDataFound";

const Cases = async () => {
  const caseData = await getCases();

  return (
    <Wrapper className="flex flex-col border-bottom sm:pb-[200px] pb-[150px] items-center justify-center">
      <>
        {caseData.length < 0 ? (
          <NoDataFound data="case" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-16 lg:gap-6">
            {caseData.map((port, i) => (
              <Link
                href=""
                key={port.serial}
                className="md:first:col-span-2 first:col-span-1 flex flex-col gap-4"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${port.feature_image}`}
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
    </Wrapper>
  );
};

export default Cases;
