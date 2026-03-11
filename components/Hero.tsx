"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, MoveRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const roles = [
    "Product Builder",
    "Growth Operator",
    "AI Explorer",
    "Vibe Coder",
    "Designer",
    "Content Strategist",
    "Startup Generalist"
];

const RotatingRoles = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-20 overflow-hidden mt-2">
            <AnimatePresence mode="wait">
                <motion.div
                    key={roles[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-bold text-forest"
                >
                    {roles[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 bg-[#0B0B0F]">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
                <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-teal-500/10 via-[#0E3B2E]/30 to-blue-500/10 rounded-full blur-[100px] md:blur-[120px] opacity-60" />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid z-0 opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#0B0B0F] to-transparent z-0 pointer-events-none" />

            <div className="container mx-auto flex flex-col items-center justify-center relative z-10 text-center mt-12">
                {/* Floating Badges */}
                <div className="absolute top-[10%] left-[5%] md:left-[15%] hidden lg:block">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="px-6 py-2 rounded-full border border-white/5 bg-[#0B0B0F]/60 backdrop-blur-md text-xs font-bold tracking-widest text-white/50 uppercase -rotate-6 shadow-xl"
                    >
                        Product Design
                    </motion.div>
                </div>

                <div className="absolute top-[20%] right-[5%] md:right-[15%] hidden lg:block">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="px-6 py-2 rounded-full border border-white/5 bg-[#0B0B0F]/60 backdrop-blur-md text-xs font-bold tracking-widest text-white/50 uppercase rotate-6 shadow-xl"
                    >
                        AI & Automation
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center space-y-8 max-w-4xl mx-auto"
                >
                    <div className="inline-block px-5 py-2 rounded-full border border-[#0E3B2E]/50 bg-[#0E3B2E]/20 text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#9EFFBF] uppercase font-mono shadow-[0_0_15px_rgba(14,59,46,0.3)]">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#9EFFBF] mr-3 animate-pulse"></span>
                        Open to new opportunities
                    </div>

                    <h1 className="text-7xl md:text-[140px] font-black tracking-tighter text-white leading-[0.9] uppercase">
                        I&apos;m <span className="gradient-text">Dev Chopra</span>
                    </h1>

                    <div className="flex flex-col items-center text-center mt-4">
                        <div className="text-3xl md:text-6xl font-black text-white/80 uppercase tracking-tight flex items-center gap-3">
                            <span className="text-white">A</span> <RotatingRoles />
                        </div>
                    </div>

                    <p className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed font-medium mt-6">
                        A startup generalist who builds across product, marketing and AI. From strategy to execution, from design to deployment — I deliver.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-8">
                        <MagneticButton>
                            <Link
                                href="#work"
                                className="px-8 py-4 bg-white text-[#0B0B0F] rounded-full font-bold uppercase tracking-widest text-xs md:text-sm flex items-center space-x-2 transition-all hover:bg-white/90 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                            >
                                <span>View Portfolio</span>
                                <MoveRight className="w-5 h-5 ml-2" />
                            </Link>
                        </MagneticButton>
                        <MagneticButton>
                            <Link
                                href="https://github.com/TheDevChopra"
                                target="_blank"
                                className="px-8 py-4 bg-[#0B0B0F]/50 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-xs md:text-sm flex items-center space-x-3 transition-all hover:bg-white/10 active:scale-95"
                            >
                                <Github className="w-5 h-5 mr-2" />
                                <span>GitHub</span>
                            </Link>
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
