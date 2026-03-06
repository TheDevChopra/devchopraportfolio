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
        <section id="skills-marquee" className="py-24 bg-[#030303] overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                    Modern <span className="gradient-text">Stacks</span>.
                </h2>
                <p className="text-muted text-lg max-w-2xl mx-auto">
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
                                    className="px-8 py-4 glass border border-white/5 rounded-2xl text-lg font-bold text-white/50 hover:text-white hover:border-white/20 transition-all cursor-default"
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
