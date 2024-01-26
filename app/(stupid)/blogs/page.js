import BlogData from "@/components/blogs/BlogData";
import Footer from "@/components/shared/Footer";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`, {
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Page = async () => {
  const data = await getData();

  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen">
      <BlogData blogData={data} />
      <Footer />
    </div>
  );
};

export default Page;
