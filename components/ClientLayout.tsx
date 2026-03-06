"use client";

import { useEffect } from "react";

export default function ClientLayout() {
    useEffect(() => {
        // Cursor glow tracking
        const cursorGlow = document.createElement("div");
        cursorGlow.className = "cursor-glow";
        document.body.appendChild(cursorGlow);

        const moveGlow = (e: MouseEvent) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        };

        window.addEventListener("mousemove", moveGlow);

        // Scroll reveal logic
        const sections = document.querySelectorAll(".section-reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            window.removeEventListener("mousemove", moveGlow);
            document.body.removeChild(cursorGlow);
            observer.disconnect();
        };
    }, []);

    return null;
}
