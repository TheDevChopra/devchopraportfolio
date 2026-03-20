"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProductsBuilt() {
    const products = [
        { name: "TapQR", link: "https://www.tapqr.live/" },
        { name: "Altme", link: "https://altme-devchopra.lovable.app/" },
        { name: "Nivaari Health", link: "https://nivaari-health.lovable.app/" },
        { name: "Veena Studio DAW", link: "https://www.veena.studio/" },
        { name: "AuraScore", link: "https://auraappbydev.netlify.app/" },
    ];

    return (
        <section id="projects" className="max-w-5xl mx-auto px-6 py-24 border-b border-forest/10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 border-b border-forest/10 pb-8"
            >
                <h3 className="mono-label mb-4 px-3 py-1 border border-forest/10 inline-block">Archive // Shipped Projects</h3>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-forest uppercase tracking-tighter leading-none">Products Built.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-forest/10">
                {products.map((product, index) => (
                    <a key={index} href={product.link} target="_blank" rel="noopener noreferrer" className="w-full">
                        <motion.div
                            className="group relative p-12 border-r border-b border-forest/10 bg-paper hover:bg-forest/[0.02] transition-all flex items-center justify-between"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-display font-bold text-forest uppercase tracking-tighter leading-none">
                                {product.name}
                            </h3>
                            <div className="p-3 border border-forest/10 text-forest/40 group-hover:text-forest group-hover:border-forest transition-all">
                                <ExternalLink className="w-4 h-4" />
                            </div>
                        </motion.div>
                    </a>
                ))}
            </div>
        </section>
    );
}
