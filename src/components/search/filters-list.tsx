"use client";

import { XIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

export const SearchFiltersList = () => {
  const searchParams = useSearchParams();
  searchParams.entries();

  return (
    <div className="w-full flex gap-4">
      {Array.from(searchParams.entries()).map(([param, value]) => (
        <SearchFilterItem key={param} param={param} value={value} />
      ))}

      <button className="text-gray-6 font-semibold">
        Clear filters
      </button>
    </div>
  )
}

const SearchFilterItem = ({ param, value }: { param: string, value: string }) => {

  if (param === "location") {
    return null;
  }

  const handleRemove = () => {
    // Remove param from the url
    const url = new URL(window.location.href);
    url.searchParams.delete(param);
    window.history.replaceState({}, '', url.toString());
  }

  return (
    <div className="p-2 px-4 rounded-full gap-2 flex items-center border border-foreground">
      <span>{value}</span>
      <button onClick={handleRemove}>
        <XIcon className="text-gray-6" size={18} />
      </button>
    </div>
  )
}
