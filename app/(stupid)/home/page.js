import Footer from "@/components/shared/Footer";
import Banner from "@/components/main/Banner";
import MarqueeText from "@/components/main/MarqueeText";
import Pride from "@/components/main/Pride";
import SelectedWork from "@/components/main/SelectedWork";
import Services from "@/components/main/Services";
import Talks from "@/components/main/Talks";

const Page = () => {
  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[150px] sm:pt-[250px] min-h-screen relative">
      <Banner />
      <MarqueeText />
      <Services />
      <SelectedWork />
      <Pride />
      <Talks />
      <Footer />
    </div>
  );
};

export default Page;
