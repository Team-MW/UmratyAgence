import Section from '../components/Section';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

import heroBg from '../assets/bacgroudn11.png';

export default function Documentation() {
    return (
        <>
            <SEO
                title="Documentation & Informations"
                description="Retrouvez toutes les informations sur Umraty voyages, notre agence, ainsi que nos documents utiles."
                keywords="agence Omra, adresse Umraty voyages, contacts, documents Omra"
            />

            <div className="bg-dark-900 py-32 text-center text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-lg"
                    >
                        Documentation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white font-light tracking-wide drop-shadow-md"
                    >
                        Retrouvez nos informations légales, notre fiche agence et nos documents de voyage.
                    </motion.p>
                </div>
            </div>

            <Section variant="light" className="bg-gray-50 pb-20 pt-16">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Liste des documents */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19].map((num) => (
                                <motion.div
                                    key={num}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow"
                                >
                                    <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                                        <img
                                            src={`/asset2/${num}.jpg`}
                                            alt={`Document ${num}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <a
                                                href={`/asset2/${num}.jpg`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white/20 hover:bg-white text-white hover:text-dark-900 border border-white backdrop-blur-sm px-6 py-2 rounded-full font-medium transition-colors"
                                            >
                                                Voir en grand
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
