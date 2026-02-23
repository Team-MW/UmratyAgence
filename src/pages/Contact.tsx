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

                {/* Contact Info Block & Fiche Google - Bottom */}
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl items-start">
                            {/* Colonne Gauche: Coordonnées Textuelles */}
                            <div className="space-y-6">
                                <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center gap-4 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
                                    <div className="bg-primary-500/20 p-3 rounded-full border border-primary-500/30">
                                        <MapPin className="w-6 h-6 text-primary-400" />
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-sm text-gray-400 uppercase tracking-widest font-semibold mb-1">Adresse</span>
                                        <p className="font-light text-base">123 Rue de la Mecque<br />75000 Paris</p>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center gap-4 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
                                    <div className="bg-primary-500/20 p-3 rounded-full border border-primary-500/30">
                                        <Phone className="w-6 h-6 text-primary-400" />
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-sm text-gray-400 uppercase tracking-widest font-semibold mb-1">WhatsApp</span>
                                        <a href="https://wa.me/33758484477" target="_blank" rel="noopener noreferrer" className="font-light text-lg hover:text-primary-300 transition-colors">
                                            +33 7 58 48 44 77
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center gap-4 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
                                    <div className="bg-primary-500/20 p-3 rounded-full border border-primary-500/30">
                                        <Mail className="w-6 h-6 text-primary-400" />
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-sm text-gray-400 uppercase tracking-widest font-semibold mb-1">Email</span>
                                        <a href="mailto:contact@umratyagence.com" className="font-light text-base hover:text-primary-300 transition-colors break-all">
                                            contact@umratyagence.com
                                        </a>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Colonne Droite: Fiche Google */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden text-left text-gray-900"
                            >
                                {/* Header Image Fake */}
                                <div className="h-32 bg-gray-200 relative overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${hajjBg})`, filter: 'brightness(0.9)' }}
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h2 className="text-2xl font-bold text-gray-900">Umraty voyages</h2>
                                    </div>

                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-gray-700 font-medium">5,0</span>
                                        <div className="flex text-yellow-400 gap-1">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                        </div>
                                        <span className="text-blue-600 hover:underline cursor-pointer text-sm">(26)</span>
                                    </div>

                                    <p className="text-gray-600 mb-6 text-sm">Agence de voyages</p>

                                    <div className="flex justify-around border-b border-gray-100 pb-4 mb-4">
                                        <button className="flex flex-col items-center gap-1 text-primary-600 hover:text-primary-800 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            </div>
                                            <span className="text-xs font-medium">Itinéraire</span>
                                        </button>
                                        <button className="flex flex-col items-center gap-1 text-primary-600 hover:text-primary-800 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                                            </div>
                                            <span className="text-xs font-medium">Enregistrer</span>
                                        </button>
                                        <button className="flex flex-col items-center gap-1 text-primary-600 hover:text-primary-800 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                                            </div>
                                            <span className="text-xs font-medium">Partager</span>
                                        </button>
                                    </div>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <div>
                                                <span className="text-green-600 font-semibold">Ouvert 24h/24</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700 hover:bg-gray-50 p-1 -ml-1 rounded-lg cursor-pointer transition-colors">
                                            <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                                            <a href="https://umratyagence.fr" target="_blank" rel="noopener noreferrer" className="hover:underline">umratyagence.fr</a>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700 hover:bg-gray-50 p-1 -ml-1 rounded-lg cursor-pointer transition-colors">
                                            <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                            <a href="tel:+966544570716" className="hover:underline">+966 54 457 0716</a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
