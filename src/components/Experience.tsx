"use client";

import { motion } from "framer-motion";

import PopIn from "@/components/anim/PopIn";

const education = [
    {
        id: 1,
        date: "2021 - 2025",
        title: "Bachelors Of Technology",
        institution: "Computer Science & Engineering at IPS Academy, Indore",
        description: "Pursuing B.Tech with a focus on Data Science and AI. Active member of E-Cell and various technical clubs.",
        color: "bg-violet-500",
    },
    {
        id: 2,
        date: "2020 - 2021",
        title: "Class 12th",
        institution: "MP Board",
        description: "Completed Higher Secondary Education with a focus on Physics, Chemistry, and Mathematics.",
        color: "bg-blue-500",
    },
     {
        id: 3,
        date: "2018 - 2019",
        title: "Class 10th",
        institution: "MP Board",
        description: "Completed Secondary School Education with excellent academic performance.",
        color: "bg-pink-500",
    },
];

const workExperience = [
  {
    id: 1,
    role: "Social Media Manager",
    company: "E-Cell, IIT Bombay",
    date: "Present",
    description:
      "Leading social media strategies, managing official accounts, and engaging with the entrepreneurship community to drive participation.",
    color: "bg-blue-500",
  },
  {
    id: 2,
    role: "Core Team Member",
    company: "Creative Club, IPS Academy",
    date: "2023 - Present",
    description:
      "Organizing creative events and workshops, fostering a culture of innovation across the campus.",
    color: "bg-purple-500",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-20 relative z-10 px-2 md:px-6">
      <div className="max-w-6xl mx-auto">
        <PopIn>
        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-4">
            ✨ Resume
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white font-syne leading-tight mb-8">
            Education and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 dark:from-pink-300 dark:to-violet-300">
              practical experience
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-3xl font-medium border-l-4 border-violet-500 pl-6 italic">
            "Education is like a never-ending game of 'Did I know that?'— where you're always one step ahead, just enough to seem like you knew it all along, even if you only remembered it five minutes ago!"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
            
            {/* Education Column */}
            <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 text-sm">01</span>
                    My Education
                </h3>
                <div className="space-y-12 relative border-l border-slate-200 dark:border-white/10 ml-3">
                     {education.map((item, index) => (
                        <div key={item.id} className="relative pl-8 md:pl-12">
                            <span className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ${item.color} ring-4 ring-white dark:ring-[#0a0a0d]`}></span>
                            <div className="group">
                                <span className="text-sm font-bold text-slate-500 mb-2 block tracking-widest">{item.date}</span>
                                <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors font-syne">{item.title}</h4>
                                <p className="text-slate-700 dark:text-slate-300 font-semibold text-sm mb-4">{item.institution}</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                     ))}
                </div>
            </div>

            {/* Work Experience Column */}
            <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-pink-500/10 dark:bg-pink-500/20 flex items-center justify-center text-pink-600 dark:text-pink-400 text-sm">02</span>
                    Work Experience
                </h3>
                <div className="space-y-12 relative border-l border-slate-200 dark:border-white/10 ml-3">
                     {workExperience.map((item, index) => (
                        <div key={item.id} className="relative pl-8 md:pl-12">
                            <span className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ${item.color} ring-4 ring-white dark:ring-[#0a0a0d]`}></span>
                            <div className="group">
                                <span className="text-sm font-bold text-slate-500 mb-2 block tracking-widest">{item.date}</span>
                                <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors font-syne">{item.role}</h4>
                                <p className="text-slate-700 dark:text-slate-300 font-semibold text-sm mb-4">{item.company}</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                     ))}
                </div>
            </div>

        </div>
        </PopIn>
      </div>
    </section>
  );
}
