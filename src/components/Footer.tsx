import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import orientalBg from '../assets/oriental-luxury-bg.png';

export default function Footer() {
    return (
        <footer
            className="relative bg-dark-900 text-white border-t border-primary-800/30 overflow-hidden"
            style={{
                backgroundImage: `url(${orientalBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-dark-950/90" />

            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-900 via-primary-500 to-primary-900 z-20" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="block">
                            <h2 className="text-3xl font-serif font-bold text-primary-500 mb-2">Umraty Agence</h2>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Votre partenaire de confiance pour le Hajj et la Omra. Nous vous accompagnons spirituellement et logistiquement pour un voyage inoubliable.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {/* Placeholder for social icons */}
                            <a href="#" className="w-10 h-10 rounded-full bg-primary-900/50 flex items-center justify-center text-primary-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-primary-900/50 flex items-center justify-center text-primary-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-white mb-6 relative inline-block">
                            Navigation
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary-600"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 group-hover:w-2.5 transition-all"></span>
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 group-hover:w-2.5 transition-all"></span>
                                    Nos Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 group-hover:w-2.5 transition-all"></span>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-white mb-6 relative inline-block">
                            Nos Offres
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary-600"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 group-hover:w-2.5 transition-all"></span>
                                    Omra Confort
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 group-hover:w-2.5 transition-all"></span>
                                    Hajj Prestige
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 group-hover:w-2.5 transition-all"></span>
                                    Visas & Vols
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-white mb-6 relative inline-block">
                            Nous Contacter
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary-600"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start group">
                                <div className="mt-1 min-w-[32px] w-8 h-8 rounded-full bg-primary-900/30 flex items-center justify-center mr-3 group-hover:bg-primary-600 transition-colors">
                                    <Phone size={16} className="text-primary-500 group-hover:text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Appelez-nous</span>
                                    <a href="https://wa.me/33758484477" className="text-gray-300 hover:text-white font-medium transition-colors">
                                        +33 7 58 48 44 77
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <div className="mt-1 min-w-[32px] w-8 h-8 rounded-full bg-primary-900/30 flex items-center justify-center mr-3 group-hover:bg-primary-600 transition-colors">
                                    <Mail size={16} className="text-primary-500 group-hover:text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Email</span>
                                    <a href="mailto:contact@umratyagence.com" className="text-gray-300 hover:text-white font-medium transition-colors">
                                        contact@umratyagence.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-white/5 bg-dark-950/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        Copyright © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Umraty Agence</span>. Tous droits réservés.
                    </p>
                    <div className="flex items-center gap-6">
                        <p className="text-xs text-gray-600 font-medium tracking-wide">
                            Powered by <span className="text-primary-700 font-bold">MICRODIDACT</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
