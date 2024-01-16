export const getBlogsById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/${id}`
    );
    const data = response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
