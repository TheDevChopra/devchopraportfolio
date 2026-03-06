(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/scroll-morph-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollMorphHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// --- FlipCard Component ---
const IMG_WIDTH = 120; // Increased width for better visibility
const IMG_HEIGHT = 160;
function FlipCard({ src, index, total, phase, skill, detail, target }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: {
            x: target.x,
            y: target.y,
            rotate: target.rotation,
            scale: target.scale,
            opacity: target.opacity
        },
        transition: {
            type: "spring",
            stiffness: 40,
            damping: 15
        },
        style: {
            position: "absolute",
            width: IMG_WIDTH,
            height: IMG_HEIGHT,
            transformStyle: "preserve-3d",
            perspective: "1000px"
        },
        className: "cursor-pointer group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative h-full w-full",
            style: {
                transformStyle: "preserve-3d"
            },
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 260,
                damping: 20
            },
            whileHover: {
                rotateY: 180
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-xl bg-zinc-900 border border-white/5",
                    style: {
                        backfaceVisibility: "hidden"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: src,
                            alt: `hero-${index}`,
                            className: "h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-black uppercase tracking-widest text-white/60 mb-1",
                                    children: "Expertise"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold text-white tracking-tight",
                                    children: skill
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-xl bg-zinc-950 flex flex-col items-center justify-center p-6 border border-white/10",
                    style: {
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-4",
                                children: "Deep Dive"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold text-white mb-3 tracking-tight",
                                children: skill
                            }, void 0, false, {
                                fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-medium text-white/50 leading-relaxed mb-4",
                                children: detail
                            }, void 0, false, {
                                fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                lineNumber: 85,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 mx-auto bg-white/10 h-[2px] rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        width: 0
                                    },
                                    whileInView: {
                                        width: "100%"
                                    },
                                    className: "h-full bg-indigo-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                    lineNumber: 87,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                lineNumber: 86,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/scroll-morph-hero.tsx",
            lineNumber: 55,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/scroll-morph-hero.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_c = FlipCard;
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
    }
];
const lerp = (start, end, t)=>start * (1 - t) + end * t;
function ScrollMorphHero() {
    _s();
    const [introPhase, setIntroPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("scatter");
    const [containerSize, setContainerSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollMorphHero.useEffect": ()=>{
            if (!containerRef.current) return;
            const handleResize = {
                "ScrollMorphHero.useEffect.handleResize": (entries)=>{
                    for (const entry of entries){
                        setContainerSize({
                            width: entry.contentRect.width,
                            height: entry.contentRect.height
                        });
                    }
                }
            }["ScrollMorphHero.useEffect.handleResize"];
            const observer = new ResizeObserver(handleResize);
            observer.observe(containerRef.current);
            setContainerSize({
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight
            });
            return ({
                "ScrollMorphHero.useEffect": ()=>observer.disconnect()
            })["ScrollMorphHero.useEffect"];
        }
    }["ScrollMorphHero.useEffect"], []);
    const virtualScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollMorphHero.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const handleWheel = {
                "ScrollMorphHero.useEffect.handleWheel": (e)=>{
                    if (introPhase !== "circle") return;
                    e.preventDefault();
                    const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY * 0.8, 0), MAX_SCROLL);
                    scrollRef.current = newScroll;
                    virtualScroll.set(newScroll);
                }
            }["ScrollMorphHero.useEffect.handleWheel"];
            container.addEventListener("wheel", handleWheel, {
                passive: false
            });
            // Touch support
            let startY = 0;
            const onTouchStart = {
                "ScrollMorphHero.useEffect.onTouchStart": (e)=>{
                    startY = e.touches[0].clientY;
                }
            }["ScrollMorphHero.useEffect.onTouchStart"];
            const onTouchMove = {
                "ScrollMorphHero.useEffect.onTouchMove": (e)=>{
                    const deltaY = (startY - e.touches[0].clientY) * 1.5;
                    startY = e.touches[0].clientY;
                    const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
                    scrollRef.current = newScroll;
                    virtualScroll.set(newScroll);
                }
            }["ScrollMorphHero.useEffect.onTouchMove"];
            container.addEventListener("touchstart", onTouchStart);
            container.addEventListener("touchmove", onTouchMove);
            return ({
                "ScrollMorphHero.useEffect": ()=>{
                    container.removeEventListener("wheel", handleWheel);
                    container.removeEventListener("touchstart", onTouchStart);
                    container.removeEventListener("touchmove", onTouchMove);
                }
            })["ScrollMorphHero.useEffect"];
        }
    }["ScrollMorphHero.useEffect"], [
        virtualScroll,
        introPhase
    ]);
    const morphProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(virtualScroll, [
        0,
        800
    ], [
        0,
        1
    ]);
    const smoothMorph = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(morphProgress, {
        stiffness: 45,
        damping: 15
    });
    const scrollRotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(virtualScroll, [
        800,
        MAX_SCROLL
    ], [
        0,
        360
    ]);
    const smoothScrollRotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollRotate, {
        stiffness: 45,
        damping: 15
    });
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const smoothMouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, {
        stiffness: 35,
        damping: 15
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollMorphHero.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const handleMouseMove = {
                "ScrollMorphHero.useEffect.handleMouseMove": (e)=>{
                    const rect = container.getBoundingClientRect();
                    const normalizedX = (e.clientX - rect.left) / rect.width * 2 - 1;
                    mouseX.set(normalizedX * 120);
                }
            }["ScrollMorphHero.useEffect.handleMouseMove"];
            container.addEventListener("mousemove", handleMouseMove);
            return ({
                "ScrollMorphHero.useEffect": ()=>container.removeEventListener("mousemove", handleMouseMove)
            })["ScrollMorphHero.useEffect"];
        }
    }["ScrollMorphHero.useEffect"], [
        mouseX
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollMorphHero.useEffect": ()=>{
            const t1 = setTimeout({
                "ScrollMorphHero.useEffect.t1": ()=>setIntroPhase("line")
            }["ScrollMorphHero.useEffect.t1"], 500);
            const t2 = setTimeout({
                "ScrollMorphHero.useEffect.t2": ()=>setIntroPhase("circle")
            }["ScrollMorphHero.useEffect.t2"], 2000);
            return ({
                "ScrollMorphHero.useEffect": ()=>{
                    clearTimeout(t1);
                    clearTimeout(t2);
                }
            })["ScrollMorphHero.useEffect"];
        }
    }["ScrollMorphHero.useEffect"], []);
    const scatterPositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScrollMorphHero.useMemo[scatterPositions]": ()=>{
            return SKILLS_LIST.map({
                "ScrollMorphHero.useMemo[scatterPositions]": ()=>({
                        x: (Math.random() - 0.5) * 2000,
                        y: (Math.random() - 0.5) * 1200,
                        rotation: (Math.random() - 0.5) * 360,
                        scale: 0.4,
                        opacity: 0
                    })
            }["ScrollMorphHero.useMemo[scatterPositions]"]);
        }
    }["ScrollMorphHero.useMemo[scatterPositions]"], []);
    const [morphValue, setMorphValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [rotateValue, setRotateValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [parallaxValue, setParallaxValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollMorphHero.useEffect": ()=>{
            const uM = smoothMorph.on("change", setMorphValue);
            const uR = smoothScrollRotate.on("change", setRotateValue);
            const uP = smoothMouseX.on("change", setParallaxValue);
            return ({
                "ScrollMorphHero.useEffect": ()=>{
                    uM();
                    uR();
                    uP();
                }
            })["ScrollMorphHero.useEffect"];
        }
    }["ScrollMorphHero.useEffect"], [
        smoothMorph,
        smoothScrollRotate,
        smoothMouseX
    ]);
    const contentOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothMorph, [
        0.8,
        1
    ], [
        0,
        1
    ]);
    const contentY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothMorph, [
        0.8,
        1
    ], [
        30,
        0
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        id: "skills",
        className: "relative w-full h-screen bg-[#030303] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full w-full flex-col items-center justify-center perspective-1000",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                initial: {
                                    opacity: 0,
                                    y: 20,
                                    filter: "blur(10px)"
                                },
                                animate: introPhase === "circle" && morphValue < 0.4 ? {
                                    opacity: 1 - morphValue * 2.5,
                                    y: 0,
                                    filter: "blur(0px)"
                                } : {
                                    opacity: 0,
                                    filter: "blur(10px)"
                                },
                                transition: {
                                    duration: 1
                                },
                                className: "text-4xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase",
                                children: "Mastering the Stack"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                lineNumber: 278,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: introPhase === "circle" && morphValue < 0.4 ? {
                                    opacity: 0.6 - morphValue
                                } : {
                                    opacity: 0
                                },
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold tracking-[0.4em] text-white/40 mb-4",
                                        children: "SCROLL TO UNLOCK EXPERIENCE"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                        lineNumber: 291,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            y: [
                                                0,
                                                10,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity
                                        },
                                        className: "w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                        lineNumber: 292,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                lineNumber: 286,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                        lineNumber: 277,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity: contentOpacity,
                            y: contentY
                        },
                        className: "absolute top-[12%] z-50 flex flex-col items-center justify-center text-center pointer-events-none px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase",
                                children: [
                                    "Versatile ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text",
                                        children: "Generalist"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                        lineNumber: 306,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                lineNumber: 305,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-white/50 max-w-2xl leading-relaxed",
                                children: [
                                    "Moving across disciplines with precision. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                        lineNumber: 309,
                                        columnNumber: 67
                                    }, this),
                                    "I build products with high agency and deep technical understanding."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                lineNumber: 308,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                        lineNumber: 301,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-center w-full h-full",
                        children: SKILLS_LIST.map((skill, i)=>{
                            let target = {
                                x: 0,
                                y: 0,
                                rotation: 0,
                                scale: 1,
                                opacity: 1
                            };
                            if (introPhase === "scatter") {
                                target = scatterPositions[i];
                            } else if (introPhase === "line") {
                                const spacing = 140;
                                const totalW = TOTAL_IMAGES * spacing;
                                target = {
                                    x: i * spacing - totalW / 2 + spacing / 2,
                                    y: 0,
                                    rotation: 0,
                                    scale: 1,
                                    opacity: 1
                                };
                            } else {
                                const isMobile = containerSize.width < 768;
                                const circleRadius = isMobile ? 220 : 380;
                                const circleAngle = i / TOTAL_IMAGES * 360;
                                const circleRad = circleAngle * Math.PI / 180;
                                const circlePos = {
                                    x: Math.cos(circleRad) * circleRadius,
                                    y: Math.sin(circleRad) * circleRadius,
                                    rotation: circleAngle + 90
                                };
                                const arcRadius = containerSize.width * (isMobile ? 1.4 : 1.1);
                                const arcCenterY = containerSize.height * 0.4 + arcRadius;
                                const spread = isMobile ? 110 : 140;
                                const start = -90 - spread / 2;
                                const step = spread / (TOTAL_IMAGES - 1);
                                const currentAngle = start + i * step + -rotateValue / 360 * spread * 1.5;
                                const arcRad = currentAngle * Math.PI / 180;
                                const arcPos = {
                                    x: Math.cos(arcRad) * arcRadius + parallaxValue * (1 + i * 0.05),
                                    y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                    rotation: currentAngle + 90,
                                    scale: isMobile ? 1.6 : 2.0
                                };
                                target = {
                                    x: lerp(circlePos.x, arcPos.x, morphValue),
                                    y: lerp(circlePos.y, arcPos.y, morphValue),
                                    rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                    scale: lerp(1, arcPos.scale, morphValue),
                                    opacity: 1
                                };
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlipCard, {
                                src: skill.img,
                                index: i,
                                total: TOTAL_IMAGES,
                                skill: skill.name,
                                detail: skill.detail,
                                phase: introPhase,
                                target: target
                            }, i, false, {
                                fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                                lineNumber: 356,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                        lineNumber: 315,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                lineNumber: 274,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 noise-overlay opacity-5 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/ui/scroll-morph-hero.tsx",
                lineNumber: 371,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/scroll-morph-hero.tsx",
        lineNumber: 273,
        columnNumber: 9
    }, this);
}
_s(ScrollMorphHero, "X7I4+6g6PbTEudjwA3ll4hJZkhM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = ScrollMorphHero;
var _c, _c1;
__turbopack_context__.k.register(_c, "FlipCard");
__turbopack_context__.k.register(_c1, "ScrollMorphHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/skills/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$morph$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/scroll-morph-hero.tsx [app-client] (ecmascript)");
"use client";
;
;
function SkillsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full min-h-screen pt-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$scroll$2d$morph$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/skills/page.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/skills/page.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = SkillsPage;
var _c;
__turbopack_context__.k.register(_c, "SkillsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_40b3dfc8._.js.map