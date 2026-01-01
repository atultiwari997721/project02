"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed bottom-4 md:bottom-auto md:top-6 inset-x-0 z-50 flex justify-center px-1 pointer-events-none">
      <div className="pointer-events-auto rounded-full px-4 py-2 md:px-6 md:py-3 shadow-2xl shadow-violet-900/10 flex items-center justify-between gap-2 md:gap-6 max-w-[95vw] md:max-w-max bg-white/90 dark:bg-[#121212]/90 border border-slate-200 dark:border-white/10 backdrop-blur-xl transition-colors duration-300">
        <div className="flex items-center gap-1 md:gap-6">
            {["Home", "About", "Resume", "Contact"].map((link) => (
            <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors uppercase tracking-tight whitespace-nowrap px-2 py-1 md:px-0"
            >
                {link}
            </Link>
            ))}
        </div>
        
        <div className="flex items-center gap-2 md:gap-4 ml-1">
             <a
            href="#contact"
            className="bg-violet-600 text-white px-4 py-2 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg shadow-violet-600/20 hover:bg-violet-700 transition-all whitespace-nowrap"
            >
            Let's Talk
            </a>
            <div className="w-[1px] h-4 bg-slate-300 dark:bg-white/20 mx-1"></div>
            <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
