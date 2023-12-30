import axiosInstance from "../utils/axiosInstance";

export const getCases = async () => {
  try {
    const response = await axiosInstance.get("/case-studies");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCaseById = async (id) => {
  try {
    const response = await axiosInstance.get(`/case-studies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
