import React, { useEffect, useState } from "react";
import VerticleEl from "../shared/VerticleEl";
import Wrapper from "../shared/Wrapper";
import { getServices } from "@/apis/service.api";
import ServiceSlider from "./ServiceSlider";
import NoDataFound from "../shared/NoDataFound";
import { CircularProgress } from "@mui/material";
import ScrollSliderDesktop from "./ScrollSliderDesktop";

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
    <div className="bg-paper pb-12 pt-16 w-full relative">
      <Wrapper className="w-full h-full flex items-center justify-center min-h-[200px]">
        {loading ? (
          <CircularProgress
            className="text-light-50 mb-[100px]"
            style={{ color: "#E6E0D2" }}
          />
        ) : serviceData.length > 0 ? (
          <>
            <ScrollSliderDesktop
              serviceData={serviceData}
              screenWidth={screenWidth}
            />
          </>
        ) : (
          <NoDataFound data="service" className="!text-black" />
        )}
      </Wrapper>
    </div>
  );
};

export default Services;
