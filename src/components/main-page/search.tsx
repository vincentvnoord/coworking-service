"use client"

import Button from "@/components/button";
import { LocationInput } from "@/components/location-input";
import { SearchSelect } from "@/components/main-page/search-select";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const MainPageSearch = () => {
  const router = useRouter();

  const [location, setLocation] = useState("");
  const [workspace, setWorkspace] = useState<string | undefined>(undefined);

  const handleClick = () => {
    const url = new URL(`/search`, window.location.origin);
    if (location.length > 0) {
      url.searchParams.set("location", location);
    }

    if (workspace) {
      url.searchParams.set("workspace", workspace);
    }

    router.push(url.toString());
  }

  return (
    <div className="flex flex-col pt-6 gap-4 max-w-[428px]">
      <LocationInput location={location} onChangeAction={setLocation} />
      <SearchSelect value={workspace} valueChangeAction={setWorkspace} />
      <Button onClick={handleClick} className="text-lg font-medium py-4">
        Search
      </Button>
    </div>
  )
}
