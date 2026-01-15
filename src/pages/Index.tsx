import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { PartnersSection } from '@/components/PartnersSection';
import { ServicesSection } from '@/components/ServicesSection';
import { FullWidthImageSection } from '@/components/FullWidthImageSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ImpactSection } from '@/components/ImpactSection';
import { PricingSection } from '@/components/PricingSection';
import { AboutSection } from '@/components/AboutSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <ServicesSection />
        <FullWidthImageSection />
        <ProcessSection />
        <ImpactSection />
        <PricingSection />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
