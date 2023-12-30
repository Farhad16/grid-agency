import axiosInstance from "../utils/axiosInstance";

export const getPortfolio = async () => {
  try {
    const response = await axiosInstance.get("/portfolios");
    return response.data;
  } catch (error) {
    throw error;
  }
};
