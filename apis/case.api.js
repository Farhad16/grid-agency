export const getCases = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/case-studies`
    );
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const getCaseById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/case-study/${id}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};
