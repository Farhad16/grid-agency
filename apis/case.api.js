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

export const getClients = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/clients`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};
