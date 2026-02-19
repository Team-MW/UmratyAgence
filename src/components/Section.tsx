import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'light' | 'dark' | 'image' | 'gold';
    id?: string;
    style?: React.CSSProperties;
}

export default function Section({ children, className, variant = 'light', id, style }: SectionProps) {
    const getBgClass = () => {
        switch (variant) {
            case 'dark':
                return 'bg-dark-900 text-white';
            case 'gold':
                return 'bg-primary-50 text-dark-900';
            case 'image':
                return 'bg-cover bg-center text-white relative'; // Needs extra handling for overlay
            default:
                return 'bg-white text-dark-900';
        }
    };

    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn("py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative", getBgClass(), className)}
            style={style}
        >
            <div className="max-w-7xl mx-auto relative z-10">
                {children}
            </div>
            {variant === 'image' && (
                <div className="absolute inset-0 bg-black/50 z-0" />
            )}
        </motion.section>
    );
}
