import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark-900 border-t border-primary-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Navigation */}
                    <div>
                        <h3 className="text-xl font-serif text-primary-400 mb-6 font-bold uppercase tracking-wider">Navigation</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-300 hover:text-primary-500 transition-colors uppercase text-sm tracking-wide">Accueil</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors uppercase text-sm tracking-wide">Nos Services</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-primary-500 transition-colors uppercase text-sm tracking-wide">Formulaire</Link></li>
                        </ul>
                    </div>

                    {/* Informations */}
                    <div>
                        <h3 className="text-xl font-serif text-primary-400 mb-6 font-bold uppercase tracking-wider">Informations</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors uppercase text-sm tracking-wide">Omra</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors uppercase text-sm tracking-wide">Hajj</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-primary-500 transition-colors uppercase text-sm tracking-wide">Visa</Link></li>
                        </ul>
                    </div>

                    {/* Contact - Whatsapp */}
                    <div>
                        <h3 className="text-xl font-serif text-primary-400 mb-6 font-bold uppercase tracking-wider">CONTACT</h3>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="bg-primary-600/20 p-3 rounded-full group-hover:bg-primary-600 transition-colors">
                                <Phone className="w-6 h-6 text-primary-500 group-hover:text-white" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Whatsapp</p>
                                <a href="https://wa.me/33758484477" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white hover:text-primary-500 transition-colors">+33 7 58 48 44 77</a>
                            </div>
                        </div>
                    </div>

                    {/* Powered By */}
                    <div className="flex flex-col justify-end">
                        <p className="text-gray-500 text-sm mb-1">Copyright © 2025 umratyagence</p>
                        <p className="text-sm font-bold text-primary-600">Powered by MICRODIDACT</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
