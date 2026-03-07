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
        <section className="max-w-4xl mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold text-white mb-2">Currently Building</h2>
                <p className="text-zinc-400 font-mono text-sm uppercase">Research & Development</p>
            </motion.div>

            <div className="flex flex-col gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="group relative glass rounded-full px-8 py-6 overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                    >
                        {/* Glowing effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                            <h3 className="text-xl font-bold text-white min-w-[200px]">{project.name}</h3>
                            <p className="text-zinc-400">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
