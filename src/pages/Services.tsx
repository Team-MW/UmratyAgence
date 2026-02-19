import Section from '../components/Section';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import section1Bg from '../assets/section1.jpg';

export default function Services() {
    return (
        <>
            <SEO title="Nos Services" description="Découvrez nos formules Omra et Hajj. Confort, accompagnement et spiritualité." />

            <div className="bg-dark-900 py-32 text-center text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${section1Bg})` }}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary-400"
                    >
                        Nos Formules
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-200"
                    >
                        Choisir l'excellence pour votre voyage spirituel.
                    </motion.p>
                </div>
            </div>

            <Section variant="light">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Package 1 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col"
                    >
                        <div className="h-48 bg-gray-200 bg-[url('https://images.unsplash.com/photo-1596706057077-bd1c360098df?q=80&w=1000')] bg-cover bg-center" />
                        <div className="p-8 flex-grow">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold font-serif text-dark-900">Omra Confort</h3>
                                <span className="bg-primary-100 text-primary-800 text-xs font-bold px-3 py-1 rounded-full">Populaire</span>
                            </div>
                            <p className="text-gray-600 mb-6">Idéal pour les familles. Hôtels 4* à proximité des Harams.</p>
                            <ul className="space-y-3 mb-8">
                                {['Vols directs', 'Hôtels 4 étoiles', 'Demi-pension', 'Transferts inclus', 'Guide francophone'].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 bg-gray-50 border-t border-gray-100">
                            <div className="text-3xl font-bold text-primary-600 mb-4">1 890 €</div>
                            <button className="w-full py-3 bg-dark-900 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
                                En savoir plus
                            </button>
                        </div>
                    </motion.div>

                    {/* Package 2 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-200 flex flex-col relative"
                    >
                        <div className="absolute top-0 right-0 bg-primary-500 text-dark-900 text-xs font-bold px-4 py-1 rounded-bl-lg z-10">Premium</div>
                        <div className="h-48 bg-gray-200 bg-[url('https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=1000')] bg-cover bg-center" />
                        <div className="p-8 flex-grow">
                            <h3 className="text-2xl font-bold font-serif text-dark-900 mb-4">Omra Deluxe</h3>
                            <p className="text-gray-600 mb-6">Le confort absolu. Hôtels 5* au pied des Harams.</p>
                            <ul className="space-y-3 mb-8">
                                {['Vols classe affaires (option)', 'Hôtels 5 étoiles face Haram', 'Pension complète', 'Transferts privés VIP', 'Guide spirituel dédié'].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <Star className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 fill-current" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 bg-gray-50 border-t border-gray-100">
                            <div className="text-3xl font-bold text-primary-600 mb-4">2 490 €</div>
                            <button className="w-full py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/30">
                                Réserver
                            </button>
                        </div>
                    </motion.div>

                    {/* Package 3 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col"
                    >
                        <div className="h-48 bg-gray-200 bg-[url('https://images.unsplash.com/photo-1580418827493-f2b22c4385be?q=80&w=1000')] bg-cover bg-center" />
                        <div className="p-8 flex-grow">
                            <h3 className="text-2xl font-bold font-serif text-dark-900 mb-4">Hajj 2026</h3>
                            <p className="text-gray-600 mb-6">Pré-inscrivez vous pour le pèlerinage de votre vie.</p>
                            <ul className="space-y-3 mb-8">
                                {['Vols confirmés', 'Visa Hajj garanti', 'Mina & Arafat VIP', 'Logement Azizia/Shisha', 'Formation rites'].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 bg-gray-50 border-t border-gray-100">
                            <div className="text-3xl font-bold text-primary-600 mb-4">Sur devis</div>
                            <button className="w-full py-3 bg-dark-900 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors">
                                Me pré-inscrire
                            </button>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </>
    );
}
