"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    skill: string;
    detail: string;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 120; // Increased width for better visibility
const IMG_HEIGHT = 160;

function FlipCard({
    src,
    index,
    total,
    phase,
    skill,
    detail,
    target,
}: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 24,
            }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-xl bg-zinc-900 border border-white/5"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">Expertise</p>
                        <p className="text-xs font-bold text-white tracking-tight">{skill}</p>
                    </div>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-xl bg-zinc-950 flex flex-col items-center justify-center p-6 border border-white/10"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-4">Deep Dive</p>
                        <p className="text-xs font-bold text-white mb-3 tracking-tight">{skill}</p>
                        <p className="text-[10px] font-medium text-white/50 leading-relaxed mb-4">{detail}</p>
                        <div className="w-8 mx-auto bg-white/10 h-[2px] rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                className="h-full bg-indigo-500"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const TOTAL_IMAGES = 12; // Reduced slightly for better mobile performance
const MAX_SCROLL = 2500;

const SKILLS_LIST = [
    {
        name: "Product Strategy",
        detail: "Defining the 'what' and 'why' behind successful business products.",
        img: "https://images.unsplash.com/photo-1553484771-047a44eee27b?w=400&q=80"
    },
    {
        name: "PMF Research",
        detail: "Deep dives into user behavior to find that elusive market resonance.",
        img: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?w=400&q=80"
    },
    {
        name: "UI/UX Design",
        detail: "Crafting intuitive digital experiences that feel human and premium.",
        img: "https://images.unsplash.com/photo-1541462608141-ad516aeb3358?w=400&q=80"
    },
    {
        name: "Agentic AI",
        detail: "Building autonomous systems that think, plan, and execute tasks.",
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80"
    },
    {
        name: "Growth Strategy",
        detail: "Identifying high-leverage loops to scale users and revenue quickly.",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
    },
    {
        name: "Design Systems",
        detail: "Creating scalable, consistent UI languages for engineering teams.",
        img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80"
    },
    {
        name: "Vibe Coding",
        detail: "Leveraging AI to build at the speed of thought without overhead.",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80"
    },
    {
        name: "Market Analytics",
        detail: "Turning raw data into actionable insights for startup founders.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
    },
    {
        name: "Brand Identity",
        detail: "Forging memorable visual and verbal identities for new products.",
        img: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?w=400&q=80"
    },
    {
        name: "NFC Payments",
        detail: "Bridging the physical-digital divide with seamless tap tech.",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
    },
    {
        name: "Cybersecurity",
        detail: "Protecting user trust with robust, cloud-native security protocols.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80"
    },
    {
        name: "Operations",
        detail: "Streamlining team workflows to move faster and break less.",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80"
    },
];

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function ScrollMorphHero() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({ width: entry.contentRect.width, height: entry.contentRect.height });
            }
        };
        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);
        setContainerSize({ width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight });
        return () => observer.disconnect();
    }, []);

    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handleWheel = (e: WheelEvent) => {
            if (introPhase !== "circle") return;
            e.preventDefault();
            const newScroll = Math.min(Math.max(scrollRef.current + (e.deltaY * 0.8), 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };
        container.addEventListener("wheel", handleWheel, { passive: false });
        // Touch support
        let startY = 0;
        const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
        const onTouchMove = (e: TouchEvent) => {
            const deltaY = (startY - e.touches[0].clientY) * 1.5;
            startY = e.touches[0].clientY;
            const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };
        container.addEventListener("touchstart", onTouchStart);
        container.addEventListener("touchmove", onTouchMove);

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", onTouchStart);
            container.removeEventListener("touchmove", onTouchMove);
        };
    }, [virtualScroll, introPhase]);

    const morphProgress = useTransform(virtualScroll, [0, 800], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 45, damping: 15 });

    const scrollRotate = useTransform(virtualScroll, [800, MAX_SCROLL], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 45, damping: 15 });

    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 35, damping: 15 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 120);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    useEffect(() => {
        const t1 = setTimeout(() => setIntroPhase("line"), 300);
        const t2 = setTimeout(() => setIntroPhase("circle"), 1000);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    const scatterPositions = useMemo(() => {
        return SKILLS_LIST.map(() => ({
            x: (Math.random() - 0.5) * 2000,
            y: (Math.random() - 0.5) * 1200,
            rotation: (Math.random() - 0.5) * 360,
            scale: 0.4,
            opacity: 0,
        }));
    }, []);

    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const uM = smoothMorph.on("change", setMorphValue);
        const uR = smoothScrollRotate.on("change", setRotateValue);
        const uP = smoothMouseX.on("change", setParallaxValue);
        return () => { uM(); uR(); uP(); };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [30, 0]);

    return (
        <section ref={containerRef} id="skills" className="relative w-full h-screen bg-[#030303] overflow-hidden">
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">

                {/* Intro Message */}
                <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                    <motion.h3
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphValue < 0.4 ? { opacity: 1 - morphValue * 2.5, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase"
                    >
                        Mastering the Stack
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphValue < 0.4 ? { opacity: 0.6 - morphValue } : { opacity: 0 }}
                        className="flex flex-col items-center"
                    >
                        <p className="text-sm font-bold tracking-[0.4em] text-white/40 mb-4">SCROLL TO UNLOCK EXPERIENCE</p>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
                        />
                    </motion.div>
                </div>

                {/* Header Content when Morphing starts */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[12%] z-50 flex flex-col items-center justify-center text-center pointer-events-none px-6"
                >
                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase">
                        Versatile <span className="gradient-text">Generalist</span>
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
                        Moving across disciplines with precision. <br />
                        I build products with high agency and deep technical understanding.
                    </p>
                </motion.div>

                {/* Card Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {SKILLS_LIST.map((skill, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const spacing = 140;
                            const totalW = TOTAL_IMAGES * spacing;
                            target = { x: i * spacing - totalW / 2 + spacing / 2, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            const isMobile = containerSize.width < 768;
                            const circleRadius = isMobile ? 220 : 380;
                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = { x: Math.cos(circleRad) * circleRadius, y: Math.sin(circleRad) * circleRadius, rotation: circleAngle + 90 };

                            const arcRadius = containerSize.width * (isMobile ? 1.4 : 1.1);
                            const arcCenterY = containerSize.height * 0.4 + arcRadius;
                            const spread = isMobile ? 110 : 140;
                            const start = -90 - (spread / 2);
                            const step = spread / (TOTAL_IMAGES - 1);
                            const currentAngle = start + (i * step) + ((-rotateValue / 360) * spread * 1.5);
                            const arcRad = (currentAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue * (1 + i * 0.05),
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentAngle + 90,
                                scale: isMobile ? 1.6 : 2.0,
                            };

                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={skill.img}
                                index={i}
                                total={TOTAL_IMAGES}
                                skill={skill.name}
                                detail={skill.detail}
                                phase={introPhase}
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
            {/* Background noise texture */}
            <div className="absolute inset-0 noise-overlay opacity-5 pointer-events-none" />
        </section>
    );
}
