"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

export default function DownloadResume() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-32 text-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-20 border border-forest/10 bg-paper relative overflow-hidden group"
            >
                <h2 className="text-5xl md:text-8xl font-display font-bold text-forest mb-16 tracking-tighter leading-none uppercase">Full Dossier.</h2>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
                    <a
                        href="/resume/Dev_Chopra_Resume.pdf"
                        download
                        className="px-12 py-6 bg-forest text-paper font-mono font-bold text-xs uppercase tracking-[0.2em] transition-all border border-forest hover:bg-paper hover:text-forest w-full sm:w-auto"
                    >
                        Download PDF
                    </a>

                    <a
                        href="/resume/Dev_Chopra_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-12 py-6 bg-paper text-forest font-mono font-bold text-xs uppercase tracking-[0.2em] transition-all border border-forest/20 hover:border-forest w-full sm:w-auto"
                    >
                        Open In Browser
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
