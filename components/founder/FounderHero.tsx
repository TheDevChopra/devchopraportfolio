"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FounderHero() {
    return (
        <section className="relative min-h-[70vh] flex flex-col justify-center max-w-5xl mx-auto px-6 pt-40 pb-20 border-b border-forest/10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center space-x-3 px-4 py-1.5 border border-forest/10 bg-paper mb-8">
                    <span className="w-1.5 h-1.5 bg-forest" />
                    <span className="text-[10px] font-mono font-bold text-forest tracking-[0.2em] uppercase">Document // Professional Profile</span>
                </div>

                <h1 className="text-7xl md:text-[120px] font-display font-bold text-forest mb-12 tracking-tighter leading-[0.85] uppercase">
                    Dev <br /> Chopra
                </h1>

                <p className="text-2xl md:text-3xl text-forest/70 max-w-3xl leading-tight mb-16 font-medium tracking-tight">
                    &quot;I build products, systems and communities across product, marketing and AI.&quot;
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="#timeline"
                        className="px-10 py-5 bg-forest text-paper font-mono font-bold text-xs uppercase tracking-[0.2em] transition-all border border-forest hover:bg-paper hover:text-forest"
                    >
                        View Timeline
                    </Link>

                    <a
                        href="/resume/Dev_Chopra_Resume.pdf"
                        download
                        className="px-10 py-5 bg-paper text-forest font-mono font-bold text-xs uppercase tracking-[0.2em] transition-all border border-forest/20 hover:border-forest"
                    >
                        Download PDF
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
