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
        <section className="max-w-4xl mx-auto px-6 py-24">
            <motion.h2
                className="text-3xl font-bold text-white mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Achievements & Certifications
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <CheckCircle2 className="w-5 h-5 text-[#a855f7] shrink-0 mt-0.5" />
                        <span className="text-zinc-300 leading-snug">{item}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
