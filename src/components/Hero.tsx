"use client";

import { motion } from "framer-motion";
// 👇 FIXED: I removed 'Download' from this list
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black relative">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

        <div className="container px-4 md:px-10 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                
                {/* TEXT SECTION (Left Side) */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 text-center md:text-left z-10"
                >
                    {/* Location Tag */}
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-gray-700"></div>
                        <span className="text-sm text-gray-500 font-mono uppercase tracking-widest">
                            Based in Belfast, UK
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">
                        Hi, I'm <span className="text-cyan-400">Vishak</span>
                    </h1>
                    
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mb-8 leading-tight">
                        SOC Analyst & <span className="text-white block md:inline">Threat Hunter</span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-10 leading-8">
                        I bridge the gap between raw data and resilient defense. 
                        Specializing in <span className="text-cyan-400 font-medium">SIEM (Splunk)</span>, <span className="text-cyan-400 font-medium">Incident Response</span>, and <span className="text-cyan-400 font-medium">Digital Forensics</span>, I detect anomalies and neutralize cyber threats before they impact operations.
                    </p>

                    {/* Social Buttons */}
                    <div className="flex items-center justify-center md:justify-start gap-5 mb-10">
                        <Link href="https://github.com/vishak-SOC" target="_blank" className="p-3 rounded-full border border-white/10 text-gray-400 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all">
                            <Github size={22} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/vishak-s-p-15438931b/" target="_blank" className="p-3 rounded-full border border-white/10 text-gray-400 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all">
                            <Linkedin size={22} />
                        </Link>
                        <Link href="mailto:your.email@gmail.com" className="p-3 rounded-full border border-white/10 text-gray-400 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all">
                            <Mail size={22} />
                        </Link>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link 
                            href="#projects"
                            className="px-8 py-3.5 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-colors w-full sm:w-auto text-center"
                        >
                            View Investigations
                        </Link>
                        
                        {/* RESUME BUTTON HIDDEN (Uncomment and add 'Download' to imports when ready) */}
                        {/* <a 
                            href="/resume.pdf" 
                            download
                            className="px-8 py-3.5 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                        >
                            <Download size={18} />
                            Download CV
                        </a>
                        */}
                    </div>
                </motion.div>

                {/* IMAGE SECTION (Right Side) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 relative w-full max-w-[450px] aspect-square md:aspect-auto md:h-[550px]"
                >
                    {/* Glowing Effect Behind Image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-6 scale-95 opacity-60"></div>

                    {/* Image Container */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm shadow-2xl">
                        <Image
                            src="/Soc-photo-1.png"
                            alt="Vishak Profile"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-600"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <ArrowDown size={16} />
            </motion.div>
        </div>
    </section>
  );
}