import Link from "next/link";
import LogoIcon from "@/components/icons/logo";
import Button from "@/components/button";
import { Copyright, Facebook, Instagram, LinkedIn, Youtube } from "@/components/icons";

export default function Footer() {

  return (
    <footer className="w-screen mt-32 p-3 sm:p-6 pb-12 flex flex-col items-center border-t-2 border-primary-100">
      <div className="max-w-screen-xl w-full flex flex-col gap-4">
        <Link
          href={"/"}
          className="flex w-fit gap-2 items-center">
          <LogoIcon width={32} height={32} />
          <span className="font-bold">
            WorkMosaic
          </span>
        </Link>

        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <p className="w-full max-w-md text-gray-6">
            We provide flexible workspace solutions, private offices, and a vibrant community for professionals and businesses to connect, collaborate, and grow.
          </p>

          <div className="w-full flex flex-col xl:flex-row gap-4 justify-end">
            <input
              className="p-2 px-4 text-lg bg-gray-2 rounded-full md:min-w-96"
              placeholder="Enter your email"
              type="text"
            />
            <Button className="min-w-34 px-8 py-3">
              Sign up for newsletter
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl pt-16 flex flex-col md:flex-row gap-4">
        <div className="flex md:flex-row w-full justify-center">
          <div className="flex text-gray-7 min-w-48 flex-col gap-4">
            <h4 className="font-bold text-foreground">Explore</h4>
            <Link href={"/about-us"}>About Us</Link>
            <Link href={"/pricing"}>Plans & Pricing</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/events"}>Events</Link>
            <Link href={"/faq"}>FAQ</Link>
          </div>

          <div className="flex flex-grow text-gray-7 flex-col gap-4">
            <h4 className="font-bold text-foreground">Legal</h4>
            <Link className="w-fit" href={"/terms-of-service"}>Terms of Service</Link>
            <Link className="w-fit" href={"/privacy"}>Privacy Policy</Link>
            <Link className="w-fit" href={"/accessibility"}>Accessibility</Link>
          </div>
        </div>

        <div className="flex text-gray-7 flex-col gap-4">
          <h4 className="font-bold text-foreground">Connect</h4>
          <div className="flex gap-2 text-foreground">
            <Instagram />
            <LinkedIn />
            <Facebook />
            <Youtube />
          </div>
          <p>
            123 Main Street, Suite 400, Anytown, ST 12345
          </p>
          <p>
            +1 (555) 123-4567 | info@workmosaic.com
          </p>
        </div>
      </div>

      <div className="pt-16 flex justify-center items-center gap-2 text-gray-6">
        <Copyright
          width={16}
          height={16}
        />

        <p>
          2025 WorkMosaic. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
