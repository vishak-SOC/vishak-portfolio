"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Terminal, Globe, Lock, ExternalLink } from "lucide-react";
import Link from "next/link";

const certifications = [
    {
        name: "Junior Cybersecurity Analyst",
        issuer: "Cisco",
        issued: "Jan 2026",
        description: "Comprehensive career path covering Endpoint Security, Network Defense, and Threat Management.",
        icon: <ShieldCheck className="w-8 h-8 text-blue-400" />, // Cisco Blue
        color: "bg-blue-500/10 border-blue-500/20",
        link: "#" // Paste your Credly link here later
    },
    {
        name: "Ethical Hacker",
        issuer: "Cisco",
        issued: "Jan 2026",
        description: "Validated skills in penetration testing, social engineering, and vulnerability assessment.",
        icon: <Lock className="w-8 h-8 text-cyan-400" />, // Security Cyan
        color: "bg-cyan-500/10 border-cyan-500/20",
        link: "#"
    },
    {
        name: "SOC Level 1",
        issuer: "TryHackMe",
        issued: "Jan 2026",
        description: "Hands-on mastery of SIEM tools (Splunk), Phishing Analysis, and Incident Response workflows.",
        icon: <Terminal className="w-8 h-8 text-green-400" />, // Hacker Green
        color: "bg-green-500/10 border-green-500/20",
        link: "#"
    },
    {
        name: "Endpoint Security",
        issuer: "Cisco",
        issued: "Jan 2026",
        description: "Specialized focus on securing network endpoints against malware and advanced persistent threats.",
        icon: <Globe className="w-8 h-8 text-indigo-400" />, // Indigo
        color: "bg-indigo-500/10 border-indigo-500/20",
        link: "#"
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 px-4 md:px-10 bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center justify-center md:justify-start gap-4">
                        <Award className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
                        Professional <span className="text-cyan-400">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto md:mx-0">
                        Industry-recognized credentials that validate my expertise in offensive and defensive security operations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-3xl border ${cert.color} bg-white/5 hover:bg-white/10 transition-all group relative overflow-hidden`}
                        >
                            <div className="flex items-start gap-6">
                                {/* Icon Box */}
                                <div className={`p-4 rounded-2xl bg-black/50 border border-white/5 shadow-inner`}>
                                    {cert.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                {cert.name}
                                            </h3>
                                            <p className="text-sm font-mono text-cyan-400/80 uppercase tracking-wider mb-1">
                                                {cert.issuer}
                                            </p>
                                        </div>
                                        <span className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                                            {cert.issued}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {cert.description}
                                    </p>

                                    {/* Verification Link (Optional) */}
                                    <Link 
                                        href={cert.link} 
                                        className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition-colors"
                                    >
                                        Verify Credential <ExternalLink size={12} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}