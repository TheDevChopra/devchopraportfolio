"use client";

const skillsByCategory = [
    {
        category: "Marketing",
        skills: ["Growth Hacking", "SEO", "Paid Ads", "Content Strategy", "Email Marketing", "Brand Identity", "Social Media"],
    },
    {
        category: "Product & Operations",
        skills: ["Product Strategy", "User Research", "Agile", "CRM", "Automations", "Data Analysis", "Scaling"],
    },
    {
        category: "Design & AI Tools",
        skills: ["UI/UX Design", "Figma", "Canva", "Midjourney", "ChatGPT", "Claude", "Vibe Coding", "AI Workflows"],
    },
];

const SkillMarquee = ({ skills, reverse = false }: { skills: string[], reverse?: boolean }) => {
    return (
        <div className="relative flex overflow-x-hidden group">
            <div className={`py-4 animate-marquee flex items-center gap-8 whitespace-nowrap ${reverse ? 'flex-row-reverse animate-marquee-reverse' : ''}`}>
                {Array(4).fill(0).map((_, i) => (
                    <div key={i} className="flex items-center gap-8">
                        {skills.map((skill, j) => (
                            <span
                                key={j}
                                className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-700 hover:text-white transition-colors cursor-default select-none uppercase"
                            >
                                {skill}
                                <span className="mx-8 text-indigo-500/30 font-extrabold text-4xl leading-none">/</span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 overflow-hidden relative">
            <div className="container mx-auto max-w-6xl section-reveal mb-16">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted mb-4 text-center">Skillset</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                    Building with <span className="gradient-text">Modern Stacks</span>.
                </h2>
            </div>

            <div className="space-y-12">
                {skillsByCategory.map((category, index) => (
                    <SkillMarquee
                        key={index}
                        skills={category.skills}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </div>

            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
        .group:hover .animate-marquee,
        .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-indigo-500/5 blur-[120px] -z-10" />
        </section>
    );
}
