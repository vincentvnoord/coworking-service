import Button from "@/components/button";
import LogoIcon from "@/components/icons/logo";
import Link from "next/link";

export const Header = () => {

  return (
    <header className="flex items-center pt-8 justify-between w-full max-w-screen-xl">
      <div className="flex items-center gap-8">
        <Link
          href={"/"}
          className="text-primary-400 flex gap-2 items-center">
          <LogoIcon width={32} height={32} />
          <span className="font-bold text-xl">
            WorkMosaic
          </span>
        </Link>
        <nav className="flex items-center gap-8 space-x-4 p-6 text-lg">
          <Link href="/locations" className="text-gray-700 hover:text-gray-900">Locations</Link>
          <Link href="/community" className="text-gray-700 hover:text-gray-900">Community</Link>
          <Link href="/contacts" className="text-gray-700 hover:text-gray-900">Contacts</Link>
        </nav>
      </div>

      <div className="text-lg font-medium flex gap-3 items-center h-full">
        <Button className="min-w-34 px-8 py-3" variant="outline">
          Log in
        </Button>
        <Button className="min-w-34 px-8 py-3">
          Sign up
        </Button>
      </div>
    </header>
  )
}
