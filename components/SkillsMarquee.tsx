"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsRows = [
    {
        category: "Marketing & Content",
        items: ["Paid Ads", "Email Marketing", "Social Media", "Growth Hacking", "Content Strategy", "Brand Branding", "PR Management"],
        direction: -1,
    },
    {
        category: "Product & Operations",
        items: ["Product Strategy", "User Research", "Agile", "CRM Workflows", "Automations", "Scaling", "PMF Research"],
        direction: 1,
    },
    {
        category: "AI & Design",
        items: ["Vibe Coding", "AI Workflows", "ChatGPT", "Claude", "Cursor", "Figma", "UI/UX Design", "Motion Graphics"],
        direction: -1,
    }
];

export default function SkillsMarquee() {
    return (
        <section id="skills-marquee" className="py-24 bg-[#0B0B0F] overflow-hidden border-t border-white/5 relative">
            <div className="absolute inset-0 bg-grid z-0 opacity-10 pointer-events-none"></div>
            <div className="container mx-auto px-6 mb-16 text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
                    Modern <span className="gradient-text">Stacks</span>.
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
                    Hyper-efficient workflows powered by AI and decades of design-thinking principles.
                </p>
            </div>

            <div className="flex flex-col gap-8">
                {skillsRows.map((row, idx) => (
                    <div key={idx} className="relative flex whitespace-nowrap overflow-hidden">
                        <motion.div
                            initial={{ x: row.direction === -1 ? 0 : "-50%" }}
                            animate={{ x: row.direction === -1 ? "-50%" : 0 }}
                            transition={{
                                duration: 20 + idx * 5,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="flex gap-4 pr-4"
                        >
                            {[...row.items, ...row.items, ...row.items, ...row.items].map((item, i) => (
                                <div
                                    key={i}
                                    className="px-8 py-4 glass rounded-full text-lg font-bold text-white/50 hover:text-white hover:border-[#0E3B2E] transition-all cursor-default font-mono"
                                >
                                    {item}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
