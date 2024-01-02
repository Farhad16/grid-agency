"use client";
import Loading from "@/components/intro/Loading";
import ReusableImageAnimation from "@/components/intro/ReusableImageAnimation";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleMainPageClick = (e) => {
    router.push("/main", { scroll: true });
    document.body.style.overflow = "visible";
  };

  return (
    <div className="flex flex-col text-white bg-[#0A0808]">
      <Loading />
      <button
        onClick={handleMainPageClick}
        className="absolute top-4 right-4 z-10 border border-amber-400 hover:border-white text-white hover:text-amber-400 px-4 py-2 rounded-full bg-transparent"
      >
        Skip Intro
      </button>
      <div
        className="flex flex-col scroll-section-outer items-center justify-center"
        style={{
          backgroundImage: "url('/assets/intro/text-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "130% auto",
          backgroundPosition: "top",
          marginTop: "-100px",
          zIndex: 9999999999,
        }}
      >
        <ReusableImageAnimation
          imageSrc="text1.png"
          imageAlt="text1"
          scale={2}
          main={false}
        />
        <ReusableImageAnimation
          imageSrc="text2.png"
          imageAlt="text2"
          scale={2}
          main={false}
        />
        <ReusableImageAnimation
          imageSrc="text3.png"
          imageAlt="text3"
          scale={2}
          main={false}
        />
        <ReusableImageAnimation
          imageSrc="text4.png"
          imageAlt="text4"
          scale={2}
          main={false}
        />
        <ReusableImageAnimation
          imageSrc="text5.png"
          imageAlt="text5"
          scale={2}
          main={false}
        />
        <ReusableImageAnimation
          imageSrc="text6.png"
          imageAlt="text6"
          scale={0.5}
          main={true}
        />
      </div>
    </div>
  );
};

export default Page;
