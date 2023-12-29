import Loading from "@/components/intro/Loading";
import ReusableImageAnimation from "@/components/intro/ReusableImageAnimation";

const Page = () => {
  return (
    <div className="flex flex-col text-white bg-[#0A0808] min-h-screen relative">
      <Loading />
      <ReusableImageAnimation imageSrc="text1.png" imageAlt="text1" />
      <ReusableImageAnimation imageSrc="text2.png" imageAlt="text2" />
      <ReusableImageAnimation imageSrc="text3.png" imageAlt="text3" />
      <ReusableImageAnimation imageSrc="text4.png" imageAlt="text4" />
      <ReusableImageAnimation imageSrc="text5.png" imageAlt="text5" />
      <ReusableImageAnimation imageSrc="text6.png" imageAlt="text6" />
    </div>
  );
};

export default Page;
