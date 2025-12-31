"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4">
      <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-full px-4 py-2 md:px-6 md:py-3 shadow-sm flex items-center gap-2 md:gap-6 max-w-full">
        {["Home", "About", "Resume", "Contact"].map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[10px] md:text-sm font-semibold text-slate-600 hover:text-violet-600 transition-colors uppercase tracking-wide"
          >
            {link}
          </Link>
        ))}
         <a
          href="#contact"
          className="bg-violet-600 text-white px-3 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-sm font-bold shadow-md hover:bg-violet-700 transition-all whitespace-nowrap"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
