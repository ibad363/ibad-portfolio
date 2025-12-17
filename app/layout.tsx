import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next"

const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

const interBold = localFont({
  src: "./fonts/Inter_Bold.ttf",
  variable: "--font-inter-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ibad Ur Rehman",
  description: "Ibad Ur Rehman Portfolio",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-inter ${inter.variable} ${interBold.variable} antialiased bg-[#1E201E]`}
      >
        <Analytics/>
        <Navbar />
        <div className="mx-auto max-w-[110rem]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
