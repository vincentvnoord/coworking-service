"use client";

import { workspaces } from "@/config/filters";
import { XIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

export const SearchFiltersList = () => {
  const searchParams = useSearchParams();
  searchParams.entries();
  const paramsArray = Array.from(searchParams.entries());

  return (
    <div className="w-full flex gap-4">
      {paramsArray.map(([param, value]) => (
        <SearchFilterItem key={param} param={param} value={value} />
      ))}

      {
        paramsArray.length > 0 &&
        <button onClick={() => {
          const url = new URL(window.location.href);
          url.search = '';
          window.history.replaceState({}, '', url.toString());
        }}
          className="text-gray-6 font-semibold"
        >
          Clear filters
        </button>
      }
    </div>
  )
}

const SearchFilterItem = ({ param, value }: { param: string, value: string }) => {
  let label = value;

  if (param === "location") {
    return null;
  }

  if (param === "workspace") {
    label = workspaces[value].label;
  }

  const handleRemove = () => {
    // Remove param from the url
    const url = new URL(window.location.href);
    url.searchParams.delete(param);
    window.history.replaceState({}, '', url.toString());
  }

  return (
    <div className="p-2 px-4 rounded-full gap-2 flex items-center border border-foreground">
      <span>{label}</span>
      <button onClick={handleRemove}>
        <XIcon className="text-gray-6" size={18} />
      </button>
    </div>
  )
}
