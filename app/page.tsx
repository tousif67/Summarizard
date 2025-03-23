import { BGGradient } from "@/components/common/bg-gradient";
import HeroSection from "@/components/home/hero_section";
import DemoSection from "@/components/home/demo_section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import PricingSection from "@/components/home/pricing-section";
import CtaSection from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="relative w-full">
      <BGGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <CtaSection />
        {/* <FooterSection /> */}
      </div>
    </div>
  );
}
