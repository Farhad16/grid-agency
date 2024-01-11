import React, { useEffect, useState } from "react";
import VerticleEl from "../shared/VerticleEl";
import Wrapper from "../shared/Wrapper";
import { getServices } from "@/apis/service.api";
import ServiceSlider from "./ServiceSlider";
import NoDataFound from "../shared/NoDataFound";
import { CircularProgress } from "@mui/material";

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [serviceData, setServiceData] = useState([]);

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
        <VerticleEl className="sm:left-12 left-0 top-[350px] !text-[#231F20]">
          SERVICES
        </VerticleEl>
        {loading ? (
          <CircularProgress className="text-light-50 mb-[100px]" />
        ) : serviceData.length > 0 ? (
          <ServiceSlider serviceData={serviceData} />
        ) : (
          <NoDataFound data="service" className="!text-black" />
        )}
        <VerticleEl className="sm:block hidden sm:-right-[0px] -right-4 top-[350px] !text-[#231F20]">
          STUPID SERVICES
        </VerticleEl>
      </Wrapper>
    </div>
  );
};

export default Services;
