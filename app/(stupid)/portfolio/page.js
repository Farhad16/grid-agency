import Cases from "@/components/portfolio/Cases";
import PortfolioData from "@/components/portfolio/PortfolioData";
import StupidWork from "@/components/portfolio/StupidWork";
import Footer from "@/components/shared/Footer";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col text-white bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen">
      <StupidWork />
      <PortfolioData />
      <Cases />
      <Footer />
    </div>
  );
};

export default Page;
