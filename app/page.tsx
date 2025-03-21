import { BGGradient } from "@/components/common/bg-gradient";
import HeroSection from "@/components/home/hero_section";
import DemoSection from "@/components/home/demo_section";

export default function Home() {
  return (
    <div className="relative w-full">
      <BGGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
      </div>
    </div>
  );
}
