import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { ExternalLinkModal } from "@/components/ui/ExternalLinkModal";

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
                    <ExternalLinkModal
                        url="https://github.com/TheDevChopra"
                        title="GitHub"
                        className="p-3 border border-forest/10 text-forest/60 hover:text-forest hover:bg-forest/5 transition-all"
                    >
                        <Github className="w-5 h-5" />
                    </ExternalLinkModal>
                    <ExternalLinkModal
                        url="https://www.linkedin.com/in/thedevchopra/"
                        title="LinkedIn"
                        className="p-3 border border-forest/10 text-forest/60 hover:text-forest hover:bg-forest/5 transition-all"
                    >
                        <Linkedin className="w-5 h-5" />
                    </ExternalLinkModal>
                </div>

                <div className="mono-label text-forest/40">
                    &copy; {currentYear} // All rights reserved.
                </div>
            </div>
        </footer>
    );
}
