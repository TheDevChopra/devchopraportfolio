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

class GradientBackground {
    mesh: any = null; uniforms: any; sceneManager: any; isPaused = false;
    constructor(sceneManager: any) {
        this.sceneManager = sceneManager;
        this.uniforms = {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            uColor1: { value: new THREE.Vector3(0.18, 0.2, 0.5) }, // Deeper Indigo
            uColor2: { value: new THREE.Vector3(0.3, 0.1, 0.5) }, // Deeper Purple
            uColor3: { value: new THREE.Vector3(0.4, 0.1, 0.3) }, // Deeper Pink
            uColor4: { value: new THREE.Vector3(0.012, 0.012, 0.012) }, // Dark 
            uColor5: { value: new THREE.Vector3(0.18, 0.2, 0.5) },
            uColor6: { value: new THREE.Vector3(0.3, 0.1, 0.5) },
            uSpeed: { value: 0.8 }, uIntensity: { value: 1.2 }, // Reduced intensity to avoid 'white' blobs
            uTouchTexture: { value: null }, uGrainIntensity: { value: 0.04 },
            uDarkNavy: { value: new THREE.Vector3(0.012, 0.012, 0.031) },
            uGradientSize: { value: 0.65 }, uGradientCount: { value: 6.0 },
            uColor1Weight: { value: 0.3 }, uColor2Weight: { value: 0.8 }
        };
    }
    init() {
        const viewSize = this.sceneManager.getViewSize();
        const geometry = new THREE.PlaneGeometry(viewSize.width, viewSize.height, 1, 1);
        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: `varying vec2 vUv; void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); vUv = uv; }`,
            fragmentShader: `
        uniform float uTime, uSpeed, uIntensity, uGrainIntensity, uGradientSize, uGradientCount, uColor1Weight, uColor2Weight;
        uniform vec2 uResolution;
        uniform vec3 uColor1, uColor2, uColor3, uColor4, uColor5, uColor6, uDarkNavy;
        uniform sampler2D uTouchTexture;
        varying vec2 vUv;
        
        float grain(vec2 uv, float t) { return fract(sin(dot(uv * uResolution * 0.5 + t, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0; }
        
        vec3 getGradientColor(vec2 uv, float time) {
          vec2 c1 = vec2(0.5 + sin(time * uSpeed * 0.4) * 0.4, 0.5 + cos(time * uSpeed * 0.5) * 0.4);
          vec2 c2 = vec2(0.5 + cos(time * uSpeed * 0.6) * 0.5, 0.5 + sin(time * uSpeed * 0.45) * 0.5);
          vec2 c3 = vec2(0.5 + sin(time * uSpeed * 0.35) * 0.45, 0.5 + cos(time * uSpeed * 0.55) * 0.45);
          vec2 c4 = vec2(0.5 + cos(time * uSpeed * 0.5) * 0.4, 0.5 + sin(time * uSpeed * 0.4) * 0.4);
          vec2 c5 = vec2(0.5 + sin(time * uSpeed * 0.7) * 0.35, 0.5 + cos(time * uSpeed * 0.6) * 0.35);
          vec2 c6 = vec2(0.5 + cos(time * uSpeed * 0.45) * 0.5, 0.5 + sin(time * uSpeed * 0.65) * 0.5);
          
          float i1 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c1));
          float i2 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c2));
          float i3 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c3));
          float i4 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c4));
          float i5 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c5));
          float i6 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c6));
          
          vec3 color = vec3(0.0);
          color += uColor1 * i1 * (0.55 + 0.45 * sin(time * uSpeed)) * uColor1Weight;
          color += uColor2 * i2 * (0.55 + 0.45 * cos(time * uSpeed * 1.2)) * uColor2Weight;
          color += uColor3 * i3 * (0.55 + 0.45 * sin(time * uSpeed * 0.8)) * uColor1Weight;
          color += uColor4 * i4 * (0.55 + 0.45 * cos(time * uSpeed * 1.3)) * uColor2Weight;
          color += uColor5 * i5 * (0.55 + 0.45 * sin(time * uSpeed * 1.1)) * uColor1Weight;
          color += uColor6 * i6 * (0.55 + 0.45 * cos(time * uSpeed * 0.9)) * uColor2Weight;
          
          color = clamp(color, vec3(0.0), vec3(1.0)) * uIntensity;
          float lum = dot(color, vec3(0.299, 0.587, 0.114));
          color = mix(vec3(lum), color, 1.35);
          color = pow(color, vec3(0.85)); // Darker power
          float brightness = length(color);
          color = mix(uDarkNavy, color, max(brightness * 1.0, 0.02));
          return color;
        }
        
        void main() {
          vec2 uv = vUv;
          vec4 touchTex = texture2D(uTouchTexture, uv);
          uv.x -= (touchTex.r * 2.0 - 1.0) * 0.2 * touchTex.b;
          uv.y -= (touchTex.g * 2.0 - 1.0) * 0.2 * touchTex.b;
          vec2 center = vec2(0.5);
          float dist = length(uv - center);
          float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.01 * touchTex.b;
          uv += vec2(ripple);
          vec3 color = getGradientColor(uv, uTime);
          color += grain(uv, uTime) * uGrainIntensity;
          color = clamp(color, vec3(0.0), vec3(1.0));
          gl_FragColor = vec4(color, 1.0);
        }
      `
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.sceneManager.scene.add(this.mesh);
    }
    update(delta: number) { if (!this.isPaused) this.uniforms.uTime.value += delta; }
    setTheme(isDark: boolean) {
        if (isDark) {
            this.uniforms.uColor1.value.set(0.18, 0.2, 0.5);
            this.uniforms.uColor2.value.set(0.3, 0.1, 0.5);
            this.uniforms.uDarkNavy.value.set(0.012, 0.012, 0.031);
            this.sceneManager.scene.background = new THREE.Color(0x030303);
        } else {
            this.uniforms.uColor1.value.set(0.18, 0.2, 0.5);
            this.uniforms.uColor2.value.set(0.3, 0.1, 0.5);
            this.uniforms.uDarkNavy.value.set(0.012, 0.012, 0.031);
            this.sceneManager.scene.background = new THREE.Color(0x030303);
        }
    }
    onResize(w: number, h: number) {
        const viewSize = this.sceneManager.getViewSize();
        if (this.mesh) { this.mesh.geometry.dispose(); this.mesh.geometry = new THREE.PlaneGeometry(viewSize.width, viewSize.height, 1, 1); }
        this.uniforms.uResolution.value.set(w, h);
    }
}

