import Button from "@/components/button";
import LogoIcon from "@/components/icons/logo";
import Link from "next/link";
import { MobileHeader } from "./mobile-header";

export const headerElements = [
  { href: "/locations", label: "Locations" },
  { href: "/community", label: "Community" },
  { href: "/contacts", label: "Contacts" },
]

export const Header = () => {

  return (
    <header className="flex min-h-18 items-center lg:pt-8 justify-between w-full max-w-screen-xl">
      <div className="flex items-center gap-8">
        <Link
          href={"/"}
          className="text-primary-400 flex gap-2 items-center">
          <LogoIcon width={32} height={32} />
          <span className="font-bold text-xl">
            WorkMosaic
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-8 space-x-4 p-6 text-lg">
          {
            headerElements.map((element) => (
              <Link
                key={element.href}
                href={element.href}
                className="text-gray-700 hover:text-gray-900"
              >
                {element.label}
              </Link>
            ))
          }
        </nav>
      </div>

      <div className="hidden text-lg font-medium lg:flex gap-3 items-center h-full">
        <Button className="min-w-34 px-8 py-3" variant="outline">
          Log in
        </Button>
        <Button className="min-w-34 px-8 py-3">
          Sign up
        </Button>
      </div>

      <MobileHeader />
    </header>
  )
}
