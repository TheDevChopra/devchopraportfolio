import { Metadata } from "next";
import FounderHero from "@/components/founder/FounderHero";
import Timeline from "@/components/founder/Timeline";
import ProductsBuilt from "@/components/founder/ProductsBuilt";
import CurrentlyBuilding from "@/components/founder/CurrentlyBuilding";
import Education from "@/components/founder/Education";
import Achievements from "@/components/founder/Achievements";
import DownloadResume from "@/components/founder/DownloadResume";

export const metadata: Metadata = {
    title: "Dev Chopra | Resume",
    description: "Startup generalist building products across marketing, AI, and design.",
};

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-[#030303] text-zinc-400 selection:bg-indigo-500/30 selection:text-white">
            {/* Dynamic ambient glow corresponding to scroll position could be added here later */}

            <main className="w-full pb-20 overflow-x-hidden">
                <FounderHero />

                <div className="relative">
                    {/* Subtle background gradient separator */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <Timeline />
                </div>

                <ProductsBuilt />
                <CurrentlyBuilding />
                <Education />
                <Achievements />
                <DownloadResume />

            </main>
        </div>
    );
}
