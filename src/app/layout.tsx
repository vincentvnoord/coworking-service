import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import LogoIcon from "@/components/icons/logo";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "WorkMosaic",
  description: "Design Your Workday",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
        <footer className="w-screen p-3 sm:p-6 pb-12 flex flex-col items-center border-t-2 border-primary-100">
          <div className="max-w-screen-xl w-full flex flex-col gap-4">
            <Link
              href={"/"}
              className="flex w-fit gap-2 items-center">
              <LogoIcon width={32} height={32} />
              <span className="font-bold">
                WorkMosaic
              </span>
            </Link>

            <div className="flex gap-4 items-center">
              <p className="w-full max-w-md text-gray-6">
                We provide flexible workspace solutions, private offices, and a vibrant community for professionals and businesses to connect, collaborate, and grow.
              </p>

              <div className="w-full flex gap-4 justify-end">
                <input
                  className="p-2 px-4 text-lg bg-gray-2 rounded-full min-w-96"
                  placeholder="Enter your email"
                  type="text"
                />
                <Button className="min-w-34 px-8 py-3">
                  Sign up for newsletter
                </Button>
              </div>

            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}
