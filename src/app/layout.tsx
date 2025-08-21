import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/main-page/footer";

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
        <Footer />
      </body>
    </html>
  );
}
