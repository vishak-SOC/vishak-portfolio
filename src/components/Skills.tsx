"use client";

import { motion } from "framer-motion";
import { FaPython, FaMicrosoft, FaWindows } from "react-icons/fa";
import { 
    SiSplunk, 
    SiGnubash, 
    SiKalilinux, 
    SiWireshark, 
    SiBurpsuite, 
} from "react-icons/si";
import { Shield, Brain, Zap, Search, Terminal, Globe, Crosshair } from "lucide-react";

const skills = [
    {
        category: "Security Operations (SOC)",
        icon: <Shield className="w-6 h-6" />,
        items: [
            { name: "Splunk (SIEM)", icon: <SiSplunk /> },
            { name: "Microsoft Sentinel", icon: <FaMicrosoft /> },
            { name: "Incident Response", icon: <Zap /> },
            { name: "Threat Hunting", icon: <Crosshair /> } 
        ],
        // Top Left Block
        className: "md:col-span-2 md:row-span-1 bg-indigo-900/20 border-indigo-500/20",
    },
    {
        category: "Offensive Security Knowledge",
        icon: <SiKalilinux className="w-6 h-6" />,
        items: [
            { name: "MITRE ATT&CK", icon: <Globe /> }, 
            { name: "Burp Suite", icon: <SiBurpsuite /> },
            { name: "Nmap Scanning", icon: <Terminal /> },
            { name: "Kerberoasting", icon: <FaWindows /> },
        ],
        // Top Right Block
        className: "md:col-span-2 md:row-span-1 bg-red-900/10 border-red-500/20",
    },
    {
        category: "Network & Forensics",
        icon: <Search className="w-6 h-6" />,
        items: [
            { name: "Wireshark", icon: <SiWireshark /> },
            { name: "Sysmon Analysis", icon: <FaWindows /> },
            { name: "Autopsy", icon: <Search /> },
            { name: "Memory Analysis", icon: <Brain /> }
        ],
        // Bottom Left Block - Now Expanded to span 2 columns!
        className: "md:col-span-2 bg-neutral-900/50 border-neutral-800",
    },
    {
        category: "Scripting & Automation",
        icon: <Terminal className="w-6 h-6" />,
        items: [
            { name: "Splunk SPL", icon: <SiSplunk /> },
            { name: "Python", icon: <FaPython /> },
            { name: "PowerShell", icon: <Terminal /> },
            { name: "Bash", icon: <SiGnubash /> },
        ],
        // Bottom Right Block - Now Expanded to span 2 columns!
        className: "md:col-span-2 bg-neutral-900/50 border-neutral-800",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 md:px-10 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Technical <span className="text-cyan-400">Arsenal</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg">
                        A curated set of defensive tools and offensive knowledge focused on detecting and mitigating enterprise threats.
                    </p>
                </motion.div>

                {/* Grid Layout: 2 items per row, perfectly aligned */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(160px,auto)]">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-3xl border flex flex-col justify-between group hover:border-cyan-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 ${skill.className}`}
                        >
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-white/5 rounded-full text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                                    {skill.icon}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4 mt-4 text-white">{skill.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="relative group/tooltip"
                                        >
                                            <span className="text-sm text-gray-300 bg-white/5 px-3 py-2 rounded-lg flex items-center gap-2.5 hover:bg-white/10 hover:text-white transition-colors cursor-default border border-white/5 hover:border-white/20">
                                                <div className="flex items-center justify-center w-4 h-4 opacity-80">
                                                    {item.icon}
                                                </div>
                                                <span>{item.name}</span>
                                            </span>

                                            {/* Tooltip */}
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-800 text-white text-xs rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 z-50 shadow-xl">
                                                {item.name}
                                                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rotate-45 border-b border-r border-white/10"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}