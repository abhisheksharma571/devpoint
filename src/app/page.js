import HeroSection from "@/components/HeroSection";
import {WhatWeOffer} from "@/components/WhatWeOffer";
import WhyChooseUs from "@/components/WhyChooseUs";
import OneStepAway from "@/components/OneStepAway";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] backdrop:blur-2xl">
      <HeroSection />
      <WhatWeOffer />
      <WhyChooseUs />
      <OneStepAway />
    </main>
  );
}
