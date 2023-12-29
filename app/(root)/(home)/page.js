"use client"
import Loading from "@/components/intro/Loading";
import ReusableImageAnimation from "@/components/intro/ReusableImageAnimation";
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const handleMainPageClick = (e) => {
    router.push('/main', { scroll: true });
  };

  return (
    <div className="flex flex-col text-white bg-[#0A0808] min-h-screen relative">
      <Loading />
      <button onClick={handleMainPageClick} className="absolute top-4 right-4 z-10 border border-amber-400 hover:border-white text-white hover:text-amber-400 px-4 py-2 rounded-full bg-transparent" >
        Skip Intro
      </button>
      <div
        style={{
          backgroundImage: "url('/assets/intro/text-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="flex flex-col"
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
          scale={2}
        />
      </div>
    </div>
  );
};

export default Page;
