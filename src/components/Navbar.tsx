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
    <nav className="fixed top-6 inset-x-0 z-50 flex justify-center">
      <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-full px-6 py-3 shadow-sm flex items-center gap-6">
        {["Home", "About", "Resume", "Contact"].map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm font-semibold text-slate-600 hover:text-violet-600 transition-colors uppercase tracking-wide"
          >
            {link}
          </Link>
        ))}
         <a
          href="#contact"
          className="bg-violet-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:bg-violet-700 transition-all"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
