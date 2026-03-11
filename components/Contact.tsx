"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";
import { ExternalLinkModal } from "@/components/ui/ExternalLinkModal";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden bg-[#0B0B0F]">
            <div className="absolute inset-0 bg-grid z-0 opacity-10 pointer-events-none"></div>
            <div className="container mx-auto max-w-4xl section-reveal text-center relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <h3 className="mono-label text-white/50 mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 inline-block">Index: 05 // Connectivity</h3>
                    <h2 className="text-7xl md:text-9xl lg:text-[140px] font-display font-black tracking-tighter text-white mb-12 uppercase leading-none">
                        Let&apos;s Build <br /><span className="text-[#9EFFBF]">Together</span>.
                    </h2>

                    <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        Currently looking for interesting projects, high growth roles,
                        and collaborative opportunities.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mb-24">
                    <Link
                        href="mailto:devchoprawork@gmail.com"
                        className="group px-10 py-5 bg-white text-[#0B0B0F] rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:bg-white/90 active:scale-95"
                    >
                        <span>Send Email</span>
                    </Link>

                    <ExternalLinkModal
                        url="https://www.linkedin.com/in/thedevchopra/"
                        title="LinkedIn"
                        className="group px-10 py-5 bg-[#0B0B0F]/50 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:bg-white/10 active:scale-95"
                    >
                        <span>LinkedIn</span>
                    </ExternalLinkModal>

                    <ExternalLinkModal
                        url="https://github.com/TheDevChopra"
                        title="GitHub"
                        className="group px-10 py-5 bg-[#0B0B0F]/50 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:bg-white/10 active:scale-95"
                    >
                        <span>GitHub</span>
                    </ExternalLinkModal>
                </div>

                <div className="p-12 glass border border-white/10 rounded-2xl max-w-lg mx-auto overflow-hidden relative group shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0E3B2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                    <div className="flex flex-col space-y-6 relative z-10">
                        <span className="mono-label text-[#9EFFBF]">Status: Fast Response Enabled</span>
                        <h4 className="text-3xl font-display font-bold text-white uppercase tracking-tighter leading-none">Response Time</h4>
                        <p className="text-white/60 font-medium">DM on LinkedIn or send an Email for the quick turnaround.</p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#0E3B2E]/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
        </section>
    );
}
