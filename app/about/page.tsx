"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, Zap, Cpu, Code2, Rocket, GraduationCap, Briefcase, Award, ExternalLink } from "lucide-react";
import Link from "next/link";

const experience = [
    {
        role: "Founder's Office — Product Management",
        company: "Veena Studio",
        location: "Delaware, USA · Remote",
        date: "Dec 2025 - Present",
        desc: [
            "Driving product strategy and UI/UX for a web & desktop DAW built from the ground up.",
            "Full PMF research and ICP creation; built complete social media marketing strategy.",
            "Shipping significant product improvements in rapid AI-assisted iteration cycles."
        ],
        color: "from-indigo-400 to-purple-400"
    },
    {
        role: "Social Media Marketing Manager",
        company: "Brandmeld",
        location: "Kolkata, West Bengal · Remote",
        date: "Jan 2024 - Feb 2026",
        desc: [
            "Managed complete social strategy and execution for 6 diverse clients across industries.",
            "Created content calendars, reels, performance reports, and creative briefs.",
            "Point of communication between design, copywriting, and client servicing teams.",
            "Drove measurable follower growth, engagement rates, and campaign effectiveness."
        ],
        color: "from-blue-400 to-indigo-400"
    },
    {
        role: "Chief Marketing Manager",
        company: "Healing By Vanshika",
        location: "New Delhi",
        date: "Oct 2022 - Nov 2025",
        desc: [
            "Built entire online presence from zero — website, brand identity, tone of voice, and content strategy.",
            "Client acquisition campaigns; nutrition-focused content, community engagement, conversion tracking."
        ],
        color: "from-orange-400 to-red-400"
    },
    {
        role: "Social Media & Brand Manager",
        company: "Venus Studio",
        location: "Delhi",
        date: "Jul 2023 - Feb 2024",
        desc: [
            "Led editorial and creative team; brand strategy, visual direction, and social media style."
        ],
        color: "from-purple-400 to-pink-400"
    },
    {
        role: "Content & Digital Strategy Intern",
        company: "Unschool / Dissent Times / IMUN",
        location: "Remote",
        date: "Jun 2022 - Jun 2023",
        desc: [
            "Rotational internships: content creation, research, and digital strategy across multiple organisations."
        ],
        color: "from-zinc-400 to-zinc-600"
    }
];

const education = [
    {
        degree: "Product Management with Gen AI & Agentic AI",
        school: "BITSoM — BITS School of Management, Mumbai",
        date: "Sep 2025 - Jun 2026",
        desc: "Product fundamentals, generative AI applications, agentic systems, market research, data-driven decision-making."
    },
    {
        degree: "Bachelor's in Computer Applications — Cloud Computing & Cybersecurity",
        school: "UPES Online, Dehradun",
        date: "Jul 2024 - Jul 2027",
        desc: "Cloud systems, virtualization, cybersecurity, threat analysis, networking, cryptography, ethical hacking."
    }
];

