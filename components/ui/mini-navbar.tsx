"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const defaultTextColor = 'text-gray-400';
    const hoverTextColor = 'text-white';
    const textSizeClass = 'text-sm font-medium';

    return (
        <Link href={href} className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}>
            <div className="flex flex-col transition-transform duration-500 ease-in-out transform group-hover:-translate-y-1/2">
                <span className={defaultTextColor}>{children}</span>
                <span className={hoverTextColor}>{children}</span>
            </div>
        </Link>
    );
};

export function MiniNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
    const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (shapeTimeoutRef.current) {
            clearTimeout(shapeTimeoutRef.current);
        }

        if (isOpen) {
            setHeaderShapeClass('rounded-2xl');
        } else {
            shapeTimeoutRef.current = setTimeout(() => {
                setHeaderShapeClass('rounded-full');
            }, 300);
        }

        return () => {
            if (shapeTimeoutRef.current) {
                clearTimeout(shapeTimeoutRef.current);
            }
        };
    }, [isOpen]);

    const logoElement = (
        <Link href="/" className="relative w-10 h-10 flex items-center justify-center group">
            <div className="text-xl font-black text-white tracking-widest group-hover:scale-105 transition-transform">DC</div>
        </Link>
    );

    const navLinksData = [
        { label: 'About', href: '/about' },
        { label: 'Work', href: '/work' },
        { label: 'Founder', href: '/founder' },
        { label: 'Skills', href: '/skills' },
        { label: 'Resume', href: '/resume' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-[100]
                       flex flex-col items-center
                       px-6 py-2.5 backdrop-blur-md
                       ${headerShapeClass}
                       border border-white/10 bg-black/20
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-all duration-300 ease-in-out`}>

            <div className="flex items-center justify-between w-full gap-x-8 sm:gap-x-12">
                <div className="flex items-center">
                    {logoElement}
                </div>

                <nav className="hidden sm:flex items-center space-x-8 text-sm">
                    {navLinksData.map((link) => (
                        <AnimatedNavLink key={link.href} href={link.href}>
                            {link.label}
                        </AnimatedNavLink>
                    ))}
                </nav>

                <div className="hidden sm:flex items-center">
                    <Link
                        href="/contact"
                        className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-black bg-white rounded-full hover:bg-zinc-200 transition-colors duration-300 shadow-lg shadow-white/5"
                    >
                        Let&apos;s Connect
                    </Link>
                </div>

                <button className="sm:hidden flex items-center justify-center w-8 h-8 text-white focus:outline-none" onClick={toggleMenu} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    )}
                </button>
            </div>

            <div className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[1000px] opacity-100 pt-6' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center space-y-5 text-base w-full mb-6">
                    {navLinksData.map((link) => (
                        <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white transition-colors w-full text-center text-lg font-medium" onClick={() => setIsOpen(false)}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="w-full pb-4">
                    <Link
                        href="/contact"
                        className="block w-full text-center px-4 py-3 text-sm font-bold uppercase tracking-widest text-black bg-white rounded-full shadow-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        Let&apos;s Connect
                    </Link>
                </div>
            </div>
        </header>
    );
}
