"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const CERTIFICATES = [
  {
    title: "Advanced Python",
    issuer: "LinkedIn",
    description: "Successfully achieved certification in Advanced Python language features.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AWS Certified",
    issuer: "Amazon Web Services",
    description: "Top 2% global users in Prompt Engineering through AWS practices.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Cloud Foundations",
    issuer: "AWS Academy",
    description: "AWS Academy Cloud Foundations Graduate certification.",
    color: "from-yellow-400 to-orange-600",
  },
  {
    title: "Google Cloud Core",
    issuer: "Coursera & LinkedIn",
    description: "Top 15% Google Cloud enthusiasts for Core Infrastructure.",
    color: "from-blue-600 to-indigo-600",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-10 md:py-20 relative z-10 px-2 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="mb-8 md:mb-16 md:text-left text-center"
        >
           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest mb-4">
            <span className="text-violet-500 dark:text-violet-400">✨</span> Achievement
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight font-syne">
            Certifications & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500 dark:from-violet-300 dark:to-pink-300">
              Awards
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Certificate Cards */}
            {CERTIFICATES.slice(0, 3).map((cert, index) => (
                <motion.a
                    key={index}
                    href="https://drive.google.com/drive/folders/1B7wHlDu-m5ZT6aKQw63O9ZUcI6Y3-U5p?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 rounded-[2rem] border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group block cursor-pointer min-h-[200px] flex flex-col justify-between"
                >
                    <div>
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`}></div>
                        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-900 dark:text-white mb-4 group-hover:scale-110 transition-transform">
                            <Award size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-syne leading-tight">{cert.title}</h3>
                        <p className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-2">{cert.issuer}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
                        {cert.description}
                    </p>
                </motion.a>
            ))}

            {/* View All Card (Last Item) */}
            <motion.a
                href="https://drive.google.com/drive/folders/1B7wHlDu-m5ZT6aKQw63O9ZUcI6Y3-U5p?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-[2rem] border border-white/10 bg-violet-600 text-white hover:bg-violet-700 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group flex flex-col justify-center items-center text-center cursor-pointer min-h-[200px] shadow-2xl"
            >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ExternalLink size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold font-syne leading-tight mb-2 text-white">View All <br/> Certificates</h3>
                <p className="text-sm font-medium text-white/80">Open Google Drive ↗</p>
            </motion.a>
        </div>

      </div>
    </section>
  );
}