const achievements = [
    "Recognized among Top 40 Startup Ideas at the Indian Startup School",
    "Elected Class Representative for a batch of 255+ students",
    "Drove impactful digital marketing results across social media at the age of 18",
    "Google Data Analytics Certificate (Coursera)",
    "Google Cybersecurity Certificate (Coursera)",
    "Cybersecurity Internship & Training Certificate — Corizo",
    "Founder of a 800+ Professional Marketers community"
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-[#0E3B2E]/50 selection:text-[#9EFFBF] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid z-0 opacity-10 pointer-events-none"></div>
            <div className="container mx-auto px-6 py-24 relative z-10 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative mb-32 h-[500px] w-full border border-white/10 overflow-hidden group rounded-2xl"
                >
                    <img
                        src="/static/brain/workspace.png"
                        alt="Workspace"
                        className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-12 bg-[#0B0B0F]/90 border-t border-white/10 backdrop-blur-sm">
                        <h3 className="mono-label mb-4 text-[#9EFFBF]">Profile // Generalist Builder</h3>
                        <h1 className="text-7xl md:text-[140px] font-black text-white leading-none uppercase tracking-tighter">
                            Generalist <br /> <span className="text-[#9EFFBF]">Builder.</span>
                        </h1>
                    </div>
                </motion.div>

                {/* Narrative Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-48">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h2 className="text-5xl md:text-[100px] font-black text-white tracking-tighter uppercase leading-[0.85]">Bridging Software <br /> and Hardware.</h2>
                        <div className="space-y-8 text-xl text-white/70 leading-relaxed font-medium">
                            <p>
                                I build things I can&apos;t stop thinking about — from ideation to shipped product. Spanning product strategy, UI/UX design, marketing, and AI-assisted development.
                            </p>
                            <p>
                                Currently at BITSoM (Gen AI & Agentic AI) and the Founder&apos;s Office of Veena Studio, I thrive at the intersection of creativity and systems thinking.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8">
                        <div className="p-10 border border-white/10 bg-white/5 glass rounded-2xl shadow-2xl">
                            <h3 className="mono-label mb-8 text-[#9EFFBF]">Index: 04 // Achievements</h3>
                            <div className="space-y-6">
                                {achievements.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 group/item">
                                        <div className="w-1.5 h-1.5 bg-[#9EFFBF]/50 mt-2 shrink-0 rounded-full" />
                                        <p className="text-white/70 group-hover/item:text-white transition-colors text-sm font-medium tracking-tight leading-snug">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <section className="mb-48">
                    <div className="flex flex-col gap-4 mb-16 border-b border-white/10 pb-8">
                        <h3 className="mono-label text-[#9EFFBF]">Archive // Professional Journey</h3>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">Experience.</h2>
                    </div>

                    <div className="border-l border-white/10">
                        {experience.map((job, idx) => (
                            <motion.div
                                key={idx}
                                className="p-12 border-b border-r border-white/10 hover:bg-white/5 transition-all relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0E3B2E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12 relative z-10">
                                    <div className="space-y-4">
                                        <span className="mono-label text-white/40">{job.date}</span>
                                        <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">{job.role}</h3>
                                        <p className="text-xl font-bold text-[#9EFFBF] uppercase tracking-widest leading-none">{job.company}</p>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <p className="mono-label text-white/40">{job.location}</p>
                                    </div>
                                </div>

                                <ul className="space-y-6 max-w-3xl relative z-10">
                                    {job.desc.map((d, i) => (
                                        <li key={i} className="flex items-start gap-4 text-white/70 text-lg font-medium leading-relaxed">
                                            <div className="w-1.5 h-1.5 bg-[#9EFFBF]/30 mt-2.5 shrink-0 rounded-full" />
                                            <span>{d}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section className="mb-48">
                    <div className="flex flex-col gap-4 mb-16 border-b border-white/10 pb-8">
                        <h3 className="mono-label text-[#9EFFBF]">Academic // Foundations</h3>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">Scholarly.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-white/10">
                        {education.map((edu, i) => (
                            <div key={i} className="p-12 border-r border-b border-white/10 glass hover:bg-white/5 transition-all">
                                <p className="mono-label mb-6 text-white/40">{edu.date}</p>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-6">{edu.degree}</h3>
                                <p className="text-xl font-bold text-[#9EFFBF] mb-8 leading-none uppercase tracking-widest">{edu.school}</p>
                                <p className="text-base text-white/60 leading-relaxed font-medium">{edu.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Philosophy CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-16 border border-white/10 bg-white/5 glass text-center relative overflow-hidden group mb-32 rounded-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0E3B2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-[0.85] uppercase">Philosophical <br /> Stack.</h2>

                        <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-4xl mx-auto">
                            {["Agency Over Consensus", "Design as Function", "Code as Leverage", "AI as Coworker", "Execution as Truth", "Customer Obsession"].map((phi) => (
                                <div key={phi} className="px-6 py-3 border border-white/10 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/60 hover:bg-white hover:text-black transition-all cursor-default relative z-10">
                                    {phi}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
