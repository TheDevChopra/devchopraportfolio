"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FounderHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center max-w-5xl mx-auto px-6 pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase mb-6 block">
                    Generalist • Product Builder • Growth Operator
                </span>

                <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight relative inline-block">
                    Dev Chopra
                    <motion.div
                        className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] rounded-full"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                        style={{ originX: 0 }}
                    />
                </h1>

                <p className="text-xl sm:text-2xl text-zinc-300 max-w-3xl leading-relaxed mb-12 font-light">
                    &quot;I build products, systems and communities across product, marketing and AI.&quot;
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                        href="#projects"
                        className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:scale-105 transition-all duration-300"
                    >
                        View Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                        href="/resume/Dev_Chopra_Resume.pdf"
                        download
                        className="group relative flex items-center justify-center gap-3 px-8 py-4 glass text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
                    >
                        Download Resume
                        <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
