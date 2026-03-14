import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
    const msg = encodeURIComponent('Hi Kamlesh Charcoal, I need bulk charcoal supply for my business. Please share your current price list and availability.')

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            {/* Tooltip */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3, duration: 0.5 }}
                className="px-3 py-1.5 rounded-xl text-xs text-white font-medium glass-card border border-white/10 whitespace-nowrap"
                style={{ background: 'rgba(30,30,30,0.95)' }}
            >
                💬 Chat with us on WhatsApp
            </motion.div>

            {/* Button */}
            <motion.a
                href={`https://wa.me/918542800091?text=${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: 'spring', damping: 12 }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
                {/* Pulse rings */}
                <span
                    className="absolute inset-0 rounded-full"
                    style={{
                        animation: 'pulse-ring 2s ease-out infinite',
                        background: 'rgba(37, 211, 102, 0.4)',
                    }}
                />
                <span
                    className="absolute inset-0 rounded-full"
                    style={{
                        animation: 'pulse-ring 2s ease-out infinite',
                        animationDelay: '0.5s',
                        background: 'rgba(37, 211, 102, 0.25)',
                    }}
                />

                {/* WhatsApp SVG Icon */}
                <svg viewBox="0 0 32 32" fill="white" className="w-8 h-8 relative z-10">
                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.532.668 4.904 1.832 6.958L2 30l7.268-1.802A13.921 13.921 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.4a11.353 11.353 0 01-5.892-1.64l-.42-.252-4.312 1.072 1.092-4.2-.276-.44A11.36 11.36 0 014.6 16C4.6 9.704 9.704 4.6 16 4.6S27.4 9.704 27.4 16 22.296 27.4 16 27.4zm6.268-8.484c-.344-.172-2.032-.996-2.348-1.112-.312-.116-.54-.172-.768.172s-.888 1.112-1.084 1.34c-.196.224-.396.252-.736.084-.344-.172-1.448-.532-2.756-1.696-1.02-.908-1.704-2.032-1.904-2.376-.196-.344-.02-.532.152-.704.152-.152.344-.396.512-.6.172-.2.228-.344.344-.572.112-.228.056-.428-.028-.6-.084-.172-.768-1.848-1.052-2.532-.276-.664-.556-.572-.768-.584l-.656-.012c-.228 0-.6.084-.912.428-.316.344-1.196 1.168-1.196 2.848 0 1.676 1.224 3.3 1.396 3.528.172.228 2.408 3.68 5.836 5.16.816.352 1.452.56 1.948.716.82.26 1.564.224 2.152.136.656-.1 2.032-.828 2.316-1.628.284-.8.284-1.484.196-1.628-.084-.144-.312-.228-.652-.4z" />
                </svg>
            </motion.a>
        </div>
    )
}
