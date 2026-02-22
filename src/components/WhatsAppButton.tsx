import { motion } from 'framer-motion';
import whatsappLogo from '../assets/logo.png';

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/33758484477"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 p-2 rounded-full shadow-2xl transition-all flex items-center justify-center border-2 border-white hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
            aria-label="Contact WhatsApp"
        >
            <img
                src={whatsappLogo}
                alt="WhatsApp"
                className="w-14 h-14 rounded-full"
            />
        </motion.a>
    );
}
