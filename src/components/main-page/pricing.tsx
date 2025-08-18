


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
    </div>
  )
}

const PlanOption = ({ option, selected }: { option: string, selected: boolean }) => {


  return (
    <button className={`p-2 px-4 ${selected && "bg-primary-200"} rounded-full`}>
      {option}
    </button>
  )
}
