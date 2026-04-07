import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import MaterialsSection from "@/components/MaterialsSection";
import MeasurementSection from "@/components/MeasurementSection";
import PrintingSection from "@/components/PrintingSection";
import BuildGuideSection from "@/components/BuildGuideSection";
import SafetySection from "@/components/SafetySection";
import DownloadsSection from "@/components/DownloadsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <OverviewSection />
    <MaterialsSection />
    <MeasurementSection />
    <PrintingSection />
    <BuildGuideSection />
    <SafetySection />
    <DownloadsSection />
    <Footer />
  </div>
);

export default Index;
