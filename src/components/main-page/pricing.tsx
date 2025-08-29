"use client";

import { Clock3, Wifi } from "lucide-react";
import {
  NetworkCustom,
  TagIcon,
  CoffeeCustom,
  HotDesk,
  InfinityGap,
  OfficeChair,
  Cutlery,
  Desk,
  IdIcon,
  Card,
  PeopleIcon,
  Info,
  PersonCheck,
  Suitcase,
  MagicSparks,
} from "@/components/icons";
import { PricingPlan } from "./pricing-plan";
import { useState } from "react";
import { motion } from "framer-motion";

const plans = {
  "Coworking Space": [
    {
      icon: Clock3,
      title: "Hot Desk",
      price: 5,
      pricePeriod: "per hour",
      description:
        "Best for travelers, consultants meeting with clients, or individuals who need a quiet space for a few hours of focused work.",
      perks: [
        {
          icon: InfinityGap,
          text: "Access to shared co-working area or desk for the booked time",
        },
        { icon: Wifi, text: "High-speed W-Fi" },
        {
          icon: CoffeeCustom,
          text: "Basic amenities like coffee, tea, and water",
        },
      ],
    },
    {
      icon: HotDesk,
      popularChoice: true,
      title: "Day Pass Desk",
      price: 45,
      pricePeriod: "per day",
      description:
        "Best for remote workers, hybrid employees, or anyone needing a temporary professional setting.",
      perks: [
        {
          icon: OfficeChair,
          text: "Full-day access to a hot desk in the shared workspace",
        },
        { icon: Wifi, text: "High-speed Wi-Fi and power outlets" },
        {
          icon: Cutlery,
          text: "Access to communal areas, including a fully-stocked kitchen",
        },
        {
          icon: NetworkCustom,
          text: "Opportunity to network with other professionals",
        },
        {
          icon: CoffeeCustom,
          text: "Complimentary coffee, tea, and often snacks",
        },
      ],
    },
    {
      icon: Desk,
      title: "Dedicated Desk",
      price: 200,
      pricePeriod: "per month",
      description:
        "Best for individuals or small teams on short-term projects, freelancers visiting a new city, or people needing a professional base for an extended period.",
      perks: [
        {
          icon: IdIcon,
          text: "Full-time access to a hot desk in the shared workspace",
        },
        {
          icon: Card,
          text: "Access to communal areas, phone booths for private calls, and lounges",
        },
        {
          icon: PeopleIcon,
          text: "Access to the community and networking events",
        },
        {
          icon: TagIcon,
          text: "Discounts on booking private meeting rooms",
        },
      ],
    },
  ],
  "Private Office": [
    {
      icon: PersonCheck,
      title: "Solo Haven",
      price: 500,
      pricePeriod: "per month",
      description:
        "A private, lockable office for one, perfect for focused work and client calls.",
      perks: [
        { icon: IdIcon, text: "24/7 Access" },
        { icon: Card, text: "Mail & Package Handling" },
        { icon: TagIcon, text: "Printing Credits" },
        { icon: NetworkCustom, text: "Meeting Room Credits" },
      ],
    },
    {
      icon: PeopleIcon,
      popularChoice: true,
      title: "Team Hub",
      price: 1200,
      pricePeriod: "per month",
      description:
        "A fully-furnished office for your team to collaborate and grow.",
      perks: [
        { icon: IdIcon, text: "Everything in Solo Haven" },
        { icon: Card, text: "Company Logo Display" },
        {
          icon: NetworkCustom,
          text: "Increased Meeting Room Credits",
        },
      ],
    },
    {
      icon: Suitcase,
      title: "Enterprise Suite",
      price: 2500,
      pricePeriod: "per month",
      description: "A spacious, customizable office for established businesses.",
      perks: [
        { icon: IdIcon, text: "Everything in Team Hub" },
        { icon: Wifi, text: "Dedicated High-Speed Internet" },
        { icon: MagicSparks, text: "Custom Branding Options" },
      ],
    },
  ],
  "Meeting Room": [
    {
      icon: PeopleIcon,
      title: "Huddle Room",
      price: 25,
      pricePeriod: "per hour",
      description:
        "Ideal for quick catch-ups, interviews, or one-on-one meetings.",
      perks: [
        { icon: Wifi, text: "High-speed Wi-Fi" },
        { icon: CoffeeCustom, text: "Coffee & Water" },
        { icon: Desk, text: "Whiteboard & Markers" },
      ],
    },
    {
      icon: NetworkCustom,
      popularChoice: true,
      title: "Boardroom",
      price: 75,
      pricePeriod: "per hour",
      description:
        "A professional setting for board meetings, presentations, and workshops.",
      perks: [
        { icon: PeopleIcon, text: "Everything in Huddle Room" },
        { icon: Desk, text: "Large screen with HDMI" },
        {
          icon: NetworkCustom,
          text: "Video Conferencing Equipment",
        },
      ],
    },
    {
      icon: MagicSparks,
      title: "Event Space",
      price: 200,
      pricePeriod: "per hour",
      description:
        "A flexible space for seminars, networking events, and product launches.",
      perks: [
        { icon: Desk, text: "Projector & Screen" },
        { icon: PeopleIcon, text: "Microphone & Sound System" },
        { icon: Cutlery, text: "Catering Options Available" },
      ],
    },
  ],
};

export const PricingSection = () => {
  const [activePlan, setActivePlan] = useState<keyof typeof plans>(
    "Coworking Space"
  );
  const [selectedPlan, setSelectedPlan] = useState<string>("Day Pass Desk");

  return (
    <div className="w-full text-base md:text-lg pt-32 max-w-screen-xl flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">Pricing Plans</h2>
        <div className="hidden md:flex items-center w-fit gap-2 bg-[#F0F2F4] rounded-full p-2">
          {Object.keys(plans).map((plan) => (
            <PlanOption
              key={plan}
              option={plan}
              selected={activePlan === plan}
              setSelected={setActivePlan}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:gap-4 lg:flex-row">
        {plans[activePlan].map((plan, index) => (
          <PricingPlan
            key={index}
            {...plan}
            isSelected={selectedPlan === plan.title}
            onClick={() => setSelectedPlan(plan.title)}
          />
        ))}
      </div>

      <div className="flex gap-2 items-center pt-3">
        <Info
          width={24}
          height={24}
          className="text-information flex-shrink-0"
        />
        <span className="text-sm text-gray-6">
          All plans include access to our vibrant community, exclusive member
          events, and shared kitchen facilities
        </span>
      </div>
    </div>
  );
};

const PlanOption = ({
  option,
  selected,
  setSelected,
}: {
  option: string;
  selected: boolean;
  setSelected: (option: keyof typeof plans) => void;
}) => {
  return (
    <button
      onClick={() => setSelected(option as keyof typeof plans)}
      className={`p-2 px-4 rounded-full relative`}
    >
      <span
        className="relative z-10"
        style={{ color: selected ? "black" : "inherit" }}
      >
        {option}
      </span>
      {selected && (
        <motion.div
          layoutId="plan-option-background"
          className="absolute inset-0 bg-[#D2D2FE] rounded-full"
        />
      )}
    </button>
  );
};