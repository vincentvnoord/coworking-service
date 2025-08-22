import { SearchFiltersList } from "@/components/search/filters-list";
import { SearchLocation } from "@/components/search/search-location";

export default function Search() {
  return (
    <main className="min-h-screen w-full max-w-screen-xl flex pt-12">
      <div className="w-[392px]">
        <p className="text-2xl font-bold p-2">Filters</p>
      </div>

      <div className="flex-grow flex flex-col gap-4">
        <SearchLocation />
        <SearchFiltersList />
      </div>

    </main>
  )
}
