import { Clock3, Wifi } from "lucide-react";
import { NetworkCustom, TagIcon, CoffeeCustom, HotDesk, InfinityGap, OfficeChair, Cutlery, Desk, IdIcon, Card, PeopleIcon } from "@/components/icons";
import { PricingPlan } from "./pricing-plan";

export const PricingSection = () => {
  return (
    <div className="w-full text-base md:text-lg  pt-32 max-w-screen-xl flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Pricing Plans</h2>
        <div className="flex items-center gap-2 bg-gray-1 rounded-full p-2">
          <PlanOption option="Coworking Space" selected={true} />
          <PlanOption option="Private Office" selected={false} />
          <PlanOption option="Meeting Room" selected={false} />
        </div>
      </div>

      <div className="flex gap-4">
        <PricingPlan
          icon={Clock3}
          title="Hot Desk"
          price={5}
          pricePeriod="per hour"
          description="Best for travelers, consultants meeting with clients, or individuals who need a quiet space for a few hours of focused work."
          perks={[
            { icon: InfinityGap, text: "Access to shared co-working area or desk for the booked time" },
            { icon: Wifi, text: "High-speed W-Fi" },
            { icon: CoffeeCustom, text: "Basic amenities like coffee, tea, and water" },
          ]}
        />
        <PricingPlan
          icon={HotDesk}
          popularChoice
          title="Day Pass Desk"
          price={45}
          pricePeriod="per day"
          description="Best for remote workers, hybrid employees, or anyone needing a temporary professional setting."
          perks={[
            { icon: OfficeChair, text: "Full-day access to a hot desk in the shared workspace" },
            { icon: Wifi, text: "High-speed Wi-Fi and power outlets" },
            { icon: Cutlery, text: "Access to communal areas, including a fully-stocked kitchen" },
            { icon: NetworkCustom, text: "Opportunity to network with other professionals" },
            { icon: CoffeeCustom, text: "Complimentary coffee, tea, and often snacks" },
          ]}
        />
        <PricingPlan
          icon={Desk}
          title="Dedicated Desk"
          price={200}
          pricePeriod="per month"
          description="Best for individuals or small teams on short-term projects, freelancers visiting a new city, or people needing a professional base for an extended period."
          perks={[
            { icon: IdIcon, text: "Full-time access to a hot desk in the shared workspace" },
            { icon: Card, text: "Access to communal areas, phone booths for private calls, and lounges" },
            { icon: PeopleIcon, text: "Access to the community and networking events" },
            { icon: TagIcon, text: "Discounts on booking private meeting rooms" },
          ]}
        />
      </div>
    </div>
  );
};

const PlanOption = ({
  option,
  selected,
}: {
  option: string;
  selected: boolean;
}) => {
  return (
    <button className={`p-2 px-4 ${selected && "bg-primary-200"} rounded-full`}>
      {option}
    </button>
  );
};
;
