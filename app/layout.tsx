import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Alex's Portfolio",
  description: "Portfolio for Alex Appleget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#20242d] px-6 md:px-20">
        {children}
        <Footer />
      </body>
    </html>
  );
}
