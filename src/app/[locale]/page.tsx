import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import SocialProof from '@/components/sections/SocialProof';
import Services from '@/components/sections/Services';
import TechStack from '@/components/sections/TechStack';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07101F] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <SocialProof />
      <Services />
      <TechStack />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
