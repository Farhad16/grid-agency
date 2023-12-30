import axiosInstance from "../utils/axiosInstance";

export const postContact = async (data) => {
  try {
    const response = await axiosInstance.post("/contact", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
