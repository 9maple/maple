import HeroSection from "@/components/HeroSection";
import AboutCreatorsSection from "@/components/AboutCreatorsSection";
import BuildGuideSection from "@/components/BuildGuideSection";
import DownloadsSection from "@/components/DownloadsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <HeroSection />
    <div className="relative">
      <div className="wavy-divider" />
      <img
        src="/whitedog1.png"
        alt="White dog"
        className="pointer-events-none absolute left-[20%] top-1/2 z-10 h-44 w-auto -translate-x-1/2 -translate-y-1/2 object-contain sm:h-52 md:h-56"
      />
    </div>
    <AboutCreatorsSection />
    <div className="relative">
      <div className="wavy-divider" />
      <img
        src="/whitedog2.png"
        alt="White dog"
        className="pointer-events-none absolute right-[20%] top-1/2 z-10 h-44 w-auto translate-x-1/2 -translate-y-1/2 object-contain sm:h-52 md:h-56"
      />
    </div>
    <BuildGuideSection />
    <div className="relative">
      <div className="wavy-divider" />
      <img
        src="/whitedog3.png"
        alt="White dog"
        className="pointer-events-none absolute left-[25%] top-1/2 z-10 h-44 w-auto -translate-x-1/2 -translate-y-1/2 object-contain sm:h-52 md:h-56"
      />
    </div>
    <DownloadsSection />
    <Footer />
  </div>
);

export default Index;
