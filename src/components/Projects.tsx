"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Loader2, FolderOpen, ArrowUpRight, Terminal } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Operation: First Shift",
    category: "Full SOC Investigation",
    description: "A complete end-to-end investigation of a ransomware kill chain. I utilized Splunk for log ingestion and Wireshark for pcap analysis to track the adversary from initial phishing access to data exfiltration. Documented every step in a professional report.",
    tech: ["Splunk", "Wireshark", "Triage", "MITRE ATT&CK"],
    link: "https://vishak-SOC.github.io/security-writeups/tryhackme/first-shift/",
    github: "https://github.com/vishak-SOC/security-writeups",
    featured: true
  },
  {
    title: "Active Directory Lab",
    category: "Currently Researching",
    description: "Building a localized AD environment to simulate and detect Kerberoasting and Golden Ticket attacks. Writing detection rules for Sysmon and Windows Event Logs.",
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

      <div className="max-w-5xl mx-auto">
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
            <p className="text-muted-foreground max-w-xl">
              Deep-dive case studies where I break down real-world attack scenarios and defense strategies.
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

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // TERMINAL STYLE CARD: Dark background, glowing border for featured item
              className={`relative rounded-2xl border p-8 md:p-10 transition-all ${
                project.featured 
                  ? "bg-white/5 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]" 
                  : "bg-black/40 border-white/10 border-dashed"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                
                {/* Icon Section (Replaces Image) */}
                <div className="hidden md:flex flex-col items-center justify-start pt-2">
                    <div className={`p-4 rounded-xl ${project.featured ? "bg-cyan-500/10 text-cyan-400" : "bg-white/5 text-gray-500"}`}>
                        {project.featured ? <FolderOpen size={32} /> : <Terminal size={32} />}
                    </div>
                    {project.featured && <div className="h-full w-[1px] bg-gradient-to-b from-cyan-500/30 to-transparent mt-4" />}
                </div>

                {/* Content Section */}
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            project.featured 
                            ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" 
                            : "bg-gray-800 text-gray-400 border-gray-700"
                        }`}>
                            {project.category}
                        </span>
                        {!project.featured && (
                             <span className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                                <Loader2 size={12} className="animate-spin" /> In Progress
                             </span>
                        )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="text-sm font-mono text-gray-300 bg-black/40 px-3 py-1 rounded border border-white/10">
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
                            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-xl font-bold transition-all"
                        >
                            <ExternalLink size={18} />
                            Read Case Study
                        </Link>
                        <Link
                            href={project.github}
                            target="_blank"
                            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all"
                        >
                            <Github size={20} />
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