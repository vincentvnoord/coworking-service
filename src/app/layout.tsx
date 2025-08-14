import type { Metadata } from "next";
import "./globals.css";

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
      </body>
    </html>
  );
}
