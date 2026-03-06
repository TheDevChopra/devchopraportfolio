"use client";

import { motion } from "framer-motion";
import { Hammer, Megaphone, Brain, PenTool, Layout, TrendingUp, Settings, BarChart } from "lucide-react";

const domains = [
    { name: "Product", icon: Layout, color: "text-indigo-400" },
    { name: "Marketing", icon: Megaphone, color: "text-blue-400" },
    { name: "AI", icon: Brain, color: "text-purple-400" },
    { name: "Design", icon: PenTool, color: "text-pink-400" },
    { name: "Content", icon: Hammer, color: "text-orange-400" },
    { name: "Growth", icon: TrendingUp, color: "text-emerald-400" },
    { name: "Operations", icon: Settings, color: "text-red-400" },
    { name: "Strategy", icon: BarChart, color: "text-teal-400" },
];

export default function Domains() {
    return (
        <section id="domains" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl section-reveal">
                <div className="flex flex-col items-center justify-center text-center space-y-6 mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                        Things I <span className="gradient-text">Work Across</span>.
                    </h2>
                    <p className="text-muted text-xl max-w-2xl leading-relaxed">
                        From coding a new feature to designing a multi-channel growth system,
                        I operate with high intelligence across these core domains.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {domains.map((domain, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group p-8 glass border border-white/5 rounded-3xl flex flex-col items-center justify-center space-y-4 hover:border-white/10 relative overflow-hidden perspective-1000"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
                                <domain.icon className={`w-8 h-8 ${domain.color} group-hover:scale-110 transition-transform`} />
                            </div>

                            <h4 className="text-lg font-bold text-white uppercase tracking-widest">{domain.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
