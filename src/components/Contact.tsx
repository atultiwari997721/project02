"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, company, email, phone, message } = formData;
    
    // Construct WhatsApp Message
    const text = `*New Portfolio Inquiry*%0A%0A*Name:* ${name}%0A*Company:* ${company}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
    
    const whatsappUrl = `https://wa.me/917828059933?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-10 md:py-24 relative z-10 px-6 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="glass-card rounded-[3rem] p-6 md:p-14 text-left border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden bg-white/60 dark:bg-white/5 backdrop-blur-xl"
        >
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500"></div>

            <div className="text-left mb-8 md:mb-10">
                 <span className="inline-block py-1 px-3 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-4">
                    ✨ Contact
                 </span>
                <h2 className="text-3xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 font-syne leading-tight break-words hyphens-auto">
                    Let's make something <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900 dark:from-slate-200 dark:to-slate-500">
                        awesome together!
                    </span>
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-4">Your Name*</label>
                    <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Enter your name" className="w-full bg-slate-50 dark:bg-transparent border-b border-slate-300 dark:border-white/10 px-4 py-3 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600" />
                </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-4">Company Name</label>
                    <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Enter company name" className="w-full bg-slate-50 dark:bg-transparent border-b border-slate-300 dark:border-white/10 px-4 py-3 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600" />
                </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-4">Email Address*</label>
                    <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter your email" className="w-full bg-slate-50 dark:bg-transparent border-b border-slate-300 dark:border-white/10 px-4 py-3 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600" />
                </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-4">Phone Number*</label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Enter phone number" className="w-full bg-slate-50 dark:bg-transparent border-b border-slate-300 dark:border-white/10 px-4 py-3 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600" />
                </div>
                 <div className="col-span-1 md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-4">A Few Words*</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project" rows={4} className="w-full bg-slate-50 dark:bg-transparent border-b border-slate-300 dark:border-white/10 px-4 py-3 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none transition-colors resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"></textarea>
                </div>
                
                 <div className="col-span-1 md:col-span-2 mt-4">
                    <button type="submit" className="w-full py-4 rounded-[2rem] bg-violet-600 text-white font-bold text-lg tracking-wide shadow-lg shadow-violet-600/20 hover:bg-violet-700 transition-all hover:-translate-y-1">
                        Send Message
                    </button>
                </div>
            </form>

            {/* Footer Info Grid - Location, Phone, Email */}
            <div className="mt-14 pt-10 border-t border-black/5 dark:border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Indore, MP India</p>
                </div>
                <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Phone</h4>
                    <a href="tel:+917828059933" className="text-slate-600 dark:text-slate-400 text-sm hover:text-violet-500 transition-colors">+91 78280 59933</a>
                </div>
                <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Email</h4>
                    <a href="mailto:raghuthakur0217@gmail.com" className="text-slate-600 dark:text-slate-400 text-sm hover:text-violet-500 transition-colors break-all">raghuthakur0217@gmail.com</a>
                </div>
            </div>

            <div className="mt-10 pt-8 border-t border-black/5 dark:border-white/10 flex justify-between items-center flex-wrap gap-4">
                <p className="text-slate-600 dark:text-slate-500 text-sm font-medium">
                    © {new Date().getFullYear()} Raghvendra Bhati.
                </p>
                <div className="flex gap-4">
                     <SocialIcon href="mailto:raghuthakur0217@gmail.com" Icon={Mail} />
                     <SocialIcon href="https://www.linkedin.com/in/raghvendrabhati0217/" Icon={Linkedin} />
                     <SocialIcon href="https://github.com" Icon={Github} />
                     <SocialIcon href="#" Icon={Instagram} />
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ Icon, href }: { Icon: any, href: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-black/5 dark:border-white/10">
            <Icon size={18} />
        </a>
    )
}
