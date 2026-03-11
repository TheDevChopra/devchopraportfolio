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
        <div className="relative flex overflow-x-hidden group border-t border-b border-forest/10 bg-paper">
            <div className={`py-8 animate-marquee flex items-center gap-12 whitespace-nowrap ${reverse ? 'flex-row-reverse animate-marquee-reverse' : ''}`}>
                {Array(4).fill(0).map((_, i) => (
                    <div key={i} className="flex items-center gap-12">
                        {skills.map((skill, j) => (
                            <span
                                key={j}
                                className="text-3xl md:text-5xl font-display font-bold text-forest/20 hover:text-forest transition-colors cursor-default select-none uppercase tracking-tighter"
                            >
                                {skill}
                                <span className="mx-12 text-forest/10 font-mono text-2xl">//</span>
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
        <section id="skills" className="py-24 px-6 overflow-hidden relative bg-paper">
            <div className="container mx-auto max-w-6xl section-reveal mb-24 text-left">
                <h3 className="mono-label mb-6">Process // Technical Stacks</h3>
                <h2 className="text-6xl md:text-8xl font-display font-bold text-forest uppercase tracking-tighter leading-none">
                    Capabilities.
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

            {/* Background decoration removed */}
        </section>
    );
}
