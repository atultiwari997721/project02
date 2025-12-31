"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Data Science", level: 90 },
  { name: "Python", level: 85 },
  { name: "Social Media Strategy", level: 95 },
  { name: "Community Management", level: 90 },
  { name: "Leadership", level: 88 },
  { name: "Event Management", level: 85 },
  { name: "Content Creation", level: 80 },
  { name: "Public Speaking", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-violet-600 uppercase tracking-widest mb-2">
            What I Do
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Skills & Expertise</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-white hover:shadow-md transition-all"
            >
              <div className="flex justify-between mb-4">
                <span className="font-bold text-lg text-slate-700 group-hover:text-violet-600 transition-colors">{skill.name}</span>
                <span className="text-slate-400 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
