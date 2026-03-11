"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Achievements() {
    const achievements = [
        "Top 40 Startup Ideas — Indian Startup School",
        "Founder of an 800+ member Professional Marketers community",
        "Elected Class Representative for a batch of 255+ students",
        "Drove measurable social media growth starting at age 18",
        "Google Data Analytics Certificate",
        "Google Cybersecurity Certificate",
        "Cybersecurity Internship & Training Certificate — Corizo"
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 py-24 border-b border-forest/10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 border-b border-forest/10 pb-8 text-left"
            >
                <h3 className="mono-label mb-4">Milestones // Peer Recognition</h3>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-forest uppercase tracking-tighter leading-none">Achievements.</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-forest/10">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex items-start gap-6 p-10 border-r border-b border-forest/10 bg-paper transition-all"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-1.5 h-1.5 bg-forest mt-2 shrink-0" />
                        <span className="text-forest/70 text-lg font-medium tracking-tight leading-relaxed leading-snug">{item}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
