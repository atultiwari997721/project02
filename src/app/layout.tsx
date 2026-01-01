import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

import { Providers } from "@/components/Providers";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${syne.variable} font-sans antialiased bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-200 selection:bg-violet-500/30 selection:text-violet-900 dark:selection:text-violet-200 overflow-x-hidden transition-colors duration-300`}
      >
        <Providers>
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
