"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

export default function DownloadResume() {
    return (
        <section className="max-w-3xl mx-auto px-6 py-32 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-12 border border-[#a855f7]/20 relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#a855f7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <h2 className="text-4xl font-bold text-white mb-8 relative z-10">Want the full resume?</h2>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
                    <a
                        href="/resume/Dev_Chopra_Resume.pdf"
                        download
                        className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)] w-full sm:w-auto justify-center"
                    >
                        <Download className="w-5 h-5" />
                        Download PDF
                    </a>

                    <a
                        href="/resume/Dev_Chopra_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors border border-white/20 w-full sm:w-auto justify-center"
                    >
                        <ExternalLink className="w-5 h-5" />
                        Open PDF
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
