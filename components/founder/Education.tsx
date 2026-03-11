"use client";

import { motion } from "framer-motion";

export default function Education() {
    const education = [
        {
            school: "BITS School of Management (BITSoM)",
            degree: "Product Management with Gen AI & Agentic AI",
        },
        {
            school: "UPES Online",
            degree: "Bachelor of Computer Applications",
            focus: "Cloud Computing & Cybersecurity",
        }
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 py-24 border-b border-forest/10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 border-b border-forest/10 pb-8 text-left"
            >
                <h3 className="mono-label mb-4">Foundation // Scholarly Bases</h3>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-forest uppercase tracking-tighter leading-none">Education.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-forest/10">
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative p-12 border-r border-b border-forest/10 bg-paper hover:bg-forest/[0.02] transition-all group"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            <span className="mono-label text-forest/30 uppercase tracking-[0.2em] text-[10px]">Level // 0{index + 1}</span>
                            <h3 className="text-3xl font-display font-bold text-forest uppercase tracking-tighter leading-tight leading-none">{item.school}</h3>
                            <div className="space-y-2">
                                <p className="text-xl font-bold text-forest/70 leading-none uppercase tracking-widest leading-none">{item.degree}</p>
                                {item.focus && (
                                    <p className="text-sm font-bold text-forest/40 uppercase tracking-[0.2em]">{item.focus}</p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
