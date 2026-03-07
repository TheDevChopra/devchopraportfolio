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
        <section className="max-w-4xl mx-auto px-6 py-24">
            <motion.h2
                className="text-3xl font-bold text-white mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Education
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        className="glass rounded-2xl p-8 border border-white/5 relative overflow-hidden group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <div className="absolute -inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/30 transition-all duration-500" />

                        <h3 className="text-xl font-bold text-white mb-3">{item.school}</h3>
                        <p className="text-zinc-300 font-medium mb-2">{item.degree}</p>
                        {item.focus && (
                            <p className="text-sm text-zinc-500 font-mono tracking-wide">{item.focus}</p>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
