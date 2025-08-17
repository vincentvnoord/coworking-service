import { Header } from "@/components/main-page/header";
import { Hero } from "@/components/main-page/hero";
import { WorkspaceCards } from "@/components/main-page/workspace-cards";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center px-6 pb-12">
      <Header />
      <Hero />
      <WorkspaceCards />
    </div>
  );
}

