import Loading from "@/components/intro/Loading";
import ReusableImageAnimation from "@/components/intro/ReusableImageAnimation";

const Page = () => {
  return (
    <div className="flex flex-col text-white bg-[#0A0808]">
      <Loading />
      <div
        style={{
          backgroundImage: "url('/assets/intro/text-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="flex flex-col scroll-section-outer z-0"
      >
        <ReusableImageAnimation
          imageSrc="text1.png"
          imageAlt="text1"
          scale={5}
        />
        <ReusableImageAnimation
          imageSrc="text2.png"
          imageAlt="text2"
          scale={5}
        />
        <ReusableImageAnimation
          imageSrc="text3.png"
          imageAlt="text3"
          scale={5}
        />
        <ReusableImageAnimation
          imageSrc="text4.png"
          imageAlt="text4"
          scale={5}
        />
        <ReusableImageAnimation
          imageSrc="text5.png"
          imageAlt="text5"
          scale={5}
        />
        <ReusableImageAnimation
          imageSrc="text6.png"
          imageAlt="text6"
          scale={1}
        />
      </div>
    </div>
  );
};

export default Page;
