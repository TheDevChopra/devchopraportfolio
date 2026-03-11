"use client";

import { motion } from "framer-motion";

const timelineData = [
    {
        date: "Jan 2025 – Present",
        role: "Founder's Office — Product & Growth",
        company: "Veena Studio",
        location: "Delaware, USA · Remote",
        desc: [
            "Embedded directly with founders — own product strategy, UI/UX design, and go-to-market for a web & desktop DAW.",
            "Led full PMF research, ICP mapping, and positioning; built the entire social media marketing system from zero.",
            "Shipping product iterations in rapid AI-assisted cycles — design to prototype to feedback in days, not weeks."
        ]
    },
    {
        date: "Jun 2023 – Jan 2025",
        role: "Chief Marketing Manager",
        company: "Healing By Vanshika",
        location: "New Delhi",
        desc: [
            "Built the brand's entire digital presence from nothing — website, identity, voice, content, and acquisition funnels.",
            "Managed a nutrition & wellness brand's community growth, content production, and client conversion tracking."
        ]
    },
    {
        date: "Jan 2023 – Jun 2023",
        role: "Social Media & Brand Manager",
        company: "Venus Studio",
        location: "Delhi",
        desc: ["Defined brand strategy and visual style; led editorial and creative output for a photography studio."]
    },
    {
        date: "Jan 2022 – Jan 2023",
        role: "Content & Digital Strategy Intern",
        company: "Unschool · Dissent Times · IMUN & Others",
        location: "Remote",
        desc: ["Year-long rotational internships in content creation, research, and digital strategy across multiple orgs."]
    }
];

export default function Timeline() {
    return (
        <section id="timeline" className="py-24 px-6 bg-paper">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col gap-4 mb-20 border-b border-forest/10 pb-8">
                    <h3 className="mono-label">Chronology // Career Trace</h3>
                    <h2 className="text-6xl md:text-8xl font-display font-bold text-forest uppercase tracking-tighter">Timeline.</h2>
                </div>

                <div className="relative border-l border-forest/10 ml-4 md:ml-0">
                    {timelineData.map((item, index) => (
                        <div key={index} className="relative pl-12 pb-24 last:pb-0">
                            {/* Static Square Marker */}
                            <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] bg-forest" />

                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 mt-1">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="mono-label px-3 py-1 border border-forest/10 text-forest/40">
                                            {item.date}
                                        </span>
                                        <span className="mono-label text-[10px] tracking-widest text-forest opacity-30">// 0{index + 1}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-display font-bold text-forest uppercase tracking-tighter leading-none">
                                        {item.role}
                                    </h3>
                                    <p className="text-xl font-bold text-forest/40 uppercase tracking-widest leading-none">
                                        {item.company}
                                    </p>
                                </div>
                                <div className="text-left md:text-right">
                                    <span className="mono-label text-forest/30 uppercase">{item.location}</span>
                                </div>
                            </div>

                            <ul className="space-y-6 max-w-3xl">
                                {item.desc.map((d, i) => (
                                    <li key={i} className="flex items-start gap-4 text-forest/70 text-lg font-medium leading-relaxed">
                                        <div className="w-1.5 h-1.5 bg-forest/10 mt-2.5 shrink-0" />
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
