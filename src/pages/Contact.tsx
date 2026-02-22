import Section from '../components/Section';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
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

            <Section variant="light" className="relative -mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="relative p-12 text-white flex flex-col justify-between overflow-hidden">
                        {/* Premium Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900" />
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 drop-shadow-sm">Nos Coordonnées</h2>
                            <p className="text-primary-100 text-lg mb-12 font-light leading-relaxed max-w-sm">
                                N'hésitez pas à nous rendre visite ou à nous appeler pour discuter de votre projet de pèlerinage.
                            </p>

                            <div className="space-y-8">
                                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5 group">
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover:bg-white/20 transition-all duration-300">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-xs text-primary-200 uppercase tracking-widest font-semibold mb-1">Adresse</span>
                                        <p className="font-light text-lg leading-snug">123 Rue de la Mecque<br />75000 Paris, France</p>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5 group">
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover:bg-white/20 transition-all duration-300">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-xs text-primary-200 uppercase tracking-widest font-semibold mb-1">WhatsApp</span>
                                        <a href="https://wa.me/33758484477" target="_blank" rel="noopener noreferrer" className="font-light text-lg hover:text-white transition-colors">
                                            +33 7 58 48 44 77
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-5 group">
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover:bg-white/20 transition-all duration-300">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-xs text-primary-200 uppercase tracking-widest font-semibold mb-1">Email</span>
                                        <a href="mailto:contact@umratyagence.com" className="font-light text-lg hover:text-white transition-colors">
                                            contact@umratyagence.com
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
                            <h4 className="text-sm text-primary-200 uppercase tracking-widest mb-4">Suivez-nous</h4>
                            <div className="flex gap-4">
                                <motion.a
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    href="#"
                                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 hover:shadow-lg transition-all duration-300"
                                >
                                    <Instagram className="w-5 h-5" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    href="#"
                                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 hover:shadow-lg transition-all duration-300"
                                >
                                    <Facebook className="w-5 h-5" />
                                </motion.a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - JotForm Embed */}
                    <div className="p-0 md:p-6 w-full bg-white relative">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
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
            </Section>
        </>
    );
}
