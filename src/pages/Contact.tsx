import Section from '../components/Section';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import hajjBg from '../assets/hajj.jpg';

export default function Contact() {
    return (
        <>
            <SEO title="Contact" description="Contactez notre agence HajjTravel. Devis, questions, réservations." />

            <div className="bg-dark-900 py-32 text-center text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{ backgroundImage: `url(${hajjBg})` }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-8 py-6 md:px-12 md:py-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg tracking-tight">
                            Contactez-nous
                        </h1>
                        <div className="w-20 h-1 bg-primary-400 mx-auto mb-4 rounded-full" />
                        <p className="text-lg md:text-xl text-white/95 font-light leading-relaxed">
                            Nous sommes à votre écoute pour organiser votre voyage.
                        </p>
                    </motion.div>
                </div>
            </div>

            <Section variant="light" className="relative -mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-primary-600 p-12 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-6">Nos Coordonnées</h2>
                            <p className="text-primary-100 mb-8 leading-relaxed">
                                N'hésitez pas à nous rendre visite ou à nous appeler pour discuter de votre projet de pèlerinage.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 p-3 rounded-lg"><MapPin className="w-6 h-6" /></div>
                                    <div>
                                        <h3 className="font-bold text-lg">Adresse</h3>
                                        <p className="text-primary-100">123 Rue de la Mecque<br />75000 Paris, France</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 p-3 rounded-lg"><Phone className="w-6 h-6" /></div>
                                    <div>
                                        <h3 className="font-bold text-lg">Téléphone</h3>
                                        <p className="text-primary-100">+33 1 23 45 67 89</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 p-3 rounded-lg"><Mail className="w-6 h-6" /></div>
                                    <div>
                                        <h3 className="font-bold text-lg">Email</h3>
                                        <p className="text-primary-100">contact@hajjtravel.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <div className="flex gap-4">
                                {/* Social Icons Placeholder */}
                                <div className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-colors" />
                                <div className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-colors" />
                                <div className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - JotForm Embed */}
                    <div className="p-0 md:p-6 w-full bg-gray-50">
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
