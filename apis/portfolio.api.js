export const getPortfolio = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolios`
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};
