export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const getBlogsById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/${id}`
    );
    const data = await response.json();
    return data.data;
  } catch (err) {
    throw err;
  }
};

export const getSelectedBlog = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/selected`
    );
    const data = await response.json();
    return data.data;
  } catch (err) {
    throw err;
  }
};
