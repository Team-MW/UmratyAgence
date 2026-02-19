import Section from '../components/Section';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import serviceHeroBg from '../assets/pexels-mjlo-2787826.jpg';
import progImage1 from '../assets/WhatsApp-Image-2026-01-21-at-07.08.20-1.jpg';
import progImage2 from '../assets/WhatsApp-Image-2025-12-26-at-20.15.42-1-818x1024.jpg';

export default function Services() {
    return (
        <>
            <SEO title="Nos Services" description="Découvrez nos formules Omra et Hajj. Confort, accompagnement et spiritualité." />

            <div className="bg-dark-900 py-32 text-center text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${serviceHeroBg})` }}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-lg"
                    >
                        Nos Formules
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white font-light tracking-wide drop-shadow-md"
                    >
                        Choisir l'excellence pour votre voyage spirituel.
                    </motion.p>
                </div>
            </div>

            {/* Programme Section */}
            <Section variant="light">
                <div className="flex flex-col gap-24">
                    {/* Row 1: Programme Intro - Image Right */}
                    {/* Row 1: Programme Intro - Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-6">Notre Programme Hajj</h2>
                            <h3 className="text-2xl font-medium text-primary-600 mb-6">Avec votre frère Aboul Boukhary Yadaly</h3>
                            <div className="w-20 h-1 bg-primary-500 rounded-full mb-8" />

                            <h4 className="text-xl font-bold text-dark-900 mb-2">Inscrivez-vous sur notre formulaire</h4>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Ce formulaire nous donneras les informations nécessaires afin de vous contacter via WhatsApp.
                            </p>

                            <h4 className="text-xl font-bold text-primary-700 mb-4">Information reçu</h4>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Une fois les informations reçu vous serez ajouté sur notre groupe Whatsapp. Ce groupe servira à la gestion et l’organisation du hajj ainsi qu’à l’inscription sur Nusuk.
                            </p>

                            <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100 flex flex-col gap-4">
                                <h4 className="text-xl font-bold text-dark-900 mb-2">Prêt à nous rejoindre ?</h4>
                                <a
                                    href="https://wa.me/33758484477"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-500/20 w-full md:w-auto"
                                >
                                    <span>Cliquer juste ici pour nous rejoindre !</span>
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c.93.597 1.69.917 2.806.917 3.181 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.768-5.768-5.768zm0 9.778c-.961 0-1.748-.288-2.673-.799l-.265-.133-1.638.429.437-1.596-.153-.263c-.569-.906-.906-1.742-.906-2.616 0-2.208 1.796-4.004 4.004-4.004 2.208 0 4.004 1.796 4.004 4.004 0 2.208-1.796 4.004-4.004 4.004z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://form.jotform.com/240373809673059"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-primary-500/20 w-full md:w-auto"
                                >
                                    <span>Remplir le Formulaire</span>
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-2 rounded-3xl shadow-2xl border border-gray-100"
                        >
                            <img
                                src={progImage1}
                                alt="Programme Omra"
                                className="w-full h-auto rounded-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* Row 2: Inscription & WhatsApp - Image Left */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:order-first order-last bg-white p-2 rounded-3xl shadow-2xl border border-gray-100"
                        >
                            <img
                                src={progImage2}
                                alt="Groupe WhatsApp Hajj"
                                className="w-full h-auto rounded-2xl"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-dark-900 mb-6">Inscrivez-vous sur notre formulaire</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Ce formulaire nous donneras les informations nécessaires afin de vous contacter via WhatsApp.
                            </p>

                            <h4 className="text-xl font-bold text-primary-700 mb-4">Information reçu</h4>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Une fois les informations reçu vous serez ajouté sur notre groupe Whatsapp. Ce groupe servira à la gestion et l’organisation du hajj ainsi qu’à l’inscription sur Nusuk.
                            </p>

                            <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
                                <h4 className="text-xl font-bold text-dark-900 mb-4">Prêt à nous rejoindre ?</h4>
                                <a
                                    href="https://wa.me/33758484477"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
                                >
                                    <span>Cliquer juste ici pour nous rejoindre !</span>
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c.93.597 1.69.917 2.806.917 3.181 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.768-5.768-5.768zm0 9.778c-.961 0-1.748-.288-2.673-.799l-.265-.133-1.638.429.437-1.596-.153-.263c-.569-.906-.906-1.742-.906-2.616 0-2.208 1.796-4.004 4.004-4.004 2.208 0 4.004 1.796 4.004 4.004 0 2.208-1.796 4.004-4.004 4.004z" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Grille Tarifaire Section */}
            <Section variant="light">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-8">Grille tarifaire</h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="text-4xl">🏨</div>
                                <div>
                                    <h4 className="text-xl font-bold text-dark-900 mb-2">Réservation d’hôtel</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Nous prenons en charge la réservation de votre hébergement à proximité des lieux saints, selon vos préférences et votre budget.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-4xl">🛂</div>
                                <div>
                                    <h4 className="text-xl font-bold text-dark-900 mb-2">Visa</h4>
                                    <p className="text-gray-600 leading-relaxed mb-2">
                                        Nous nous occupons de toutes les démarches liées à l’obtention de votre visa :
                                    </p>
                                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                        <li>Visa touristique (ressortissants UE)</li>
                                        <li>Visa Omra (hors UE)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-4xl">🚆</div>
                                <div>
                                    <h4 className="text-xl font-bold text-dark-900 mb-2">Transport</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Pour faciliter vos déplacements sur place, plusieurs solutions sont proposées
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 bg-primary-50 p-6 rounded-2xl border border-primary-100 inline-block">
                            <a
                                href="https://wa.me/33758484477"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
                            >
                                <span>Cliquer juste ici pour nous rejoindre !</span>
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c.93.597 1.69.917 2.806.917 3.181 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.768-5.768-5.768zm0 9.778c-.961 0-1.748-.288-2.673-.799l-.265-.133-1.638.429.437-1.596-.153-.263c-.569-.906-.906-1.742-.906-2.616 0-2.208 1.796-4.004 4.004-4.004 2.208 0 4.004 1.796 4.004 4.004 0 2.208-1.796 4.004-4.004 4.004z" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-2 rounded-3xl shadow-2xl border border-gray-100"
                    >
                        <img
                            src={progImage2}
                            alt="Grille Tarifaire"
                            className="w-full h-auto rounded-2xl"
                        />
                    </motion.div>
                </div>
            </Section>
        </>
    );
}
