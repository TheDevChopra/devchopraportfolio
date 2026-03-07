"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";
import { ExternalLinkModal } from "@/components/ui/ExternalLinkModal";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden bg-zinc-950/30">
            <div className="container mx-auto max-w-4xl section-reveal text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8">
                    Let&apos;s Build <span className="gradient-text">Something</span>.
                </h2>

                <p className="text-muted text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                    I am always looking for interesting projects, high growth roles,
                    and collaborative opportunities.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    <Link
                        href="mailto:devchoprawork@gmail.com"
                        className="group px-8 py-5 rounded-full bg-white text-black font-bold flex items-center space-x-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Email</span>
                    </Link>

                    <ExternalLinkModal
                        url="https://www.linkedin.com/in/thedevchopra/"
                        title="LinkedIn"
                        className="group px-8 py-5 rounded-full glass border border-white/10 text-white font-bold flex items-center space-x-3 transition-all hover:bg-white/5 active:scale-95"
                    >
                        <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110" />
                        <span>LinkedIn</span>
                    </ExternalLinkModal>

                    <ExternalLinkModal
                        url="https://github.com/TheDevChopra"
                        title="GitHub"
                        className="group px-8 py-5 rounded-full glass border border-white/10 text-white font-bold flex items-center space-x-3 transition-all hover:bg-white/5 active:scale-95"
                    >
                        <Github className="w-5 h-5 text-zinc-400 group-hover:scale-110" />
                        <span>GitHub</span>
                    </ExternalLinkModal>
                </div>

                <div className="p-8 glass border border-white/5 rounded-[40px] max-w-lg mx-auto overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                    <div className="flex flex-col space-y-4">
                        <Send className="w-12 h-12 text-indigo-500 mx-auto mb-2" />
                        <h4 className="text-2xl font-bold text-white leading-tight">Fastest Response</h4>
                        <p className="text-muted">DM on LinkedIn or send an Email for the quick turnaround.</p>
                    </div>
                </div>
            </div>

            {/* Decorative Blob */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />
        </section>
    );
}
