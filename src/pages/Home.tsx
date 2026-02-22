import Section from '../components/Section';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Plane, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import flyerHajj from '../assets/PHOTO-2026-02-18-17-05-02.jpg';
import flyerOmra from '../assets/PHOTO-2026-02-14-10-20-37.jpg';
import iconHajj from '../assets/iconhajj.jpg';
import iconHajj2 from '../assets/iconhajj2.jpg';

import heroBg from '../assets/bacgroudn11.png';
import servicesBg from '../assets/pexels-shams-alam-ansari-2453647-4118038.jpg';

import faqImage1 from '../assets/faq1.jpg';
import faqImage2 from '../assets/faq2.jpg';

export default function Home() {
    return (
        <>
            <SEO title="Accueil" description="Le Hajj bien accompli n’a d’autre récompense que le Paradis. Préparez-le dans les meilleures conditions avec Umraty Agence." />

            {/* Hero Section */}
            <section className="relative w-full bg-dark-900 text-white">
                {/* Background Image - Full width, auto height to show full image */}
                <div className="relative w-full">
                    <img
                        src={heroBg}
                        alt="Background"
                        className="w-full h-auto block min-h-[500px] object-cover md:object-contain md:min-h-0"
                    />
                    {/* Gradient Overlay matching image size */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark-900/90" />
                </div>

                {/* Content Overlay - Centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4 max-w-4xl mx-auto pt-8 md:pt-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-white drop-shadow-xl tracking-wide"
                        >
                            Le Hajj bien accompli <br />
                            <span className="text-primary-300 italic font-light">n’a d’autre récompense que le Paradis.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-base md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md hidden md:block"
                        >
                            Préparez-le dans les meilleures conditions. <br />
                            Accompagnement complet, sérénité garantie.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="flex justify-center"
                        >
                            <Link to="/contact" className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-dark-900 text-white font-semibold rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] text-sm md:text-base uppercase tracking-widest">
                                Inscrivez vous maintenant
                            </Link>
                        </motion.div>
                    </div>
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
                        <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-6">Forfaits Hajj</h2>
                        <p className="text-xl text-gray-800 mb-6 font-light">
                            Découvrez nos services pour préparer un Hajj accompli, conforme à vos envies et à vos moyens.
                        </p>
                        <p className="text-xl text-gray-800 mb-6 font-light">
                            Chez Umraty Agence, nous savons que le Hajj n’est pas un simple voyage, mais l’un des plus grands actes d’adoration.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image - Placeholder for 'groupe omra bonne dimension' */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-gray-100"
                    >
                        <img
                            src={flyerOmra}
                            alt="Guide Omra"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
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

            {/* Services Divers - Bulles */}
            <Section
                variant="image"
                className="text-white relative overflow-hidden py-20 md:py-28"
                style={{
                    backgroundImage: `url(${servicesBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Bulles décoratives en arrière-plan */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl" />
                    <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-400/5 blur-3xl" />
                </div>

                <div className="relative z-10 space-y-8 md:space-y-10">
                    {/* Titre centré */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white text-center leading-tight drop-shadow-lg"
                    >
                        Services divers
                    </motion.h2>

                    {/* Bulle 1 : accroche */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex justify-center"
                    >
                        <div className="inline-block max-w-3xl px-8 py-6 md:px-10 md:py-7 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/20">
                            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 leading-relaxed font-light text-center">
                                Besoin d’un visa, de réserver un hôtel ou encore de réserver vos billets de train Médina – Mekkah ?
                            </p>
                        </div>
                    </motion.div>

                    {/* Bulle 2 : sous-texte */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="inline-block max-w-2xl px-8 py-5 md:px-10 md:py-6 rounded-[2rem] bg-black/30 backdrop-blur-md border border-white/15 shadow-lg">
                            <p className="text-lg md:text-xl text-white/95 leading-relaxed text-center">
                                Consultez dès maintenant nos services pour vous faciliter votre voyage.
                            </p>
                        </div>
                    </motion.div>

                    {/* Cartes services en bulles + CTA */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch max-w-5xl mx-auto pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="flex flex-col p-8 rounded-[2rem] bg-black/35 backdrop-blur-xl border border-white/25 shadow-2xl shadow-black/30 hover:border-primary-400/60 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center mb-5 border border-primary-400/30">
                                <Plane className="w-8 h-8 text-primary-400" />
                            </div>
                            <h4 className="font-bold text-xl md:text-2xl mb-2 text-white">Vols & Train</h4>
                            <p className="text-white/90 flex-1">Réservation simplifiée</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="flex flex-col p-8 rounded-[2rem] bg-black/35 backdrop-blur-xl border border-white/25 shadow-2xl shadow-black/30 hover:border-primary-400/60 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center mb-5 border border-primary-400/30">
                                <ShieldCheck className="w-8 h-8 text-primary-400" />
                            </div>
                            <h4 className="font-bold text-xl md:text-2xl mb-2 text-white">Visas</h4>
                            <p className="text-white/90 flex-1">Démarches administratives</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.45 }}
                            className="flex flex-col justify-center items-center p-8 rounded-[2rem] bg-primary-500/20 backdrop-blur-xl border-2 border-primary-400/50 shadow-2xl shadow-primary-900/20 hover:bg-primary-500/30 transition-all duration-300"
                        >
                            <Link
                                to="/services"
                                className="text-center text-lg md:text-xl font-bold text-primary-200 hover:text-white transition-colors"
                            >
                                En savoir plus
                            </Link>
                            <p className="text-sm text-white/80 mt-2 text-center">Découvrir tous nos services</p>
                        </motion.div>
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

            {/* FAQ Slider Section */}
            <Section variant="light" className="overflow-hidden">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-4">Questions Fréquentes</h2>
                    <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
                </div>

                <div className="flex overflow-x-auto pb-8 gap-6 px-4 md:justify-center scrollbar-hide snap-x">
                    {[faqImage1, faqImage2].map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-primary-50 snap-center"
                        >
                            <img
                                src={img}
                                alt={`FAQ ${index + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
}
