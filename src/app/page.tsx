import { Hero } from "@/components/main-page/hero";
import { PricingSection } from "@/components/main-page/pricing";
import { WhyUsSection } from "@/components/main-page/why-us-section";
import { WorkspaceCards } from "@/components/main-page/workspace-cards";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden flex flex-col items-center px-3 sm:px-6 pb-12">
      <Hero />
      <WorkspaceCards />
      <WhyUsSection />
      <PricingSection />
    </div>
  );
}

