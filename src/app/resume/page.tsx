"use client";

import { Download } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0d] py-10 px-4 md:px-8 flex justify-center">
      <div className="max-w-[800px] w-full bg-white text-slate-900 shadow-2xl p-8 md:p-12 rounded-sm relative">
        
        {/* Print/Download Button (Floating) */}
        <div className="absolute top-4 right-4 print:hidden flex gap-2">
            <Link href="/" className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-md font-bold text-sm transition-colors">
                Back to Home
            </Link>
            <button 
                onClick={() => window.print()} 
                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-bold text-sm flex items-center gap-2 transition-colors"
            >
                <Download size={16} /> Save as PDF
            </button>
        </div>

        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-6 mb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4 font-syne">Raghvendra Bhati</h1>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600 justify-center md:justify-start">
            <a href="mailto:raghuthakur0217@gmail.com" className="hover:text-violet-600 transition-colors">raghuthakur0217@gmail.com</a>
            <span>|</span>
            <span>+91 78280 59933</span>
            <span>|</span>
            <span>Indore, MP India</span>
          </div>
        </header>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase tracking-widest border-b border-slate-300 pb-2 mb-4 text-violet-700">Education</h2>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg">Institute Of Engineering & Science, IPS Academy, Indore</h3>
            <span className="font-bold text-slate-500 text-sm whitespace-nowrap">NOV’23 – APR’27</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold italic">Bachelor of Technology – CSE - Data Science</p>
            <span className="font-bold bg-slate-100 px-2 py-1 rounded text-xs">CGPA: 7.6/10</span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <span className="font-bold">Relevant Coursework:</span> Data Structure & Algorithm, Database Management System, Computer Networks, Operating System, Computer Organization & Architecture
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase tracking-widest border-b border-slate-300 pb-2 mb-4 text-violet-700">Skills And Technologies</h2>
          <ul className="space-y-2 text-sm text-slate-800">
            <li><span className="font-bold w-48 inline-block">Programming Languages:</span> C, C++, Python</li>
            <li><span className="font-bold w-48 inline-block">Frameworks & Libraries:</span> HTML, CSS, JavaScript, Scikit-learn, OpenCV, Pandas, NumPy, TensorFlow.js</li>
            <li><span className="font-bold w-48 inline-block">Developer Tools:</span> Notion Databases, Figma, GitHub, AWS, Google Cloud, VS Code, Azure, Power BI</li>
          </ul>
        </section>

        {/* Achievements */}
        <section className="mb-8">
          <h2 className="text-xl font-bold uppercase tracking-widest border-b border-slate-300 pb-2 mb-4 text-violet-700">Achievements & Certifications</h2>
          <ul className="list-disc list-outside ml-5 space-y-3 text-sm text-slate-700">
            <li>
              <span className="font-bold text-slate-900">Advanced Python: Language Features</span> – Successfully achieved a LinkedIn Certification in Advanced Python on the first attempt.
            </li>
            <li>
              <span className="font-bold text-slate-900">AWS Training & Certification</span> – Within the top 2% global users to be a certified Prompt engineering through AWS practices.
            </li>
            <li>
              <span className="font-bold text-slate-900">Amazon Web Services</span> – Accomplished the certificate for AWS Academy Cloud Foundations under AWS Academy Graduate.
            </li>
            <li>
              <span className="font-bold text-slate-900">Google Cloud Fundamentals</span> – Under top 15% Google Cloud enthusiasts who accomplished Google Cloud Fundamentals: Core Infrastructure from LinkedIn & Coursera.
            </li>
          </ul>
        </section>

         {/* Special Achievements */}
         <section>
          <h2 className="text-xl font-bold uppercase tracking-widest border-b border-slate-300 pb-2 mb-4 text-violet-700">Special Achievements</h2>
          <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-slate-700">
            <li><span className="font-bold text-slate-900">Campus Ambassador</span> - Ecell, IIT BOMBAY</li>
            <li><span className="font-bold text-slate-900">Campus Ambassador</span> - eDC, IIT DELHI</li>
            <li><span className="font-bold text-slate-900">Finalist</span> - NEC`24 and NEC`25</li>
            <li><span className="font-bold text-slate-900">Team Lead</span> - NetryX IPSA, Entrepreneurship Cell IPSA</li>
          </ul>
        </section>

      </div>
       <style jsx global>{`
        @media print {
          @page { margin: 0; }
          body { background: white; }
          .min-h-screen { padding: 0; }
          .shadow-2xl { shadow: none; box-shadow: none; }
          .print\\:hidden { display: none; }
        }
      `}</style>
    </div>
  );
}
