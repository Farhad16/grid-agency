import BlogData from "@/components/blogs/BlogData";
import Footer from "@/components/shared/Footer";

const Page = async () => {
  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen">
      <BlogData />
      <Footer />
    </div>
  );
};

export default Page;
