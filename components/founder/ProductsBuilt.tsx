"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ExternalLinkModal } from "@/components/ui/ExternalLinkModal";

export default function ProductsBuilt() {
    const products = [
        { name: "TapQR", link: "https://www.tapqr.live/" },
        { name: "Altme", link: "https://altme-devchopra.lovable.app/" },
        { name: "Nivaari Health", link: "https://nivaari-health.lovable.app/" },
        { name: "Veena Studio DAW", link: "https://www.veena.studio/" },
        { name: "AuraScore", link: "https://auraappbydev.netlify.app/" },
    ];

    return (
        <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl font-bold text-white mb-4">Products Built</h2>
                <p className="text-zinc-400 font-mono text-sm uppercase">Solo-Built Using AI-Native Tools</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product, index) => (
                    <ExternalLinkModal key={index} url={product.link} title={product.name} className="w-full">
                        <motion.div
                            className="group glass relative overflow-hidden rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-white/20 h-full"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex justify-between items-center relative z-10 w-full">
                                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-colors">
                                    {product.name}
                                </h3>
                                <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                            </div>
                        </motion.div>
                    </ExternalLinkModal>
                ))}
            </div>
        </section>
    );
}
