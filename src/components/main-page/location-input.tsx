"use client";

import { fetchLocationSuggestions } from "@/actions/auto-complete-locations";
import debounce from "@/lib/debounce";
import { MapPin } from "lucide-react"
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useMemo, useState } from "react";

export const LocationInput = () => {
  const [sessionToken, setSessionToken] = useState<string | null>(crypto.randomUUID());
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(true);
  const [suggested, setSuggested] = useState<string[]>([]);

  const handleSearch = useCallback(async (query: string) => {
    if (!sessionToken) {
      setSessionToken(crypto.randomUUID());
    }

    const res = await fetchLocationSuggestions(query, sessionToken || crypto.randomUUID());
    setSuggested(res);
  }, [sessionToken]);

  const debouncedPlaceQuery = useMemo(
    () => debounce(handleSearch, 300),
    [handleSearch]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 0) {
      if (location.length === 0) {
        setSessionToken(crypto.randomUUID());
      }

      debouncedPlaceQuery(value);
    } else {
      // If input is cleared, reset session token
      setSessionToken(null);
    }

    setLocation(value);
  }

  const setSelectedLocation = (loc: string) => {
    setLocation(loc);
    setOpen(false);
  }

  return (
    <div
      className="relative w-full"
    >
      <input
        value={location}
        onChange={handleChange}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className={`placeholder:text-gray-6 gap-3 items-center pl-12 text-lg w-full px-5 p-4 bg-gray-2 flex justify-start rounded-full focus:outline-primary-200 focus:outline-2`}
        placeholder="Enter location"
      />

      <MapPin className="text-gray-6 absolute top-2/7 origin-center left-4" />

      <AnimatePresence>
        {
          open && suggested.length > 0 &&
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "backInOut" }}
            className="absolute overflow-y-auto max-h-96 w-full flex mt-2 border border-gray-3 shadow-sm flex-col bg-gray-2 p-1 rounded-4xl"
          >
            {
              suggested.length > 0 ? (
                suggested.map((option, index) => (
                  <OptionElement
                    key={option}
                    option={option}
                    isLast={index === suggested.length - 1}
                    isFirst={index === 0}
                    singleItem={suggested.length === 1}
                    setLocation={setSelectedLocation}
                  />
                ))
              ) : (
                <div className="p-4 text-gray-6 text-sm">No suggestions available</div>
              )
            }
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

const OptionElement = ({ option, isLast, isFirst, singleItem, setLocation }: { option: string, isLast: boolean, isFirst: boolean, singleItem: boolean, setLocation: (loc: string) => void }) => {
  let borderRadius = isFirst ? "rounded-t-4xl" : (isLast && "rounded rounded-b-4xl");
  if (singleItem) {
    borderRadius = "rounded-3xl";
  } else {
    borderRadius += " rounded";
  }

  return (
    <button onClick={() => setLocation(option)} role="listitem" key={option} className={`p-3 transition-colors duration-50 ease-in flex items-center gap-3 w-full data-[highlighted]:outline-none hover:bg-gray-3 px-4 cursor-pointer outline-none ${borderRadius}`}>
      <div className="flex flex-col">
        <span className="text-gray-7">{option}</span>
      </div>
    </button>
  )
}
