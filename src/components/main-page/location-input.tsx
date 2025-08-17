import { MapPin } from "lucide-react"

export const LocationInput = () => {

  return (
    <div
      className="relative w-full"
    >
      <input
        className={`placeholder:text-gray-6 gap-3 items-center pl-12 text-lg w-full px-5 p-4 bg-gray-2 flex justify-start rounded-full focus:outline-primary-200 focus:outline-2`}
        placeholder="Enter location"
      />


      <MapPin className="text-gray-6 absolute top-2/7 origin-center left-4" />
    </div>
  )
}
