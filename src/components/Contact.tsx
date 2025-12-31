"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative z-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[40px] p-8 md:p-14 text-center border border-white shadow-2xl relative overflow-hidden"
        >
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500"></div>

            <h2 className="text-sm font-bold text-violet-600 uppercase tracking-widest mb-2">
                Get In Touch
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 text-slate-800">
                Let's Work Together
            </h3>
            <p className="text-slate-500 text-lg mb-10 max-w-lg mx-auto font-medium">
                Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
            </p>

            <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
                <a href="mailto:raghavendrabhati@example.com" className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 transition-all shadow-md group-hover:shadow-violet-500/30">
                        <Mail className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-slate-500 font-semibold group-hover:text-violet-600 transition-colors">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/raghvendrabhati0217/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-md group-hover:shadow-blue-500/30">
                        <Linkedin className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-slate-500 font-semibold group-hover:text-blue-600 transition-colors">LinkedIn</span>
                </a>
                 <a href="https://github.com/raghvendrabhati0217" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-slate-800 transition-all shadow-md group-hover:shadow-slate-800/30">
                        <Github className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-slate-500 font-semibold group-hover:text-slate-800 transition-colors">GitHub</span>
                </a>
                 <a href="#" className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-pink-600 transition-all shadow-md group-hover:shadow-pink-500/30">
                        <Instagram className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-slate-500 font-semibold group-hover:text-pink-600 transition-colors">Instagram</span>
                </a>
            </div>

            <div className="mt-14 pt-8 border-t border-slate-100">
                <p className="text-slate-400 text-sm font-medium">
                    © {new Date().getFullYear()} Raghvendra Bhati. All rights reserved.
                </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
