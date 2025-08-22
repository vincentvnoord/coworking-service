import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/main-page/footer";
import { Header } from "@/components/main-page/header";

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
        className={`antialiased w-screen flex flex-col items-center`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
