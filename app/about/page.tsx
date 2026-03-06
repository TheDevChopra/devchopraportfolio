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
        <div className="container mx-auto px-6 py-24 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative mb-32 h-[450px] w-full rounded-[48px] overflow-hidden group shadow-2xl"
                >
                    <img
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80"
                        alt="Workspace"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-16 left-16 max-w-2xl px-4">
                        <div className="mb-6 h-1 w-24 bg-indigo-500 rounded-full" />
                        <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">
                            Generalist <br /> <span className="gradient-text">Builder</span>.
                        </h1>
                    </div>
                </motion.div>

                {/* Narrative Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-48">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-tight">Bridging <span className="text-indigo-500">Software</span> and <span className="text-purple-500">Hardware</span>.</h2>
                        <div className="space-y-8 text-2xl text-muted leading-relaxed font-medium tracking-tight">
                            <p>
                                I build things I can&apos;t stop thinking about — from ideation to shipped product. Spanning product strategy, UI/UX design, marketing, and AI-assisted development.
                            </p>
                            <p>
                                Currently at BITSoM (Gen AI & Agentic AI) and the Founder&apos;s Office of Veena Studio, I thrive at the intersection of creativity and systems thinking.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8">
                        <div className="p-8 glass border border-white/5 rounded-[40px] group transition-all">
                            <h3 className="text-sm font-black text-white/40 uppercase tracking-[0.3em] mb-8">Achievements</h3>
                            <div className="space-y-6">
                                {achievements.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 group/item">
                                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mt-1">
                                            <Award className="w-3 h-3 text-indigo-400" />
                                        </div>
                                        <p className="text-white/70 group-hover/item:text-white transition-colors text-sm font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <section className="mb-48">
                    <div className="flex items-center gap-6 mb-16 overflow-visible">
                        <div className="p-4 rounded-3xl bg-indigo-500/10 border border-indigo-500/20">
                            <Briefcase className="w-8 h-8 text-indigo-400" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight overflow-visible">Professional <span className="gradient-text">Journey</span></h2>
                    </div>

                    <div className="space-y-12">
                        {experience.map((job, idx) => (
                            <motion.div
                                key={idx}
                                className="p-10 glass border border-white/5 rounded-[40px] hover:bg-white/5 transition-all relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${job.color} opacity-0 group-hover:opacity-5 blur-[120px] transition-opacity`} />

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                                    <div>
                                        <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">{job.role}</h3>
                                        <p className="text-xl font-bold text-indigo-400 uppercase tracking-widest">{job.company}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-black text-white mb-1 uppercase tracking-tighter">{job.date}</p>
                                        <p className="text-sm font-bold text-white/40 uppercase tracking-widest">{job.location}</p>
                                    </div>
                                </div>

                                <ul className="space-y-4 max-w-4xl">
                                    {job.desc.map((d, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted leading-relaxed font-medium">
                                            <div className="w-2 h-2 rounded-full bg-white/20 mt-2.5 shrink-0" />
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
                    <div className="flex items-center gap-6 mb-16 overflow-visible">
                        <div className="p-4 rounded-3xl bg-purple-500/10 border border-purple-500/20">
                            <GraduationCap className="w-8 h-8 text-purple-400" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight overflow-visible">Scholarly <span className="gradient-text">Background</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {education.map((edu, i) => (
                            <div key={i} className="p-10 glass border border-white/5 rounded-[40px] hover:border-white/10 transition-all">
                                <p className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em] mb-4">{edu.date}</p>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-tight mb-4">{edu.degree}</h3>
                                <p className="text-lg font-bold text-white/60 mb-6">{edu.school}</p>
                                <p className="text-sm text-muted leading-relaxed">{edu.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Philosophy CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-16 glass border border-white/10 rounded-[60px] text-center relative overflow-hidden group mb-32"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-10 blur-xl pointer-events-none group-hover:opacity-20 transition-opacity">
                        <Code2 className="w-64 h-64 text-indigo-500" />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-none uppercase">The <span className="gradient-text">Philosophical</span> Stack</h2>

                    <div className="flex flex-wrap justify-center gap-6 mt-12 max-w-4xl mx-auto">
                        {["Agency Over Consensus", "Design as Function", "Code as Leverage", "AI as Coworker", "Execution as Truth", "Customer Obsession"].map((phi) => (
                            <div key={phi} className="px-8 py-4 rounded-full glass border border-white/20 text-sm font-black uppercase tracking-widest text-white hover:bg-white transition-all hover:text-black cursor-default">
                                {phi}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
