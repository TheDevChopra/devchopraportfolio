import { Download } from "lucide-react";

export default function ResumePage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-20 text-white relative">

            {/* Optional: Floating Download Button */}
            <a
                href="/resume/Dev_Chopra_Resume.pdf"
                download
                className="fixed bottom-8 right-8 bg-white text-black p-4 rounded-full shadow-lg hover:scale-105 hover:bg-zinc-200 transition-all z-50 flex items-center gap-2 font-medium"
                title="Download PDF Resume"
            >
                <Download size={20} />
                <span className="hidden sm:inline">Download PDF</span>
            </a>

            <h1 className="text-5xl font-bold mb-2">Dev Chopra</h1>

            <p className="text-sm text-zinc-400 mb-8">
                GENERALIST · PRODUCT MANAGER · BUILDER · GROWTH HACKER · DESIGNER · VIBECODER
            </p>

            <p className="text-zinc-400 mb-10">
                Multi-skilled · Multi-tasker · I adapt to what you need.
            </p>

            <p className="text-zinc-400 mb-12">
                Delhi, India · me@devchopra.life · +91 96544 83804 · linkedin.com/in/thedevchopra · devchopra.life
            </p>

            <section className="mb-14">
                <h2 className="text-2xl font-semibold mb-4">Summary</h2>

                <p className="text-zinc-300 leading-relaxed">
                    I don&apos;t wait for permission to build. I&apos;ve shipped 5+ products across fintech, health, music tech, and AI — entirely as a solo vibecoder using AI-native tools. I design interfaces, craft marketing strategy, research markets, and code prototypes — all in one loop. Founded an 800+ professional marketers community. Recognised at the Indian Startup School. Currently embedded in the Founder&apos;s Office at Veena Studio and studying Product + Agentic AI at BITSoM. I&apos;m the person a scrappy early-stage team needs before they can afford three hires.
                </p>
            </section>

            <section className="mb-14">
                <h2 className="text-2xl font-semibold mb-6">Experience</h2>

                <div className="mb-6">
                    <p className="font-medium">Founder&apos;s Office — Product & Growth</p>
                    <p className="text-zinc-400">Veena Studio · Delaware, USA · Remote</p>

                    <ul className="list-disc ml-6 text-zinc-300 mt-2 space-y-2">
                        <li>Embedded directly with founders — own product strategy, UI/UX design, and go-to-market for a web & desktop DAW.</li>
                        <li>Led full PMF research, ICP mapping, and positioning; built the entire social media marketing system from zero.</li>
                        <li>Shipping product iterations in rapid AI-assisted cycles — design to prototype to feedback in days, not weeks.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <p className="font-medium">Chief Marketing Manager</p>
                    <p className="text-zinc-400">Healing By Vanshika · New Delhi</p>

                    <ul className="list-disc ml-6 text-zinc-300 mt-2 space-y-2">
                        <li>Built the brand&apos;s entire digital presence from nothing — website, identity, voice, content, and acquisition funnels.</li>
                        <li>Managed a nutrition & wellness brand&apos;s community growth, content production, and client conversion tracking.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <p className="font-medium">Social Media & Brand Manager</p>
                    <p className="text-zinc-400">Venus Studio · Delhi</p>

                    <ul className="list-disc ml-6 text-zinc-300 mt-2 space-y-2">
                        <li>Defined brand strategy and visual style; led editorial and creative output for a photography studio.</li>
                    </ul>
                </div>

                <div>
                    <p className="font-medium">Content & Digital Strategy Intern</p>
                    <p className="text-zinc-400">Unschool · Dissent Times · IMUN & Others</p>

                    <ul className="list-disc ml-6 text-zinc-300 mt-2 space-y-2">
                        <li>Year-long rotational internships in content creation, research, and digital strategy across multiple orgs.</li>
                    </ul>
                </div>
            </section>

            <section className="mb-14">
                <h2 className="text-2xl font-semibold mb-4">Products Built — All Solo-Built Using AI-Native Tools</h2>

                <ul className="space-y-3 text-zinc-300">
                    <li><strong>TapQR</strong> — https://www.tapqr.live/</li>
                    <li><strong>Altme</strong> — https://altme-devchopra.lovable.app/</li>
                    <li><strong>Nivaari Health</strong> — https://nivaari-health.lovable.app/</li>
                    <li><strong>Veena Studio DAW</strong> — https://www.veena.studio/</li>
                    <li><strong>AuraScore</strong> — https://auraappbydev.netlify.app/</li>
                </ul>

                <p className="text-zinc-400 mt-4">
                    In Research: Narranova Labs (AI SaaS — intelligent content & structured automation) · Hublix (smart home infra for Indian households) · Compliance AI (AI for CA, filings & regulatory work)
                </p>
            </section>

            <section className="mb-14">
                <h2 className="text-2xl font-semibold mb-4">Education</h2>

                <p className="text-zinc-300 mb-2">
                    Product Management with Gen AI & Agentic AI — BITSoM
                </p>

                <p className="text-zinc-300">
                    Bachelor of Computer Applications — UPES Online
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Achievements & Certifications</h2>

                <ul className="list-disc ml-6 text-zinc-300 space-y-2">
                    <li>Recognised among the Top 40 Startup Ideas at the Indian Startup School</li>
                    <li>Founder of an 800+ member Professional Marketers community</li>
                    <li>Elected Class Representative for a batch of 255+ students</li>
                    <li>Drove measurable social media growth starting at age 18</li>
                    <li>Google Data Analytics Certificate</li>
                    <li>Google Cybersecurity Certificate</li>
                    <li>Cybersecurity Internship & Training Certificate — Corizo</li>
                </ul>
            </section>

        </main>
    );
}
