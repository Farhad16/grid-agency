import React, { useEffect, useState } from "react";
import { getServices } from "@/apis/service.api";
import NoDataFound from "../shared/NoDataFound";
import { CircularProgress } from "@mui/material";
import BlogsDesktop from "./BlogsDesktop";
import { talkData } from "@/constance/talks.data";
import BlogMobile from "./BlogMobile";

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [serviceData, setServiceData] = useState([]);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [screenWidth]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServices();
        setServiceData(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#241f20]">
      {loading ? (
        <CircularProgress
          className="text-light-50 mb-[100px]"
          style={{ color: "#E6E0D2" }}
        />
      ) : talkData.length > 0 ? (
        <>
          <BlogsDesktop blogData={talkData} screenWidth={screenWidth} />
          <BlogMobile blogData={talkData} />
        </>
      ) : (
        <NoDataFound data="service" className="!text-black" />
      )}
    </div>
  );
};

export default Services;
