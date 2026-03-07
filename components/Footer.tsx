import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { ExternalLinkModal } from "@/components/ui/ExternalLinkModal";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-white/5 relative bg-zinc-950/50">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                        DEV<span className="gradient-text tracking-widest ml-1">CHOPRA</span>
                    </Link>
                    <p className="text-muted text-sm tracking-wide uppercase">
                        Built with Next.js & TailwindCSS
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <ExternalLinkModal
                        url="https://github.com/TheDevChopra"
                        title="GitHub"
                        className="text-muted hover:text-white transition-colors p-2 glass border border-white/5 rounded-full"
                    >
                        <Github className="w-5 h-5" />
                    </ExternalLinkModal>
                    <ExternalLinkModal
                        url="https://www.linkedin.com/in/thedevchopra/"
                        title="LinkedIn"
                        className="text-muted hover:text-white transition-colors p-2 glass border border-white/5 rounded-full"
                    >
                        <Linkedin className="w-5 h-5" />
                    </ExternalLinkModal>
                </div>

                <div className="text-muted text-sm">
                    &copy; {currentYear} &mdash; All rights reserved.
                </div>
            </div>
        </footer>
    );
}
