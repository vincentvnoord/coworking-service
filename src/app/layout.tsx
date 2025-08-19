import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import LogoIcon from "@/components/icons/logo";

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
        <footer>
          <Link
            href={"/"}
            className="text-primary-400 flex gap-2 items-center">
            <LogoIcon width={32} height={32} />
            <span className="font-bold text-xl">
              WorkMosaic
            </span>
          </Link>
        </footer>
      </body>
    </html>
  );
}
