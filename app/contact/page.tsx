"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MessageSquare, Phone } from "lucide-react";
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
        // In a real app, this would send data to an API
        alert("Message sent! Thanks for reaching out.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const contactMethods = [
        { icon: Mail, label: "Email", value: "devchoprawork@gmail.com", href: "mailto:devchoprawork@gmail.com", color: "text-red-400" },
        { icon: Linkedin, label: "LinkedIn", value: "thedevchopra", href: "https://www.linkedin.com/in/thedevchopra/", color: "text-blue-400" },
        { icon: Github, label: "GitHub", value: "TheDevChopra", href: "https://github.com/TheDevChopra", color: "text-zinc-400" },
    ];

    return (
        <div className="container mx-auto px-6 py-24 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 text-center max-w-4xl mx-auto"
            >
                <div className="mb-6 inline-flex items-center space-x-2 px-6 py-2 rounded-full glass border border-white/10 animate-fade-in uppercase tracking-[0.4em] font-black text-xs text-white/40">
                    Contact
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
                    Let&apos;s Build something <span className="gradient-text">legendary</span>.
                </h1>
                <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl mx-auto">
                    I am currently available for high-agency roles and selective project collaborations.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-24">
                {/* Left Side: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="p-8 md:p-12 glass border border-white/10 rounded-[40px] shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

                    <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
                        <MessageSquare className="w-8 h-8 text-indigo-400" />
                        Send a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-white/50 ml-4">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Dev Chopra"
                                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all placeholder:text-white/20"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-white/50 ml-4">Email Address</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="devchoprawork@gmail.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all placeholder:text-white/20"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-white/50 ml-4">Subject</label>
                            <input
                                type="text"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                placeholder="Product Partnership"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all placeholder:text-white/20"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-white/50 ml-4">Your Message</label>
                            <textarea
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Tell me about your vision..."
                                className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all placeholder:text-white/20 resize-none"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-5 rounded-full bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-4 shadow-xl shadow-white/10 group/btn"
                        >
                            <span>Send Message</span>
                            <Send className="w-5 h-5 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
                        </button>
                    </form>
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
                        <p className="text-xl text-muted max-w-md leading-relaxed">
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
                                className="flex items-center p-6 glass border border-white/5 rounded-3xl group hover:border-white/20 hover:bg-white/5 transition-all w-full"
                            >
                                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${method.color}`}>
                                    <method.icon className="w-7 h-7" />
                                </div>
                                <div className="ml-6 text-left">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{method.label}</p>
                                    <p className="text-xl font-bold text-white tracking-tight">{method.value}</p>
                                </div>
                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                                        <Send className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="p-10 glass border border-white/5 rounded-3xl bg-indigo-500/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 blur-sm group-hover:opacity-20 transition-opacity">
                            <MessageSquare className="w-32 h-32 text-indigo-500" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 uppercase">Working Time</h3>
                        <p className="text-lg text-muted">A builder never stops. But for official inquiries, I&apos;m online Mon - Fri, 9AM to 7PM IST.</p>
                    </div>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="fixed bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-indigo-500/5 to-transparent -z-10 pointer-events-none" />
        </div>
    );
}
