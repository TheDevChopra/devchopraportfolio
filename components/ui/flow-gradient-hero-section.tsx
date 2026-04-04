"use client";
import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface LiquidGradientProps {
    title?: string;
    showPauseButton?: boolean;
    ctaText?: string;
    onCtaClick?: () => void;
}

const ROLES = ["Product Manager", "Designer", "VibeCoder", "Builder"];

class TouchTexture {
    size = 64; width = 64; height = 64; maxAge = 64; radius = 0.1; speed = 1 / 64;
    trail: any[] = []; last: any = null;
    canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D; texture: any;
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width; this.canvas.height = this.height;
        this.ctx = this.canvas.getContext("2d")!;
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.texture = new THREE.Texture(this.canvas);
    }
    update() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = this.trail.length - 1; i >= 0; i--) {
            const p = this.trail[i];
            const f = p.force * this.speed * (1 - p.age / this.maxAge);
            p.x += p.vx * f; p.y += p.vy * f; p.age++;
            if (p.age > this.maxAge) this.trail.splice(i, 1);
            else this.drawPoint(p);
        }
        this.texture.needsUpdate = true;
    }
    addTouch(point: any) {
        let force = 0, vx = 0, vy = 0;
        if (this.last) {
            const dx = point.x - this.last.x, dy = point.y - this.last.y;
            if (dx === 0 && dy === 0) return;
            const d = Math.sqrt(dx * dx + dy * dy);
            vx = dx / d; vy = dy / d;
            force = Math.min((dx * dx + dy * dy) * 20000, 2.0);
        }
        this.last = { x: point.x, y: point.y };
        this.trail.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
    }
    drawPoint(p: any) {
        const pos = { x: p.x * this.width, y: (1 - p.y) * this.height };
        let intensity = p.age < this.maxAge * 0.3
            ? Math.sin((p.age / (this.maxAge * 0.3)) * (Math.PI / 2))
            : -((1 - (p.age - this.maxAge * 0.3) / (this.maxAge * 0.7)) * ((1 - (p.age - this.maxAge * 0.3) / (this.maxAge * 0.7)) - 2));
        intensity *= p.force;
        const color = `${((p.vx + 1) / 2) * 255}, ${((p.vy + 1) / 2) * 255}, ${intensity * 255}`;
        const radius = this.radius * this.width;
        this.ctx.shadowOffsetX = this.size * 5;
        this.ctx.shadowOffsetY = this.size * 5;
        this.ctx.shadowBlur = radius;
        this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(255,0,0,1)";
        this.ctx.arc(pos.x - this.size * 5, pos.y - this.size * 5, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

class GridBackground {
    mesh: any = null; uniforms: any; sceneManager: any;
    constructor(sceneManager: any) {
        this.sceneManager = sceneManager;
        this.uniforms = {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            uColor: { value: new THREE.Vector3(0.1, 0.23, 0.17) }, // Forest (#1A3C2B)
            uBg: { value: new THREE.Vector3(0.97, 0.97, 0.96) },   // Paper (#F7F7F5)
        };
    }
    init() {
        const viewSize = this.sceneManager.getViewSize();
        const geometry = new THREE.PlaneGeometry(viewSize.width, viewSize.height, 1, 1);
        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: `varying vec2 vUv; void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); vUv = uv; }`,
            fragmentShader: `
                uniform float uTime;
                uniform vec2 uResolution;
                uniform vec3 uColor, uBg;
                varying vec2 vUv;
                void main() {
                    vec2 uv = vUv;
                    vec2 grid = fract(uv * 40.0);
                    float line = step(0.98, grid.x) + step(0.98, grid.y);
                    vec3 color = mix(uBg, uColor, line * 0.05);
                    gl_FragColor = vec4(color, 1.0);
                }
            `
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.sceneManager.scene.add(this.mesh);
    }
    update(delta: number) { this.uniforms.uTime.value += delta; }
    setTheme() {
        this.sceneManager.scene.background = new THREE.Color(0xF7F7F5);
    }
    onResize(w: number, h: number) {
        const viewSize = this.sceneManager.getViewSize();
        if (this.mesh) { this.mesh.geometry.dispose(); this.mesh.geometry = new THREE.PlaneGeometry(viewSize.width, viewSize.height, 1, 1); }
        this.uniforms.uResolution.value.set(w, h);
    }
}

class App {
    renderer: any; camera: any; scene: any; clock: any;
    touchTexture: TouchTexture; gridBackground: GridBackground;
    animationId: number | null = null; container: HTMLElement;
    constructor(container: HTMLElement) {
        this.container = container;
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(this.renderer.domElement);
        this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 10000);
        this.camera.position.z = 50;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xF7F7F5);
        this.clock = new THREE.Clock();
        this.touchTexture = new TouchTexture();
        this.gridBackground = new GridBackground(this);
        this.init();
    }
    setTheme() { this.gridBackground.setTheme(); }
    setPaused(paused: boolean) { }
    getViewSize() {
        const fov = (this.camera.fov * Math.PI) / 180;
        const height = Math.abs(this.camera.position.z * Math.tan(fov / 2) * 2);
        return { width: height * this.camera.aspect, height };
    }
    init() {
        this.gridBackground.init();
        const c = this.container;
        const onMove = (x: number, y: number) => { this.touchTexture.addTouch({ x: x / c.clientWidth, y: 1 - y / c.clientHeight }); };
        c.addEventListener("mousemove", (e) => onMove(e.offsetX, e.offsetY));
        c.addEventListener("touchmove", (e) => {
            const rect = c.getBoundingClientRect();
            onMove(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
        });
        window.addEventListener("resize", () => {
            this.camera.aspect = c.clientWidth / c.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(c.clientWidth, c.clientHeight);
            this.gridBackground.onResize(c.clientWidth, c.clientHeight);
        });
        this.tick();
    }
    tick() {
        const delta = Math.min(this.clock.getDelta(), 0.1);
        this.touchTexture.update();
        this.gridBackground.update(delta);
        this.renderer.render(this.scene, this.camera);
        this.animationId = requestAnimationFrame(() => this.tick());
    }
    cleanup() {
        if (this.animationId) cancelAnimationFrame(this.animationId);
        this.renderer.dispose();
        if (this.container && this.renderer.domElement && this.container.contains(this.renderer.domElement)) {
            this.container.removeChild(this.renderer.domElement);
        }
    }
}

export default function FlowGradientHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<any>(null);
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        if (appRef.current) appRef.current.cleanup();
        appRef.current = new App(container);
        appRef.current.setTheme();

        return () => { if (appRef.current) appRef.current.cleanup(); };
    }, []);

    return (
        <div className="relative w-full h-full min-h-[100vh] overflow-hidden bg-paper">
            <div ref={containerRef} className="absolute inset-0 z-0 opacity-20" />

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-start justify-center w-full min-h-[100vh] text-left px-6 md:px-24 pt-32 pb-40">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-5xl z-20"
                >
                    <div className="mb-8 inline-flex items-center space-x-3 px-4 py-1.5 border border-forest/10 bg-paper">
                        <span className="w-1.5 h-1.5 bg-forest" />
                        <span className="text-[10px] font-mono font-bold text-forest tracking-[0.2em] uppercase">Status: Open for opportunities</span>
                    </div>

                    <h1 className="text-7xl md:text-[120px] font-hero font-bold text-forest leading-[0.85] tracking-tighter mb-12 uppercase">
                        I&apos;m Dev <br /> Chopra
                    </h1>

                    <div className="h-[60px] md:h-[100px] flex items-center justify-start mb-12">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={ROLES[roleIndex]}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-4xl md:text-7xl font-hero font-bold text-forest uppercase"
                            >
                                {ROLES[roleIndex]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    <p className="text-lg md:text-xl text-forest/70 max-w-xl leading-relaxed mb-16 font-medium">
                        A generalist who adapts to what your organization needs. From strategy to execution, from design to deployment — I deliver.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                        <Link
                            href="/work"
                            className="px-10 py-4 bg-forest text-paper font-mono font-bold text-xs uppercase tracking-[0.2em] border border-forest hover:bg-paper hover:text-forest transition-all duration-200"
                        >
                            View Portfolio
                        </Link>
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-paper text-forest font-mono font-bold text-xs uppercase tracking-[0.2em] border border-forest/20 hover:border-forest transition-all duration-200"
                        >
                            Contact
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Pills - Repositioned to avoid overlap */}
                <div className="absolute top-[25%] right-[10%] hidden lg:block z-10">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="px-4 py-2 border border-forest/10 bg-paper text-[10px] font-mono font-bold uppercase tracking-widest text-forest/40"
                    >
                        Index: 01 // Product Design
                    </motion.div>
                </div>
                <div className="absolute bottom-[25%] right-[12%] hidden lg:block z-10">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="px-4 py-2 border border-forest/10 bg-paper text-[10px] font-mono font-bold uppercase tracking-widest text-forest/40"
                    >
                        Index: 02 // Growth & Strategy
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-px h-16 bg-forest/10 flex justify-center overflow-hidden">
                        <motion.div
                            animate={{ y: [-64, 64] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-px h-16 bg-forest"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

