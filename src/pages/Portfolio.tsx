import Section from '../components/Section';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const images = [
    'https://images.unsplash.com/photo-1564769662533-4f00d8d35864?q=80&w=1000',
    'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1000',
    'https://images.unsplash.com/photo-1596706057077-bd1c360098df?q=80&w=1000',
    'https://images.unsplash.com/photo-1565552629477-cd014d784aa2?q=80&w=1000',
    'https://images.unsplash.com/photo-1537181534458-75d654f15306?q=80&w=1000',
    'https://images.unsplash.com/photo-1548625361-12f7e6f8595a?q=80&w=1000'
];

export default function Portfolio() {
    return (
        <>
            <SEO
                title="Portfolio"
                description="Parcourez notre galerie photos et revivez les moments inoubliables de nos précédents séjours Omra et Hajj organisés par Umraty Agence. Les témoignages en images de nos pèlerins."
                keywords="photos Omra, vidéos Hajj, pèlerinage en images, Umraty Agence, témoignages Omra, groupe Omra, souvenirs La Mecque"
            />

            <div className="bg-dark-900 pt-32 pb-16 text-center text-white">
                <h1 className="text-5xl font-serif font-bold text-primary-400 mb-6">Nos Voyages en Images</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                    Revivez les moments forts de nos pèlerinages précédents. Des souvenirs gravés à jamais.
                </p>
            </div>

            <Section variant="light">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative overflow-hidden rounded-xl shadow-lg group cursor-pointer ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${src})` }}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="text-2xl font-serif font-bold text-white mb-2">Omra 2024</h3>
                                    <p className="text-primary-300">Groupe Février</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
}
