import Image from 'next/image';
import Button from "@/components/button";
import { LocationInput } from "@/components/main-page/location-input";
import { SearchSelect } from "@/components/main-page/search-select";
import { Desk, FlagCustom, Goal, PeopleIcon } from "@/components/icons";

export const Hero = () => {

  return (
    <div className="w-full max-w-screen-xl flex gap-4 items-center pt-8">
      <div className="flex flex-col w-1/2 gap-4">
        <h1 className="flex w-full text-[2.5rem] font-semibold">
          Design Your
          <div
            className="relative pl-8"
          >
            <span className="relative">
              Workday
            </span>
            <Image
              className="absolute -z-10 -top-5 left-8 scale-125"
              src={"hero-graphic.svg"}
              alt="Hero Graphic Swirl -- WorkMosaic"
              width={243}
              height={200}
            />
          </div>
        </h1>

        <span className="text-lg w-full">
          Flexible spaces, focused energy, and everything you need to do your best work—your way.
        </span>

        <div className="flex flex-col pt-6 gap-4 max-w-[428px]">
          <LocationInput />
          <SearchSelect />
          <Button className="text-lg font-medium py-4">
            Search
          </Button>
        </div>
      </div>
      
      <div className="w-1/2 flex justify-start">
        <div className="w-fit grid grid-cols-2 gap-4">
          <HeroImage
            src="/images/focused-work.webp"
            alt="Lady focused work behind desktop monitor"
            text="Find your focus"
            labelClass="top-8 -right-20"
            icon={Goal}
          />

          <HeroImage
            src="/images/network.webp"
            alt="Networking illustration of 3 people meeting and shaking hands, smiling at one another."
            text="Grow your network"
            labelClass="bottom-10 -right-18"
            icon={PeopleIcon}
          />

          <HeroImage
            src="/images/workspace.jpg"
            alt="Modern office space with a clean, cozy couch."
            text="More than a desk"
            labelClass="top-10 -left-12"
            icon={Desk}
          />
          <HeroImage
            src="/images/work-with-purpose.jpg" alt="Productive team in a meeting at desk with laptops and whiteboard in background."
            text="Work with purpose"
            labelClass="bottom-11 -left-12"
            icon={FlagCustom}
          />
        </div>
      </div>
    </div>
  )
}

const HeroImage = ({ src, alt, text, labelClass, icon: Icon }: {
  src: string,
  alt: string,
  text: string,
  labelClass: string,
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) => {

  return (
    <div className="w-full relative h-full aspect-square flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className="w-full -z-10 relative h-full object-cover rounded-3xl"
      />

      <div className={`text-lg flex items-center gap-2 px-6 font-medium p-2 rounded-full absolute bg-primary-100 ${labelClass}`}>
        <Icon width={19} height={19} />
        <span>
          {text}
        </span>
      </div>
    </div>
  )
}
