import React from "react";

import VerticleEl from "../shared/VerticleEl";
import Wrapper from "../shared/Wrapper";
import { getServices } from "@/apis/service.api";
import ServiceSlider from "./ServiceSlider";
import NoDataFound from "../shared/NoDataFound";

const Services = async () => {
  const serviceData = await getServices();

  return (
    <div className="bg-paper pb-12 pt-16 w-full relative">
      <Wrapper className="w-full h-full flex items-center justify-center min-h-[200px]">
        <VerticleEl className="sm:left-12 left-0 top-[350px] !text-[#231F20]">
          SERVICES
        </VerticleEl>
        {serviceData.length > 0 ? (
          <ServiceSlider serviceData={serviceData} />
        ) : (
          <NoDataFound data="service" className="!text-black" />
        )}
        <VerticleEl className="sm:-right-[0px] -right-4 top-[350px] !text-[#231F20]">
          STUPID SERVICES
        </VerticleEl>
      </Wrapper>
    </div>
  );
};

export default Services;
