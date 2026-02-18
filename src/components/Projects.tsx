"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Loader2, FolderOpen, ArrowUpRight, Terminal, ShieldAlert } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Honeynet Collapse",
    category: "Multi-OS Forensics",
    description: "A full-scope digital forensic investigation spanning Linux, Windows, and macOS endpoints. I analyzed memory dumps (Volatility 3), disk artifacts, and logs to reconstruct a complex ransomware attack chain from initial brute-force access to final data exfiltration.",
    tech: ["Volatility 3", "Autopsy", "Registry Explorer", "MITRE ATT&CK"],
    link: "https://vishak-SOC.github.io/security-writeups/tryhackme/honeynet-collapse/",
    github: "https://github.com/vishak-SOC/security-writeups",
    featured: true
  },
  {
    title: "Operation: First Shift",
    category: "SIEM & Phishing Analysis",
    description: "End-to-end investigation of a financial sector breach initiated via phishing. I utilized Splunk for log correlation and Wireshark for network traffic analysis to track the adversary's lateral movement and decode C2 communications.",
    tech: ["Splunk", "Wireshark", "CyberChef", "Triage"],
    link: "https://vishak-SOC.github.io/security-writeups/tryhackme/first-shift/",
    github: "https://github.com/vishak-SOC/security-writeups",
    featured: true
  },
  {
    title: "Active Directory Lab",
    category: "Detection Engineering",
    description: "Building a localized AD environment to simulate Kerberoasting and Golden Ticket attacks. Currently writing custom detection rules for Sysmon and Windows Event Logs to identify identity-based threats.",
    tech: ["Active Directory", "PowerShell", "Sysmon", "Atomic Red Team"],
    link: "#",
    github: "#",
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-10 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-cyan-400">Investigations</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Deep-dive case studies where I break down real-world attack scenarios, forensic artifacts, and defense strategies.
            </p>
          </div>
          <Link 
            href="https://github.com/vishak-SOC" 
            target="_blank" 
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
          >
            View GitHub Profile <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // TERMINAL STYLE CARD logic
              className={`relative rounded-3xl border p-8 md:p-12 transition-all duration-300 group ${
                project.featured 
                  ? "bg-gradient-to-br from-white/5 to-black border-cyan-500/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] hover:border-cyan-400/50" 
                  : "bg-black/40 border-white/10 border-dashed hover:border-white/20"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                
                {/* Icon Section */}
                <div className="hidden md:flex flex-col items-center justify-start pt-2">
                    <div className={`p-5 rounded-2xl transition-all duration-300 ${
                        project.featured 
                        ? "bg-cyan-500/10 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20" 
                        : "bg-white/5 text-gray-500"
                    }`}>
                        {/* Different icons based on featured status to add variety */}
                        {index === 0 ? <ShieldAlert size={36} /> : project.featured ? <FolderOpen size={36} /> : <Terminal size={36} />}
                    </div>
                    {project.featured && <div className="h-full w-[1px] bg-gradient-to-b from-cyan-500/30 to-transparent mt-6 group-hover:from-cyan-400/50" />}
                </div>

                {/* Content Section */}
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border ${
                            project.featured 
                            ? "bg-cyan-950/30 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.1)]" 
                            : "bg-gray-800 text-gray-400 border-gray-700"
                        }`}>
                            {project.category}
                        </span>
                        {!project.featured && (
                             <span className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-900/10 px-2 py-1 rounded">
                                <Loader2 size={12} className="animate-spin" /> In Progress
                             </span>
                        )}
                    </div>

                    <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${project.featured ? "text-white group-hover:text-cyan-50" : "text-gray-300"}`}>
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-8 leading-relaxed text-lg max-w-3xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tech.map((t) => (
                        <span key={t} className="text-sm font-mono text-cyan-100/70 bg-cyan-900/10 px-4 py-1.5 rounded-lg border border-cyan-500/10">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    {project.featured && (
                        <div className="flex items-center gap-4">
                        <Link
                            href={project.link}
                            target="_blank"
                            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3.5 rounded-xl font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                        >
                            <ExternalLink size={18} />
                            Read Case Study
                        </Link>
                        <Link
                            href={project.github}
                            target="_blank"
                            className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all hover:border-white/30"
                        >
                            <Github size={22} />
                        </Link>
                        </div>
                    )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}