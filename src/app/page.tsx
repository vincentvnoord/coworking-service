import Button from "@/components/button";
import { Header } from "@/components/main-page/header";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center px-6">
      <Header />
      <div className="w-full max-w-screen-xl flex gap-4 items-center pt-8">
        <div className="flex flex-col w-full gap-2">
          <h1 className="w-full text-5xl font-bold">
            Design Your Workday
          </h1>

          <span className="text-lg">
            Flexible spaces, focused energy, and everything you need to do your best work—your way.
          </span>

          <div className="flex flex-col pt-6 gap-4 max-w-[428px]">
            <Button className="text-lg font-medium py-4">
              Search
            </Button>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-fit grid grid-cols-2 gap-4">
            <HeroImage />
            <HeroImage />
            <HeroImage />
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  );
}

const HeroImage = () => {

  return (
    <div className="w-full h-64 aspect-square bg-gray-200 rounded-3xl flex items-center justify-center">
      <span className="text-gray-600">Image Placeholder 1</span>
    </div>
  )
}
