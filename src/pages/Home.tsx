import Section from '../components/Section';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Plane, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import flyerHajj from '../assets/PHOTO-2026-02-18-17-05-02.jpg';
import flyerOmra from '../assets/PHOTO-2026-02-14-10-20-37.jpg';
import iconHajj from '../assets/iconhajj.jpg';
import iconHajj2 from '../assets/iconhajj2.jpg';
import orientalBg from '../assets/oriental-luxury-bg.png';
import heroBg from '../assets/bacgroundsection1.png';

export default function Home() {
    return (
        <>
            <SEO title="Accueil" description="Le Hajj bien accompli n’a d’autre récompense que le Paradis. Préparez-le dans les meilleures conditions avec Umraty Agence." />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-dark-900 text-white overflow-hidden">
                {/* Background Image - Crowd/Mecca */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark-900/90" />

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 text-white drop-shadow-lg leading-tight"
                    >
                        Le Hajj bien accompli <br />
                        <span className="text-primary-500">n’a d’autre récompense que le Paradis.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Préparez-le dans les meilleures conditions. <br />
                        Accompagnement complet, sérénité garantie.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/contact" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/40 text-lg uppercase tracking-wide">
                            Inscrivez vous maintenant
                        </Link>
                        <a href="https://wa.me/33758484477" className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full transition-all transform hover:scale-105 hover:shadow-lg text-lg uppercase tracking-wide shadow-green-900/20">
                            WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Intro text section */}
            <Section variant="light" className="text-center relative">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-dark-900 mb-6">Réservez dès Aujourd'hui</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Le Hajj est un devoir sacré, mais aussi une organisation exigeante. Chez <span className="font-bold text-primary-600">Umraty Agence</span>, nous en sommes conscients : c’est pourquoi nous vous guidons et vous accompagnons à chaque étape de ce voyage béni.
                    </p>
                    <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
                </div>
            </Section>

            {/* Guide Complet Section */}
            <Section variant="light" className="relative pt-0">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-6">Omra/Hajj avec notre agence</h2>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                        Vous souhaitez comprendre chaque étape de votre Hajj ou de votre Omra ?
                    </p>
                    <p className="text-gray-600 mb-10">
                        Retrouvez dans notre guide complet toutes les informations nécessaires, de la réservation jusqu’à votre retour.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
                        <div className="h-64 rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={iconHajj} alt="Etape Hajj" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-64 rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-300 md:mt-12">
                            <img src={iconHajj2} alt="Message Hajj" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <Link to="/contact" className="inline-block px-10 py-4 bg-dark-900 text-white hover:bg-primary-600 font-bold rounded-full transition-all text-lg shadow-lg">
                        En savoir plus
                    </Link>
                </div>
            </Section>

            {/* Nos forfait hajj section */}
            <Section variant="gold" className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-6">Nos forfaits Hajj</h2>
                        <p className="text-xl text-gray-800 mb-6 font-light">
                            Découvrez nos services pour préparer un Hajj accompli, conforme à vos envies et à vos moyens.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Chez Umraty Agence, nous savons que le Hajj n’est pas un simple voyage, mais l’un des plus grands actes d’adoration.
                            Nos forfaits ont été créés pour s’adapter à vos attentes et à votre budget, afin que vous puissiez accomplir ce pilier de l’Islam dans les meilleures conditions, avec sérénité et confiance.
                        </p>
                        <Link to="/services" className="inline-flex items-center text-primary-700 font-bold hover:text-primary-900 transition-colors border-b-2 border-primary-600 pb-1">
                            En savoir plus
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-gray-100"
                    >
                        <img
                            src={flyerHajj}
                            alt="Forfaits Hajj"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </div>
            </Section>

            {/* Guide Omra/Hajj Section */}
            <Section variant="light">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                    {/* Image - Placeholder for 'groupe omra bonne dimension' */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl lg:order-2 flex items-center justify-center bg-gray-100"
                    >
                        <img
                            src={flyerOmra}
                            alt="Guide Omra"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:order-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-6">Guide Omra/Hajj</h2>
                        <h3 className="text-xl font-bold text-primary-600 mb-4">Aboul Boukhary Yadaly</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Le Hajj peut être une source d’inquiétude : peur de mal accomplir les rites ou de se perdre face aux foules.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Avec Umraty Agence, soyez rassurés : Aboul Boukhary Yadaly, imam khatib et guide expérimenté, diplômé de l’Université Islamique de Médine, vous accompagne pas à pas pour un voyage sacré en toute confiance.
                        </p>
                        <Link to="/services" className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors border-b-2 border-primary-600 pb-1">
                            En savoir plus
                        </Link>
                    </motion.div>
                </div>
            </Section>

            {/* Services Divers */}
            <Section
                variant="image"
                className="text-white relative overflow-hidden"
                style={{
                    backgroundImage: `url(${orientalBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay for better readability if needed, though variant="dark" usually handles background color, here we use image */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Services divers</h2>
                        <p className="text-xl text-gray-200 mb-8">
                            Besoin d’un visa, de réservez un hotel ou encore de reservez vos billet de train Médina – Mekkah ?
                        </p>
                        <p className="text-gray-100 mb-8">
                            Consulter dès maintenant nos service pour vous faciliter votre voyage.
                        </p>
                        <Link to="/services" className="px-8 py-3 border border-primary-500 text-primary-400 hover:bg-primary-600 hover:text-white transition-all rounded-full font-bold">
                            En savoir plus
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                            <Plane className="w-10 h-10 text-primary-500 mb-4" />
                            <h4 className="font-bold text-lg mb-2 text-white">Vols & Train</h4>
                            <p className="text-sm text-white">Réservation simplifiée</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                            <ShieldCheck className="w-10 h-10 text-primary-500 mb-4" />
                            <h4 className="font-bold text-lg mb-2 text-white">Visas</h4>
                            <p className="text-sm text-white">Démarches administratives</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Nos Services d'Excellence */}
            <Section variant="light">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-4">Nos Services d'Excellence</h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Nous proposons des formules adaptées à tous les besoins pour vous permettre de vivre votre adoration en toute tranquillité.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <img src={iconHajj} alt="Packages" className="w-12 h-12 object-contain" />,
                            title: "Packages Complets",
                            desc: "Vol, hébergement et transferts inclus pour un voyage sans souci."
                        },
                        {
                            icon: <img src={iconHajj2} alt="Hotels" className="w-12 h-12 object-contain" />,
                            title: "Hôtels Premium",
                            desc: "Séjournez dans les meilleurs hôtels à proximité des lieux saints."
                        },
                        {
                            icon: <ShieldCheck className="w-8 h-8" />,
                            title: "Guides Religieux",
                            desc: "Accompagnement par des guides qualifiés pour vous assister dans vos rites."
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 hover:border-primary-200 transition-all duration-300 group"
                        >
                            <div className="w-20 h-20 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 overflow-hidden p-2">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-serif text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
}
