import axiosInstance from "../utils/axiosInstance";

export const getServices = async () => {
  try {
    const response = await axiosInstance.get("/services");
    return response.data;
  } catch (error) {
    throw error;
  }
};
