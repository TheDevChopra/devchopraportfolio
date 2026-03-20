import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 px-6 border-t border-forest/10 relative bg-paper">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-forest uppercase">
                        Dev Chopra
                    </Link>
                    <p className="mono-label text-forest/40">
                        Built with Next.js // Technical Minimalist v1.0
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    <a
                        href="https://github.com/TheDevChopra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-forest/10 text-forest/60 hover:text-forest hover:bg-forest/5 transition-all"
                        title="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/thedevchopra/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-forest/10 text-forest/60 hover:text-forest hover:bg-forest/5 transition-all"
                        title="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>

                <div className="mono-label text-forest/40">
                    &copy; {currentYear} {"//"} All rights reserved.
                </div>
            </div>
        </footer>
    );
}
