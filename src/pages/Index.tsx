import HeroSection from "@/components/HeroSection";
import BuildGuideSection from "@/components/BuildGuideSection";
import DownloadsSection from "@/components/DownloadsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <HeroSection />
    <div className="wavy-divider" />
    <BuildGuideSection />
    <div className="wavy-divider" />
    <DownloadsSection />
    <Footer />
  </div>
);

export default Index;
