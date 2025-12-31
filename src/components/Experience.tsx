"use client";

import { motion } from "framer-motion";

const experiences = [
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
  {
    id: 3,
    role: "NEC Finalist",
    company: "National Entrepreneurship Challenge '24",
    date: "2024",
    description:
      "Competed and secured a finalist position in a prestigious national-level entrepreneurship challenge at IIT Bombay.",
    color: "bg-pink-500",
  },
];

export default function Experience() {
  return (
    <section id="work" className="py-20 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-violet-600 uppercase tracking-widest mb-2">
            My Journey
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Work Experience</h3>
        </motion.div>

        <div className="relative border-l-2 border-slate-300 ml-4 md:ml-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot */}
              <div
                className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-slate-200 ${exp.color} ring-4 ring-white`}
              ></div>

              <div className="bg-white p-8 rounded-3xl hover:shadow-xl transition-all shadow-sm border border-white">
                <span className="text-sm text-slate-400 block mb-2 font-semibold tracking-wide">{exp.date}</span>
                <h4 className="text-xl font-bold text-slate-800 mb-1">{exp.role}</h4>
                <p className="text-violet-600 font-semibold mb-3">{exp.company}</p>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
