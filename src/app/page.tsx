import { Header } from "@/components/main-page/header";
import { Hero } from "@/components/main-page/hero";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center px-6">
      <Header />
      <Hero />
    </div>
  );
}

