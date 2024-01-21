import PortfolioData from "@/components/portfolio/PortfolioData";
import Footer from "@/components/shared/Footer";
import React from "react";

const Page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolios`);
  const portfolioData = await res.json();
  console.log(portfolioData);
  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen">
      <PortfolioData portfolioData={portfolioData} />
      <Footer />
    </div>
  );
};

export default Page;
