"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    distance?: number;
}

export default function MagneticButton({
    children,
    className = "",
    distance = 0.5,
}: MagneticButtonProps) {
    const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const moveX = (clientX - centerX) * distance;
        const moveY = (clientY - centerY) * distance;

        setPosition({ x: moveX, y: moveY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
