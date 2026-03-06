"use client";

import { motion } from "framer-motion";
import { Users, Award, Briefcase, Calendar } from "lucide-react";

const stats = [
    {
        label: "Clients Worked With",
        value: "50+",
        icon: Users,
        color: "from-blue-500/20 to-indigo-500/20",
    },
    {
        label: "Certifications",
        value: "27+",
        icon: Award,
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        label: "Products Built",
        value: "Multiple",
        icon: Briefcase,
        color: "from-orange-500/20 to-red-500/20",
    },
    {
        label: "Years Experience",
        value: "5+",
        icon: Calendar,
        color: "from-emerald-500/20 to-teal-500/20",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl section-reveal">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                            The Startup <br /><span className="gradient-text">Generalist</span>.
                        </h2>
                        <div className="space-y-6 text-muted text-lg leading-relaxed font-medium">
                            <p>
                                I operate at the intersection of product, marketing, and engineering. Currently driving strategy in the <span className="text-white font-bold">Founder&apos;s Office</span> at Veena Studio and specializing in Gen AI at <span className="text-white font-bold">BITSoM</span>.
                            </p>
                            <p>
                                With experience spanning 50+ global clients, I focus on building systems that scale. From designing high-fidelity behavioral UIs to engineering NFC infrastructure, I deliver high-agency execution.
                            </p>
                            <p>
                                I don&apos;t just build features; I build products that solve problems. Execution is the only truth I recognize.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="p-6 glass border border-white/5 rounded-2xl flex flex-col space-y-4 relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10`} />
                                <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center mb-2">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-muted uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Blob */}
            <div className="absolute top-1/2 -right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />
        </section>
    );
}
