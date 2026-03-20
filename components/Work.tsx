"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, Palette, QrCode } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "TapQR",
        description: "Hybrid NFC + QR intelligent payment infrastructure for small merchants in India. Stealth — protecting early IP.",
        link: "https://www.tapqr.live/",
        icon: QrCode,
        color: "from-indigo-600 to-purple-600",
    },
    {
        title: "Altme",
        description: "AI-native social platform for Gen Z — connect with your AI twin, remove introvert barriers, build grounded decisions.",
        link: "https://altme-devchopra.lovable.app/",
        icon: Monitor,
        color: "from-blue-600 to-indigo-600",
    },
    {
        title: "Nivaari Health",
        description: "Complete health ally & period tracker designed specifically for Indian women, with cultural and Ayurvedic context.",
        link: "https://nivaari-health.lovable.app/",
        icon: Monitor,
        color: "from-purple-600 to-pink-600",
    },
    {
        title: "Veena Studio DAW",
        description: "Web & desktop Digital Audio Workstation rethinking creative tooling in native and browser environments.",
        link: "https://www.veena.studio/",
        icon: Palette,
        color: "from-orange-600 to-pink-600",
    },
    {
        title: "AuraScore",
        description: "Behavioral UI experiment — quiz that calculates your Aura Points. Simple, weird, fun.",
        link: "https://auraappbydev.netlify.app/",
        icon: Palette,
        color: "from-emerald-600 to-teal-600",
    },
    {
        title: "Design Portfolio",
        description: "Visual design, brand identities, and UI/UX work for various startups.",
        link: "https://devchopra.my.canva.site/",
        icon: Palette,
        color: "from-zinc-600 to-zinc-900",
    },
];

export default function Work() {
    return (
        <section id="work" className="py-24 px-6 relative overflow-hidden bg-[#0B0B0F]">
            <div className="absolute inset-0 bg-grid z-0 opacity-10 pointer-events-none"></div>
            <div className="container mx-auto max-w-6xl section-reveal relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-x-12 border-b border-white/10 pb-12">
                    <div className="space-y-6">
                        <h3 className="mono-label text-white/50">Index: 03 // Featured Work</h3>
                        <h2 className="text-6xl md:text-8xl lg:text-[100px] font-display font-black text-white leading-none uppercase tracking-tighter">
                            Built, Shipped <br /> & Scaled.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-white/5">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative p-12 border-r border-b border-white/5 glass transition-all duration-300 hover:bg-white/5"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0E3B2E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                                        <project.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="mono-label text-white/50">Project {String(index + 1).padStart(2, '0')}</span>
                                </div>

                                <h4 className="text-4xl font-display font-bold text-white uppercase mb-6">{project.title}</h4>
                                <p className="text-white/60 mb-12 flex-grow font-medium leading-relaxed">{project.description}</p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-3 text-[#9EFFBF] hover:text-white transition-colors font-mono text-[10px] font-bold uppercase tracking-[0.2em] group/link"
                                >
                                    <span className="relative">
                                        Execute Action (View)
                                    </span>
                                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </section>
    );
}
