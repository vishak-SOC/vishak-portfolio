"use client";

import { motion } from "framer-motion";
// 👇 FIXED: Removed 'Radio' from this list
import { ArrowUpRight, Mail, FileText, MapPin } from "lucide-react"; 
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="pt-20 pb-0 px-4 md:px-10 bg-black min-h-[80vh] flex flex-col justify-between relative">
            
            {/* 1. MAIN CONTACT CONTENT */}
            <div className="max-w-7xl mx-auto w-full mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                        Ready to <span className="text-cyan-400">secure</span> <br />
                        the infrastructure?
                    </h2>
                    
                    <p className="text-gray-400 text-lg mb-8 max-w-xl">
                        I am currently looking for opportunities as a SOC Analyst or Blue Team Defender. 
                        If you are hiring or want to discuss threat hunting strategies, my inbox is open.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {/* ⚠️ REMEMBER TO ADD YOUR EMAIL HERE */}
                        <Link
                            href="mailto:your.email@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black rounded-full text-lg font-bold hover:bg-cyan-400 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            Send an Email
                        </Link>
                        
                        <Link
                            href="https://vishak-SOC.github.io/security-writeups/"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
                        >
                            <FileText className="w-5 h-5" />
                            Read Writeups
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* 2. BIG NAME & SOCIALS */}
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-10"
                >
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10 pb-10">
                        <div>
                            <p className="text-cyan-400 font-mono mb-2 tracking-widest text-sm uppercase">
                                Defending Networks, One Packet at a Time
                            </p>
                            <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-white flex overflow-hidden py-4">
                                {"Vishak".split("").map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ y: 0 }}
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{
                                            duration: 2.5,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            repeatDelay: 0,
                                            delay: index * 0.15,
                                        }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </h1>
                        </div>

                        <div className="flex flex-wrap gap-6 mb-8 md:mb-4">
                            <Link href="https://www.linkedin.com/in/vishak-s-p-15438931b/" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg flex items-center gap-2">
                                LinkedIn <ArrowUpRight size={16} />
                            </Link>
                            <Link href="https://github.com/vishak-SOC" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg flex items-center gap-2">
                                GitHub <ArrowUpRight size={16} />
                            </Link>
                            <Link href="https://tryhackme.com/p/vishak32" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors text-lg flex items-center gap-2">
                                TryHackMe <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 3. THE NEW SOC STATUS BAR (Footer) */}
            <div className="w-full border-t border-white/10 bg-black/50 backdrop-blur-sm mt-auto">
                <div className="max-w-7xl mx-auto px-4 md:px-0 h-16 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-gray-500">
                    
                    {/* LEFT: System Status */}
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="tracking-widest uppercase">System: Online (Open to Work)</span>
                    </div>

                    {/* CENTER: Copyright */}
                    <div className="hidden md:block">
                        © 2026 VISHAK <span className="text-cyan-500 mx-2">///</span> BLUE TEAM DEFENSE
                    </div>

                    {/* RIGHT: Location */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 uppercase tracking-wider">
                            <MapPin size={12} />
                            Belfast, UK
                        </div>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <span className="hidden md:inline uppercase tracking-wider">
                            v2.0.26
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}