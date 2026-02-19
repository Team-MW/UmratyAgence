import { motion } from 'framer-motion';

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
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors flex items-center justify-center border-2 border-white"
            aria-label="Contact WhatsApp"
        >
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
            >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.654-.698c.93.597 1.69.917 2.806.917 3.181 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.768-5.768-5.768zm0 9.778c-.961 0-1.748-.288-2.673-.799l-.265-.133-1.638.429.437-1.596-.153-.263c-.569-.906-.906-1.742-.906-2.616 0-2.208 1.796-4.004 4.004-4.004 2.208 0 4.004 1.796 4.004 4.004 0 2.208-1.796 4.004-4.004 4.004z" />
            </svg>
        </motion.a>
    );
}
