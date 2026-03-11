"use client";

import { motion } from "framer-motion";
import { ExternalLink, Monitor, Palette, QrCode, ArrowRight, Shield, Zap, Heart, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "TapQR",
        subtitle: "Hybrid NFC + QR Fintech",
        description: "Intelligent payment infrastructure for small merchants in India. Currently in Stealth — protecting early IP.",
        fullDescription: "TapQR bridges the gap between traditional retail and digital payments. I engineered a robust system combining NFC hardware with dynamic QR generation, allowing merchants to accept payments with a single tap. The project focuses on high security, low latency, and a frictionless onboarding experience for non-tech-savvy users.",
        link: "https://www.tapqr.live/",
        icon: QrCode,
        color: "from-indigo-600 to-purple-600",
        tags: ["NFC", "Fintech", "Next.js", "Security"],
        img: "/static/brain/tapqr.png"
    },
    {
        title: "Altme",
        subtitle: "AI Social Platform",
        description: "AI-native social platform for Gen Z to connect with AI twins and remove introvert barriers.",
        fullDescription: "Altme is a revolutionary social experiment designed for the AI-first generation. It allows users to create AI twins that facilitate connections, helping remove social anxiety and introvert barriers. I led the product vision and UI/UX design, focusing on a behavioral UI that encourages grounded decisions and genuine human-AI interaction.",
        link: "https://altme-devchopra.lovable.app/",
        icon: Zap,
        color: "from-blue-600 to-indigo-600",
        tags: ["AI", "Social Engine", "Gen Z", "LLMs"],
        img: "/static/brain/altme.png"
    },
    {
        title: "Nivaari Health",
        subtitle: "FemTech & Wellness",
        description: "Complete health ally & period tracker designed specifically for Indian women with Ayurvedic context.",
        fullDescription: "Nivaari Health addresses specific wellness needs of Indian women. Combining modern medical tracking with traditional Ayurvedic insights, the platform provides a holistic view of female health. I focused on creating a culturally resonant design language and ensuring data privacy, given the sensitive nature of the information.",
        link: "https://nivaari-health.lovable.app/",
        icon: Heart,
        color: "from-purple-600 to-pink-600",
        tags: ["FemTech", "Ayurveda", "Wellness", "UI/UX"],
        img: "/static/brain/nivaari.png"
    },
    {
        title: "Veena Studio DAW",
        subtitle: "Creative SaaS",
        description: "Web & desktop Digital Audio Workstation rethinking creative tooling.",
        fullDescription: "Veena Studio is a high-performance DAW that brings professional-grade audio production to the browser. I worked on the Founder's Office desk, driving product strategy and UI/UX for a web-based native experience. The goal was to simplify complex creative workflows without sacrificing power.",
        link: "https://www.veena.studio/",
        icon: Palette,
        color: "from-orange-600 to-pink-600",
        tags: ["SaaS", "Audio Tech", "Design Systems", "WebAudio"],
        img: "/static/brain/veena.png"
    },
    {
        title: "AuraScore",
        subtitle: "Behavioral UI Web App",
        description: "A fun behavioral experiment calculating your Aura Points through interactive quizzes.",
        fullDescription: "AuraScore is a viral web experiment focused on behavioral UI. It uses a series of interactive, 'weird', and fun quiz elements to calculate a user's digital aura. This project allowed me to experiment with unconventional interaction patterns and high-engagement micro-animations.",
        link: "https://auraappbydev.netlify.app/",
        icon: Shield,
        color: "from-emerald-600 to-teal-600",
        tags: ["Viral", "Experiment", "Netlify", "React"],
        img: "/static/brain/aurascore.png"
    },
];

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-[#0E3B2E]/50 selection:text-[#9EFFBF] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid z-0 opacity-10 pointer-events-none"></div>
            <div className="container mx-auto px-6 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-6xl md:text-[140px] font-black text-white mb-8 tracking-tighter uppercase leading-none">
                        Shipped Work.
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-8 font-medium">
                        I build products that bridge the gap between design and code.
                        Execution is the only thing that matters.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="https://github.com/TheDevChopra/devchopraportfolio"
                            target="_blank"
                            className="inline-flex items-center space-x-2 px-6 py-2 border border-white/10 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white hover:border-white/20 transition-all font-mono"
                        >
                            <Github className="w-4 h-4" />
                            <span>Source Code</span>
                        </Link>
                    </div>
                </motion.div>

                <div className="space-y-48 pb-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Part */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className={`absolute inset-0 bg-[#0E3B2E]/10 blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                                <div className="relative p-1 bg-white/5 border border-white/10 rounded-2xl overflow-hidden glass group-hover:border-white/30 transition-all duration-700">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-auto aspect-video object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>

                            {/* Content Part */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="flex items-center space-x-4">
                                    <div className={`p-4 rounded-xl bg-white/10 border border-white/10`}>
                                        <project.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{project.title}</h2>
                                        <p className="text-lg font-bold text-white/40 uppercase tracking-widest font-mono">{project.subtitle}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-4 py-1.5 border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-white/50 font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-2xl font-bold text-white tracking-tight leading-tight uppercase">{project.description}</p>

                                <p className="text-lg text-white/70 leading-relaxed font-medium">
                                    {project.fullDescription}
                                </p>

                                <div className="flex flex-wrap gap-6 pt-6">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="group inline-flex items-center space-x-3 px-8 py-4 bg-white text-[#0B0B0F] font-bold uppercase tracking-widest text-xs transition-all border border-white hover:bg-white/90"
                                    >
                                        <span>Launch Product</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </Link>
                                    <div className="flex items-center space-x-2 text-white/30 text-[10px] font-bold uppercase tracking-widest font-mono">
                                        <Shield className="w-3 h-3" />
                                        <span>Verified Build</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stealth Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-32 p-16 border border-white/10 bg-white/5 glass rounded-2xl relative overflow-hidden group mb-24"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0E3B2E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-none uppercase">Other Research</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Narranova Labs", role: "AI SaaS", desc: "Intelligent content & automation engine." },
                                { name: "Hublix", role: "IoT / Infra", desc: "Smart home infrastructure for Indian households." },
                                { name: "Compliance AI", role: "LegalTech", desc: "CA workflows and regulatory filings automation." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <h4 className="text-xl font-black text-white mb-1 uppercase tracking-tight">{item.name}</h4>
                                    <p className="text-xs font-bold text-[#9EFFBF] uppercase tracking-widest mb-4 font-mono">{item.role}</p>
                                    <p className="text-white/60 text-sm leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
