import PortfolioData from "@/components/portfolio/PortfolioData";
import Footer from "@/components/shared/Footer";
import React from "react";

const Page = async () => {
  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen">
      <PortfolioData />
      <Footer />
    </div>
  );
};

export default Page;
