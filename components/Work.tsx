"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, Palette, QrCode } from "lucide-react";
import Link from "next/link";
import { ExternalLinkModal } from "@/components/ui/ExternalLinkModal";

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
        <section id="work" className="py-24 px-6 relative overflow-hidden bg-zinc-950/50">
            <div className="container mx-auto max-w-6xl section-reveal">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Featured Work</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Built, Shipped & <span className="gradient-text">Scaled</span>.
                        </h2>
                    </div>
                    <p className="text-muted max-w-sm text-lg leading-relaxed">
                        I don&apos;t just build features; I build products that solve real problems.
                        Execution is everything.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="group relative p-[1px] rounded-3xl overflow-hidden glass transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                        >
                            {/* Animated Gradient Border */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                            <div className="relative z-10 p-8 flex flex-col h-full bg-zinc-900/90 rounded-[calc(1.5rem-1px)]">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                                    <project.icon className="w-7 h-7 text-white" />
                                </div>

                                <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                                <p className="text-muted mb-8 flex-grow">{project.description}</p>

                                <ExternalLinkModal
                                    url={project.link}
                                    title={project.title}
                                    className="inline-flex items-center space-x-2 text-white font-semibold transition-all hover:translate-x-2 group/link"
                                >
                                    <span className="relative">
                                        View Project
                                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                                    </span>
                                    <ExternalLink className="w-4 h-4" />
                                </ExternalLinkModal>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        </section>
    );
}