class App {
    renderer: any; camera: any; scene: any; clock: any;
    touchTexture: TouchTexture; gradientBackground: GradientBackground;
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
        this.scene.background = new THREE.Color(0x030303);
        this.clock = new THREE.Clock();
        this.touchTexture = new TouchTexture();
        this.gradientBackground = new GradientBackground(this);
        this.gradientBackground.uniforms.uTouchTexture.value = this.touchTexture.texture;
        this.init();
    }
    setTheme(isDark: boolean) { this.gradientBackground.setTheme(isDark); }
    setPaused(paused: boolean) { this.gradientBackground.isPaused = paused; }
    getViewSize() {
        const fov = (this.camera.fov * Math.PI) / 180;
        const height = Math.abs(this.camera.position.z * Math.tan(fov / 2) * 2);
        return { width: height * this.camera.aspect, height };
    }
    init() {
        this.gradientBackground.init();
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
            this.gradientBackground.onResize(c.clientWidth, c.clientHeight);
        });
        this.tick();
    }
    tick() {
        const delta = Math.min(this.clock.getDelta(), 0.1);
        this.touchTexture.update();
        this.gradientBackground.update(delta);
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
        appRef.current.setTheme(true);

        return () => { if (appRef.current) appRef.current.cleanup(); };
    }, []);

    return (
        <div className="relative w-full h-full min-h-[120vh] overflow-hidden bg-[#030303]">
            <div ref={containerRef} className="absolute inset-0 z-0" />

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[120vh] text-center px-4 pt-64 pb-60">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative max-w-5xl z-20"
                >
                    <div className="mb-12 inline-flex items-center space-x-2 px-6 py-2 rounded-full glass border border-white/10 animate-fade-in group hover:bg-white/5 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-sm font-medium text-white tracking-widest uppercase">Open to new opportunities</span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black text-white leading-tight tracking-tight mb-8">
                        I&apos;m <span className="gradient-text">Dev Chopra</span>
                    </h1>

                    <div className="h-[80px] md:h-[120px] flex items-center justify-center mb-12">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={ROLES[roleIndex]}
                                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="text-4xl md:text-7xl font-bold"
                            >
                                A <span className="gradient-text">{ROLES[roleIndex]}</span>
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed mb-20 px-4">
                        A generalist who adapts to what your organization needs. From strategy to execution, from design to deployment — I deliver.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            href="/work"
                            className="px-10 py-5 rounded-full bg-white text-black font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/20"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="/contact"
                            className="px-10 py-5 rounded-full glass border border-white/20 text-white font-black text-lg hover:bg-white/5 hover:scale-105 active:scale-95 transition-all"
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Pills - Repositioned to avoid overlap */}
                <div className="absolute top-[18%] left-[8%] hidden lg:block z-10">
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [-12, -8, -12] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="px-6 py-3 rounded-full bg-zinc-900/50 backdrop-blur-3xl border border-white/10 shadow-2xl text-sm font-black uppercase tracking-widest text-white/70"
                    >
                        Product Design
                    </motion.div>
                </div>
                <div className="absolute bottom-[22%] left-[10%] hidden lg:block z-10">
                    <motion.div
                        animate={{ y: [0, 15, 0], rotate: [12, 16, 12] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="px-6 py-3 rounded-full bg-zinc-900/50 backdrop-blur-3xl border border-white/10 shadow-2xl text-sm font-black uppercase tracking-widest text-white/70"
                    >
                        Growth Marketing
                    </motion.div>
                </div>
                <div className="absolute top-[20%] right-[6%] hidden lg:block z-10">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [6, 12, 6] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="px-6 py-3 rounded-full bg-zinc-900/50 backdrop-blur-3xl border border-white/10 shadow-2xl text-sm font-black uppercase tracking-widest text-white/70"
                    >
                        AI & Automation
                    </motion.div>
                </div>
                <div className="absolute bottom-[28%] right-[8%] hidden lg:block z-10">
                    <motion.div
                        animate={{ y: [0, 12, 0], rotate: [-6, -2, -6] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="px-6 py-3 rounded-full bg-zinc-900/50 backdrop-blur-3xl border border-white/10 shadow-2xl text-sm font-black uppercase tracking-widest text-white/70"
                    >
                        VibeCoding
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 rounded-full bg-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

