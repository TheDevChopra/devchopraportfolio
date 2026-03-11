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
        <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-[#0E3B2E]/50 selection:text-[#9EFFBF] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid z-0 opacity-10 pointer-events-none"></div>
            <main className="w-full pb-20 overflow-x-hidden relative z-10">
                <FounderHero />
                <div className="relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-forest/10" />
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
