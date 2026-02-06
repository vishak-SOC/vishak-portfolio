"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, ShieldCheck } from "lucide-react";

// ✅ Updated with your REAL details from the screenshots
const experiences = [
  {
    role: "Junior Cybersecurity Analyst & Ethical Hacker", // Combined your Cisco titles
    company: "Cisco",
    period: "Issued Jan 2026",
    location: "Credential ID: Verified",
    description: "Completed the official Career Path covering Endpoint Security, Cloud Defense, and Ethical Hacking. Acquired skills in Vulnerability Assessment, Social Engineering, and Windows Security.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />, 
    color: "bg-blue-500"
  },
  {
    role: "SOC Level 1 Certificate",
    company: "TryHackMe",
    period: "Jan 2026 - Present",
    location: "Top 1% Rank", // Added your ranking flex
    description: "Hands-on SOC training mastering SIEM tools, Incident Response, and Threat Analysis. Validated skills in Security Analysis and Blue Team operations.",
    icon: <Award className="w-6 h-6 text-white" />,
    color: "bg-red-500" // Red for TryHackMe branding
  },
  {
    role: "Bachelor of Computer Science",
    company: "KG College Of Arts And Science",
    period: "2022 - 2025",
    location: "Coimbatore, India",
    description: "Built a strong foundation in Computer Science principles, Networking, and Operating Systems. Capstone projects focused on security and software development.",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    color: "bg-emerald-500"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-10 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            My academic path and professional certifications in the cybersecurity landscape.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-6 md:ml-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[11px] top-0 w-6 h-6 rounded-full border-4 border-black ${exp.color} shadow-[0_0_15px_rgba(0,0,0,0.5)]`} />

              {/* Card Content */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-white/5 ${exp.color.replace('bg-', 'text-')}`}>
                        {exp.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/5">
                        {exp.period}
                    </span>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}