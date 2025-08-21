"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "@/components/button";
import { headerElements } from "./header";
import Link from "next/link";

export const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <div className="lg:hidden flex">
      <button onClick={() => setOpen(true)}>
        <MenuIcon size={32} />
      </button>
      <div className={`${open ? "pointer-events-auto" : "pointer-events-none opacity-0"} transition-opacity flex flex-col p-6 fixed inset-0 bg-white z-50`}>
        <button onClick={() => setOpen(false)} className="self-end">
          <XIcon size={32} />
        </button>
        <div className="text-lg justify-between pb-12 pt-12 font-medium flex flex-col w-full gap-3 items-center h-full">
          <nav className="flex flex-col items-center gap-8 text-lg">
            {
              headerElements.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-700 hover:text-gray-900"
                >
                  {label}
                </Link>
              ))
            }
          </nav>

          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Button className="min-w-34 px-8 py-3 w-full" variant="outline">
              Log in
            </Button>
            <Button className="min-w-34 px-8 py-3 w-full">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
