"use client";

import { motion } from "framer-motion";

type PricingPlanData = {
  popularChoice?: boolean;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  price: number;
  pricePeriod: string;
  perks: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; text: string }[];
  onClick: () => void;
  isSelected: boolean;
};

export const PricingPlan = (props: PricingPlanData) => {
  const {
    icon: Icon,
    popularChoice = false,
    title,
    price,
    pricePeriod,
    description,
    perks,
    onClick,
    isSelected,
  } = props;

  return (
    <div
      onClick={onClick}
      className={`relative w-full flex flex-col flex-grow gap-4 cursor-pointer ${
        popularChoice ? "pt-12" : ""
      } border ${
        isSelected
          ? "border-primary-400 border-3"
          : "border-gray-4"
      } rounded-3xl p-6`}
    >
      {popularChoice && (
        <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 origin-center bg-background font-semibold border-2 border-primary-200 p-2 px-4 text-base rounded-full">
          Popular Choice
        </div>
      )}

      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 p-6 bg-primary-100 rounded-full flex items-center justify-center">
          <Icon strokeWidth={1.5} className="w-full h-full" />
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-3xl font-semibold">€{price}</span>
        <span className="text-gray-6">{pricePeriod}</span>
      </div>

      <p className="text-gray-7">{description}</p>

      <span className="font-bold">What&apos;s included:</span>

      <ul className="flex flex-col flex-grow gap-2 text-gray-7">
        {perks.map(({ icon: Icon, text }, index) => (
          <li key={index} className="flex gap-2">
            <Icon className="w-6 h-6" />
            <span className="w-full">{text}</span>
          </li>
        ))}
      </ul>

      <button
        className={`${
          isSelected ? "bg-primary-200" : ""
        } w-full border-2 font-medium border-primary-200 rounded-full p-3 mt-auto`}
      >
        Get Started
      </button>
    </div>
  );
};