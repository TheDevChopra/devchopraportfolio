"use client";

import { motion } from "framer-motion";

export default function CurrentlyBuilding() {
    const projects = [
        {
            name: "Narranova Labs",
            description: "AI SaaS platform for intelligent content systems and structured automation.",
        },
        {
            name: "Hublix",
            description: "Smart home infrastructure platform designed for Indian households.",
        },
        {
            name: "Compliance AI",
            description: "AI tools for CAs and regulatory filings.",
        }
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 py-24 border-b border-forest/10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 border-b border-forest/10 pb-8"
            >
                <h3 className="mono-label mb-4">Pipeline // Active R&D</h3>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-forest uppercase tracking-tighter leading-none">Currently Building.</h2>
            </motion.div>

            <div className="flex flex-col border-l border-t border-forest/10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="group relative p-12 border-r border-b border-forest/10 bg-paper hover:bg-forest/[0.02] transition-all"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                            <div className="space-y-4 md:min-w-[280px]">
                                <span className="mono-label text-forest/30 uppercase tracking-widest text-[10px]">Active // 0{index + 1}</span>
                                <h3 className="text-3xl font-display font-bold text-forest uppercase tracking-tighter leading-none">{project.name}</h3>
                            </div>
                            <p className="text-forest/60 text-lg font-medium leading-relaxed max-w-2xl">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
