"use client";

import Image from "next/image";
import Scene from "./canvas/Scene";
import ParticleWave from "./canvas/ParticleWave";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden bg-[#e6ebf4]">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0 opacity-30">
         <Scene>
            <ParticleWave />
         </Scene>
      </div>

      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 mt-10">
        
        {/* Left Sidebar - Profile Card (Span 3-4) */}
        <div className="lg:col-span-4 flex flex-col">
            <div className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-[3rem] p-6 shadow-sm flex flex-col items-center text-center h-full max-h-[800px]">
                {/* Avatar Container */}
                <div className="relative w-full aspect-[4/5] mb-6 rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-violet-200 to-white shadow-inner border-[6px] border-white">
                    <Image 
                        src="/assets/avatar.png" 
                        alt="Raghvendra Bhati Avatar" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>
                
                <h1 className="text-3xl font-bold text-slate-900 mb-1 font-syne">Raghvendra Bhati</h1>
                <p className="text-slate-500 font-medium text-sm tracking-wide mb-6">DATA SCIENCE & ENTREPRENEUR</p>
                
                <div className="flex gap-3 mb-8 w-full justify-center">
                    <SocialBtn icon={<Linkedin size={18} />} href="https://linkedin.com/in/raghvendrabhati0217" />
                    <SocialBtn icon={<Github size={18} />} href="https://github.com/raghvendrabhati0217" />
                    <SocialBtn icon={<Twitter size={18} />} href="#" />
                    <SocialBtn icon={<Mail size={18} />} href="mailto:email@example.com" />
                </div>

                <a href="#contact" className="mt-auto w-full py-4 rounded-[2rem] bg-violet-600 text-white font-bold text-lg tracking-wide shadow-lg hover:shadow-violet-500/30 transition-all hover:-translate-y-1">
                    Let's Work Together!
                </a>
            </div>
        </div>

        {/* Right Content Area (Span 8-9) */}
        <div className="lg:col-span-8 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-4">
            
            {/* Top Badge */}
             <div className="mb-6 animate-fade-in-up">
                <span className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full text-slate-600 font-bold text-xs uppercase tracking-widest shadow-sm border border-slate-100">
                    <span className="text-yellow-500 text-lg">✨</span> Let's Meet!
                </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-[5.5rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight font-syne">
                I'm Raghvendra <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                    Bhati.
                </span>
            </h1>
            
            <p className="text-slate-500 text-lg md:text-xl font-medium mb-10 max-w-2xl leading-relaxed">
                Data Science Student at <strong className="text-slate-800">IPS Academy</strong> and <strong className="text-slate-800">E-Cell IIT Bombay</strong> Leader. Crafting digital experiences with data & design.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                <a href="#projects" className="group px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3">
                    My Works <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="/resume.pdf" className="px-8 py-4 bg-white text-slate-800 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-md border border-slate-200 hover:-translate-y-1">
                    Download CV
                </a>
            </div>

            {/* Stats / Footer of Hero */}
            <div className="mt-20 flex gap-8 md:gap-16 border-t border-slate-200 pt-8 max-w-lg justify-center lg:justify-start w-full">
                <Stat number="2+" label="Years Exp." />
                <Stat number="50+" label="Projects" />
                <Stat number="24/7" label="Commitment" />
            </div>

        </div>

      </div>
    </section>
  );
}

function SocialBtn({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a href={href} target="_blank" className="p-3 bg-white rounded-2xl shadow-sm hover:shadow-md hover:scale-110 hover:text-violet-600 transition-all border border-slate-100 text-violet-600 md:text-slate-400">
            {icon}
        </a>
    )
}

function Stat({ number, label }: { number: string, label: string }) {
    return (
        <div>
            <span className="block text-3xl font-bold text-slate-900 font-syne">{number}</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</span>
        </div>
    )
}
