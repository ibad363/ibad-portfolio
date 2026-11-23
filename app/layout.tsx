import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";

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
  metadataBase: new URL("https://www.itsibad.tech"),
  title: "Ibad Ur Rehman | Forward Deployed Engineer",
  description:
    "Forward Deployed Engineer building practical software, autonomous AI agentic workflows, and RAG systems that automate operations and solve business bottlenecks.",
  keywords: [
    "Ibad Ur Rehman",
    "Forward Deployed Engineer",
    "AI Developer",
    "OpenAI Agents SDK",
    "RAG",
    "Agentic Workflows",
    "FastAPI",
    "Next.js",
    "Full-Stack Developer",
    "Karachi Pakistan",
  ],
  authors: [{ name: "Ibad Ur Rehman", url: "https://www.itsibad.tech" }],
  creator: "Ibad Ur Rehman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.itsibad.tech",
    title: "Ibad Ur Rehman | Forward Deployed Engineer",
    description:
      "Building practical software & AI agents that automate real-world workflows.",
    siteName: "Ibad Ur Rehman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibad Ur Rehman | Forward Deployed Engineer",
    description:
      "Building practical software & AI agents that automate real-world workflows.",
    creator: "@ibad363",
  },
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
        suppressHydrationWarning
        className={`font-inter ${inter.variable} ${interBold.variable} antialiased`}
      >
        <Analytics />
        <Navbar />
        <div className="w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
