export const getCaseById = async (slug) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/case-study/${slug}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
