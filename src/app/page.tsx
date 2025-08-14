import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center px-6">
      <Header />

      <h1 className="w-full max-w-screen-xl p-6 text-4xl font-bold">
        Design Your Workday
      </h1>
    </div>
  );
}
