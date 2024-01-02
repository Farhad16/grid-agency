export const getCaseById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/case-study/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
