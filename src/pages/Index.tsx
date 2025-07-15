import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20"> {/* Account for fixed header */}
        <HeroSection />
        <ProcessSection />
        <BenefitsSection />
        <ServicesSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
