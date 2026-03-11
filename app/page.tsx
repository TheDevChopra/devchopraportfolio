import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/SkillsMarquee";
import Work from "@/components/Work";
import About from "@/components/About";
import Domains from "@/components/Domains";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <Hero />

            {/* About Section Preview */}
            <About />

            {/* Skills section restored as marquee */}
            <SkillsMarquee />

            {/* Work Grid */}
            <Work />

            {/* Domains Section */}
            <Domains />

            {/* Contact Section Preview */}
            <Contact />
        </div>
    );
}
