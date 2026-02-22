import Section from '../components/Section';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import hajjBg from '../assets/hajj.jpg';

export default function Contact() {
    return (
        <>
            <SEO
                title="Contact"
                description="Prenez contact avec Umraty Agence pour organiser votre prochain voyage Hajj ou Omra. Notre équipe est à votre disposition pour toute question, devis ou réservation."
                keywords="contact Umraty Agence, réservation Omra, devis Hajj, agence de pèlerinage France, adresse Umraty, téléphone Omra"
            />

            <div className="bg-dark-900 py-32 text-center text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{ backgroundImage: `url(${hajjBg})` }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-lg"
                    >
                        Contactez-nous
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white font-light tracking-wide drop-shadow-md"
                    >
                        Nous sommes à votre écoute pour organiser votre voyage.
                    </motion.p>
                </div>
            </div>

            <Section variant="light" className="relative -mt-16 z-20">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
                    {/* Contact Form - JotForm Embed Takes Full Top Width */}
                    <div className="p-0 md:p-8 w-full relative">
                        <div className="text-center mb-8 pt-8 px-4">
                            <h2 className="text-3xl font-serif font-bold text-dark-900 mb-4">Remplissez notre formulaire</h2>
                            <p className="text-gray-600">Laissez-nous vos coordonnées et votre demande, nous vous contacterons rapidement.</p>
                        </div>
                        <iframe
                            id="JotFormIFrame-252625071533351"
                            title="Formulaire Contact"
                            allowTransparency={true}
                            allowFullScreen={true}
                            allow="geolocation; microphone; camera"
                            src="https://form.jotform.com/252625071533351"
                            style={{
                                minWidth: '100%',
                                maxWidth: '100%',
                                height: '800px',
                                border: 'none',
                            }}
                            scrolling="yes"
                        />
                    </div>
                </div>

                {/* Contact Info Block - Bottom */}
                <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl relative">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${hajjBg})` }}
                    />
                    <div className="absolute inset-0 bg-primary-900/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="relative z-10 p-12 lg:p-16 text-white text-center flex flex-col items-center">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-primary-200">Nos Coordonnées</h2>
                        <p className="text-gray-300 text-lg mb-12 font-light leading-relaxed max-w-xl">
                            N'hésitez pas à nous rendre visite ou à nous appeler pour discuter de votre projet de pèlerinage.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                            <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center gap-4 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
                                <div className="bg-primary-500/20 p-4 rounded-full border border-primary-500/30">
                                    <MapPin className="w-8 h-8 text-primary-400" />
                                </div>
                                <div className="text-center">
                                    <span className="block text-sm text-gray-400 uppercase tracking-widest font-semibold mb-2">Adresse</span>
                                    <p className="font-light text-lg">123 Rue de la Mecque<br />75000 Paris</p>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center gap-4 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
                                <div className="bg-primary-500/20 p-4 rounded-full border border-primary-500/30">
                                    <Phone className="w-8 h-8 text-primary-400" />
                                </div>
                                <div className="text-center">
                                    <span className="block text-sm text-gray-400 uppercase tracking-widest font-semibold mb-2">WhatsApp</span>
                                    <a href="https://wa.me/33758484477" target="_blank" rel="noopener noreferrer" className="font-light text-xl hover:text-primary-300 transition-colors">
                                        +33 7 58 48 44 77
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center gap-4 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
                                <div className="bg-primary-500/20 p-4 rounded-full border border-primary-500/30">
                                    <Mail className="w-8 h-8 text-primary-400" />
                                </div>
                                <div className="text-center">
                                    <span className="block text-sm text-gray-400 uppercase tracking-widest font-semibold mb-2">Email</span>
                                    <a href="mailto:contact@umratyagence.com" className="font-light text-[1rem] hover:text-primary-300 transition-colors break-all">
                                        contact@umratyagence.com
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
