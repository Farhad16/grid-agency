import { getPortfolio } from "@/apis/portfolio.api";
import PortfolioData from "@/components/portfolio/PortfolioData";
import StupidWork from "@/components/portfolio/StupidWork";
import Footer from "@/components/shared/Footer";
import React from "react";

const Page = async () => {
  const portfolioData = await getPortfolio();

  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen">
      <StupidWork />
      <PortfolioData portfolioData={portfolioData} />
      <Footer />
    </div>
  );
};

export default Page;
