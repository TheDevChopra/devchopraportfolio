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
                    className="text-3xl md:text-5xl font-bold gradient-text"
                >
                    {roles[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col space-y-6"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full glass border border-white/5 text-xs font-medium tracking-widest text-muted uppercase animate-fade-in">
                        Now Available for New Ventures
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white">
                        Dev <br /> Chopra
                    </h1>

                    <div className="flex flex-col">
                        <h2 className="text-2xl md:text-3xl text-muted font-medium max-w-lg leading-tight">
                            A startup generalist who builds across product, marketing and AI.
                        </h2>
                        <RotatingRoles />
                    </div>

                    <p className="text-muted text-lg max-w-md leading-relaxed">
                        I build products, brands and systems, switching between marketing, product and code when required.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <MagneticButton>
                            <Link
                                href="#work"
                                className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
                            >
                                <span>View Work</span>
                                <MoveRight className="w-5 h-5 ml-2" />
                            </Link>
                        </MagneticButton>
                        <MagneticButton>
                            <Link
                                href="https://github.com/TheDevChopra"
                                target="_blank"
                                className="px-8 py-4 rounded-full glass border border-white/10 text-white font-bold flex items-center space-x-3 transition-all hover:bg-white/5 active:scale-95"
                            >
                                <Github className="w-5 h-5 mr-2" />
                                <span>GitHub</span>
                            </Link>
                        </MagneticButton>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
                >
                    {/* Animated Blob */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-[80px] animate-blob mix-blend-screen" />
                        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-[100px] animate-pulse mix-blend-soft-light" />
                    </div>

                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative p-1 rounded-3xl glass shadow-2xl border border-white/10 overflow-hidden"
                        >
                            <div className="w-[280px] h-[350px] md:w-[400px] md:h-[500px] bg-zinc-900 overflow-hidden rounded-[calc(1.5rem-2px)] relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10 z-0" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                    <div className="text-4xl font-bold text-white mb-2 leading-tight">High Agency</div>
                                    <div className="text-xl text-muted">Execution across design, growth and AI.</div>
                                </div>
                                {/* Visual abstract details */}
                                <div className="absolute top-10 right-10 w-24 h-24 border border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative dots/grid */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#030303] to-transparent z-0" />
        </section>
    );
}
