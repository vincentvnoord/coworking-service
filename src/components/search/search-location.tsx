"use client";

import { LocationInput } from "@/components/location-input";
import Button from "@/components/button";
import { useSearchParams } from "next/navigation";

export const SearchLocation = () => {
  const searchParams = useSearchParams()
  const location = searchParams.get("location") || ""

  const handleLocationChange = (newLocation: string) => {
    // Push to new URL with updated location
    const params = new URLSearchParams(window.location.search);
    if (newLocation.length > 0) {
      params.set("location", newLocation);
    } else {
      params.delete("location");
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }

  return (
    <div className="flex gap-2">
      <LocationInput location={location} onChangeAction={handleLocationChange} />
      <Button className="font-bold">
        Search
      </Button>
      <Button variant="secondary" className="text-nowrap">
        Show on Map
      </Button>
    </div>
  )
}
