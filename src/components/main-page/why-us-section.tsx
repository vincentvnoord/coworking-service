import { ArrowCircle, MagicSparks, PeopleIcon, PersonCheck, UnmatchedFlexibility, UpchartArrow } from "../icons"

const cards = [
  {
    title: "Curated Community",
    description: "Our name is our philosophy. We actively cultivate a diverse community through networking events and workshops, helping you find your next collaborator or mentor.",
    icon: PeopleIcon
  },
  {
    title: "Your Workspace, Your Way",
    description: "We offer a variety of environments to suit your needs throughout the day. Need to focus? Head to a quiet zone. Time for a brainstorming session? Our collaborative areas are ready for you.",
    icon: MagicSparks
  },
  {
    title: "Designed for Your Success",
    description: "Every detail, from our ergonomic furniture to our blazing-fast Wi-Fi, is crafted to boost your productivity. We've removed the distractions so you can focus on your work.",
    icon: PersonCheck
  },
  {
    title: "Unmatched Flexibility",
    description: "Your work life shouldn't be constrained by rigid contracts. With our flexible membership options, you can scale your workspace to fit your needs, whether you're a freelancer needing a daily pass or a growing team.",
    icon: UnmatchedFlexibility
  },
  {
    title: "All-Inclusive Simplicity",
    description: "We believe in transparent pricing and hassle-free service. Your membership includes all the essentials—coffee, mail handling, and 24/7 access—with no hidden fees or surprise charges.",
    icon: ArrowCircle
  },
  {
    title: "A Launchpad for Growth",
    description: "WorkMosaic is a place where ideas take shape and careers flourish. Our environment provides the resources and connections you need to scale your business and turn your ambitions into reality.",
    icon: UpchartArrow
  },
]


export const WhyUsSection = () => {

  return (
    <div className="w-full text-base md:text-lg  pt-32 max-w-screen-xl flex flex-col gap-8">
      <h3 className="text-2xl sm:text-3xl font-semibold">The WorkMosaic Way</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  )
}

const Card = ({ isEven, title, description, icon: Icon }: { title: string, description: string, icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, isEven: boolean }) => {

  return (
    <div className={`w-full rounded-3xl p-6 flex flex-col gap-4 ${isEven ? "bg-primary-100" : "bg-primary-400 text-background"}`}>
      <Icon className="w-10 h-10 text-primary-500" />
      <h4 className="text-xl sm:text-2xl font-semibold">{title}</h4>
      <p className="xl:text-xl">{description}</p>
    </div>
  )
}
