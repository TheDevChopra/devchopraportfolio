"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
    year: string;
    role: string;
    company: string;
    description: string;
    points?: string[];
}

const TimelineItem = ({ year, role, company, description, points }: TimelineItemProps) => {
    return (
        <motion.div
            className="relative pl-8 sm:pl-32 py-6 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="hidden sm:flex flex-col items-end absolute left-0 w-24 translate-y-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-mono text-zinc-400">{year}</span>
            </div>

            <div className="absolute left-0 sm:left-32 w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-[#a855f7] transition-colors translate-y-2 -translate-x-[5px]" />

            <div className="sm:hidden mb-2">
                <span className="text-sm font-mono text-[#a855f7]">{year}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{role}</h3>
            <h4 className="text-lg text-zinc-400 font-medium mb-4">{company}</h4>

            <p className="text-zinc-300 leading-relaxed mb-4">{description}</p>

            {points && points.length > 0 && (
                <ul className="list-none space-y-2 text-zinc-400">
                    {points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className="text-zinc-600 mt-1.5 text-[10px]">●</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
};

export default function Timeline() {
    const experiences = [
        {
            year: "2025",
            role: "Founder's Office · Product & Growth",
            company: "Veena Studio",
            description: "Embedded with founders building a Web + Desktop DAW.",
            points: [
                "Led PMF research",
                "Defined ICP + positioning",
                "Built social growth engine",
                "Shipping rapid AI-assisted iterations"
            ]
        },
        {
            year: "2023 – 2025",
            role: "Chief Marketing Manager",
            company: "Healing By Vanshika",
            description: "Built entire digital presence from scratch.",
            points: [
                "Brand identity",
                "Website",
                "Content system",
                "Acquisition funnels"
            ]
        },
        {
            year: "2023",
            role: "Social Media & Brand Manager",
            company: "Venus Studio",
            description: "Defined visual strategy and creative output."
        }
    ];

    return (
        <section className="max-w-4xl mx-auto px-6 py-24">
            <motion.h2
                className="text-3xl font-bold text-white mb-16 inline-flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                Experience
            </motion.h2>

            <div className="relative border-l border-zinc-800 ml-3 sm:ml-0">
                {experiences.map((exp, index) => (
                    <TimelineItem key={index} {...exp} />
                ))}
            </div>
        </section>
    );
}
