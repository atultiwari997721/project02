import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Raghvendra Bhati | Data Science Portfolio",
  description: "Portfolio of Raghvendra Bhati, Data Science Student and Social Media Manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} font-sans antialiased bg-[#E6EBF4] text-slate-800`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
