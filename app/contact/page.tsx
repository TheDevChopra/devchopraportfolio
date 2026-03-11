"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent! Thanks for reaching out.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const contactMethods = [
        { icon: Mail, label: "Email", value: "devchoprawork@gmail.com", href: "mailto:devchoprawork@gmail.com", color: "text-[#9EFFBF]" },
        { icon: Linkedin, label: "LinkedIn", value: "thedevchopra", href: "https://www.linkedin.com/in/thedevchopra/", color: "text-[#9EFFBF]" },
        { icon: Github, label: "GitHub", value: "TheDevChopra", href: "https://github.com/TheDevChopra", color: "text-[#9EFFBF]" },
    ];

    return (
        <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-[#0E3B2E]/50 selection:text-[#9EFFBF] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid z-0 opacity-10 pointer-events-none"></div>
            <div className="container mx-auto px-6 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center max-w-4xl mx-auto"
                >
                    <div className="mb-6 inline-flex items-center space-x-2 px-6 py-2 border border-white/10 bg-white/5 rounded-full uppercase tracking-[0.4em] font-bold text-[10px] text-[#9EFFBF]">
                        Contact
                    </div>
                    <h1 className="text-6xl md:text-[140px] font-black text-white mb-8 tracking-tighter uppercase leading-none">
                        Let&apos;s Build <br /> <span className="text-[#9EFFBF]">Something Legendary.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto font-medium">
                        I am currently available for high-agency roles and selective project collaborations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-24">
                    {/* Left Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-2xl shadow-2xl glass relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0E3B2E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4 uppercase tracking-tight">
                                <MessageSquare className="w-8 h-8 text-[#9EFFBF]" />
                                Send a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#9EFFBF]/60 ml-4 font-mono">Full Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Dev Chopra"
                                            className="w-full bg-white/5 border border-white/10 rounded-sm px-8 py-4 text-white focus:outline-none focus:border-[#9EFFBF]/40 focus:bg-[#0E3B2E]/10 transition-all placeholder:text-white/20 font-medium"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-[#9EFFBF]/60 ml-4 font-mono">Email Address</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="devchoprawork@gmail.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-sm px-8 py-4 text-white focus:outline-none focus:border-[#9EFFBF]/40 focus:bg-[#0E3B2E]/10 transition-all placeholder:text-white/20 font-medium"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#9EFFBF]/60 ml-4 font-mono">Subject</label>
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        placeholder="Product Partnership"
                                        className="w-full bg-white/5 border border-white/10 rounded-sm px-8 py-4 text-white focus:outline-none focus:border-[#9EFFBF]/40 focus:bg-[#0E3B2E]/10 transition-all placeholder:text-white/20 font-medium"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#9EFFBF]/60 ml-4 font-mono">Your Message</label>
                                    <textarea
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell me about your vision..."
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-8 py-6 text-white focus:outline-none focus:border-[#9EFFBF]/40 focus:bg-[#0E3B2E]/10 transition-all placeholder:text-white/20 resize-none font-medium"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-sm bg-white text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#9EFFBF] hover:text-[#0B0B0F] transition-all flex items-center justify-center space-x-4 group/btn"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right Side: Info & Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col space-y-12 py-8"
                    >
                        <div className="space-y-10">
                            <h2 className="text-4xl font-black text-white uppercase tracking-tight leading-none mb-4">Direct Connection</h2>
                            <p className="text-xl text-white/70 max-w-md leading-relaxed font-medium">
                                Prefer a direct route? Reach out through any of these platforms for the fastest response.
                                I typically respond within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <Link
                                    key={index}
                                    href={method.href}
                                    target="_blank"
                                    className="flex items-center p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-[#9EFFBF]/30 hover:bg-white/10 transition-all w-full glass"
                                >
                                    <div className={`p-4 rounded-xl border border-white/10 group-hover:scale-110 transition-transform text-[#9EFFBF]`}>
                                        <method.icon className="w-7 h-7" />
                                    </div>
                                    <div className="ml-6 text-left">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1 font-mono">{method.label}</p>
                                        <p className="text-xl font-bold text-white tracking-tight">{method.value}</p>
                                    </div>
                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-10 h-10 rounded-full border border-[#9EFFBF]/50 flex items-center justify-center">
                                            <Send className="w-4 h-4 text-[#9EFFBF]" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="p-10 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden group glass">
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Working Time</h3>
                            <p className="text-lg text-white/70 font-medium">A builder never stops. But for official inquiries, I&apos;m online Mon - Fri, 9AM to 7PM IST.</p>
                        </div>
                    </motion.div>
                </div>

                <div className="fixed bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#0E3B2E]/20 to-transparent -z-10 pointer-events-none" />
            </div>
        </div>
    );
}
