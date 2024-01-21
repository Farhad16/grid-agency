import PortfolioFunctionalPage from "./PortfolioFunctionalPage";

const PortfolioData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolios`);
  const portfolioData = await res.json();

  return <PortfolioFunctionalPage portfolioData={portfolioData.data} />;
};

export default PortfolioData;
