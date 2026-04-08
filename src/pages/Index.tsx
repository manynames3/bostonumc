import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PastorSection from "@/components/PastorSection";
import WorshipSection from "@/components/WorshipSection";
import SermonsSection from "@/components/SermonsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PastorSection />
        <WorshipSection />
        <SermonsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
