"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

interface ExternalLinkModalProps {
    url: string;
    title: string;
    children?: React.ReactNode;
    className?: string;
    // If the user wants to use this component purely as a wrapper without passing a custom trigger element
    showExternalIcon?: boolean;
}

export function ExternalLinkModal({
    url,
    title,
    children,
    className = "",
    showExternalIcon = false
}: ExternalLinkModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleEscape);
        } else {
            document.body.style.overflow = "unset";
            document.removeEventListener("keydown", handleEscape);
        }

        return () => {
            document.body.style.overflow = "unset";
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    // Traps focus and allows closing when clicking the backdrop
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            closeModal();
        }
    };

    return (
        <>
            {/* Trigger Area */}
            {children ? (
                <div onClick={openModal} className={`cursor-pointer inline-block ${className}`}>
                    {children}
                </div>
            ) : (
                <button onClick={openModal} className={`inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer ${className}`}>
                    {title}
                    {showExternalIcon && <ExternalLink className="w-3 h-3 opacity-70" />}
                </button>
            )}

            {/* Modal Portal effectively built-in via AnimatePresence fixed overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-xl flex items-center justify-center p-0 md:p-6 lg:p-10"
                        onClick={handleBackdropClick}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${title} external website`}
                    >
                        <motion.div
                            ref={modalRef}
                            initial={{ scale: 0.96, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.96, opacity: 0, y: 10 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="w-full h-full md:w-[92%] md:h-[92%] glass rounded-none md:rounded-2xl border-0 md:border md:border-white/10 overflow-hidden flex flex-col shadow-2xl relative"
                        >
                            {/* Header Bar */}
                            <div className="h-14 bg-black/40 border-b border-white/10 flex items-center justify-between px-6 shrink-0 z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-medium text-zinc-200 truncate max-w-[200px] sm:max-w-md">
                                        {title}
                                    </span>
                                    <span className="hidden sm:inline-block text-xs text-zinc-500 font-mono ml-2 truncate max-w-[200px] lg:max-w-md opacity-50">
                                        {url}
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-white transition-colors hidden sm:flex text-xs items-center gap-1"
                                        title="Open in new tab directly"
                                    >
                                        Open directly <ExternalLink className="w-3 h-3" />
                                    </a>
                                    <div className="w-px h-4 bg-white/10 hidden sm:block" />
                                    <button
                                        onClick={closeModal}
                                        className="text-zinc-400 hover:text-white hover:rotate-90 transition-all p-1 rounded-md"
                                        aria-label="Close modal"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Iframe Content */}
                            <div className="flex-1 w-full bg-white relative">
                                <iframe
                                    src={url}
                                    title={title}
                                    className="absolute inset-0 w-full h-full border-0 bg-white"
                                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
