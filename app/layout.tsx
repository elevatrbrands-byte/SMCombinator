import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "D Pitch",
  description: "D Pitch guides DFW high-schoolers from zero to investible—then puts ideas on a real stage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gradient-to-br from-offwhite via-white to-offwhite text-ink">
        <Navbar />
        <main className="pt-24 pb-20 space-y-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
