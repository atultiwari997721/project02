"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold text-violet-600 uppercase tracking-widest mb-2">
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800">
            A Data Science Enthusiast & Creative Leader
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
            I am currently a Data Science student at <span className="text-violet-600 font-bold">IPS Academy, Indore</span>. My journey involves deep diving into data analytics while simultaneously nurturing my creative side as a Social Media Manager.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            I also lead initiatives at <span className="text-violet-600 font-bold">E-Cell IIT Bombay</span>, where I manage social media strategies and contribute to the entrepreneurship ecosystem. I thrive at the intersection of technology, data, and community building.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-[40px] p-8 border border-white shadow-xl"
        >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-400/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/30 rounded-full blur-3xl"></div>
            
            <dl className="grid grid-cols-2 gap-6 relative z-10">
                <div className="bg-slate-50 p-6 rounded-3xl text-center hover:bg-violet-50 transition-colors">
                    <dt className="text-3xl font-bold text-violet-600 mb-1">2+</dt>
                    <dd className="text-sm text-slate-500 font-semibold">Years Experience</dd>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl text-center hover:bg-blue-50 transition-colors">
                    <dt className="text-3xl font-bold text-blue-600 mb-1">50+</dt>
                    <dd className="text-sm text-slate-500 font-semibold">Projects Managed</dd>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl text-center hover:bg-pink-50 transition-colors">
                    <dt className="text-3xl font-bold text-pink-600 mb-1">10k+</dt>
                    <dd className="text-sm text-slate-500 font-semibold">Reach Generated</dd>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl text-center hover:bg-emerald-50 transition-colors">
                    <dt className="text-3xl font-bold text-emerald-600 mb-1">100%</dt>
                    <dd className="text-sm text-slate-500 font-semibold">Dedication</dd>
                </div>
            </dl>
        </motion.div>
      </div>
    </section>
  );
}
