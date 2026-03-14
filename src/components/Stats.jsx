import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
    { value: 500, suffix: '+', label: 'Restaurants Served', icon: '🍽️', color: '#FF6B1A' },
    { value: 10, suffix: '+', label: 'Years of Experience', icon: '📅', color: '#FF9B45' },
    { value: 24, suffix: 'hr', label: 'Delivery Time', icon: '🚚', color: '#FBBF24' },
    { value: 1000, suffix: '+', label: 'Tons Supplied', icon: '📦', color: '#FF3D00' },
]

export default function Stats() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            className="py-20"
            style={{ background: 'linear-gradient(135deg, #0F0500 0%, #1A0800 50%, #0A0A0A 100%)' }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
                        Numbers That Speak <span className="fire-text">For Themselves</span>
                    </h2>
                    <p className="text-zinc-400">10+ years of trust across Mumbai & Maharashtra.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: idx * 0.12, type: 'spring', damping: 12 }}
                            className="glass-card rounded-3xl p-8 text-center border border-white/8 hover:border-orange-500/30 transition-colors duration-300"
                        >
                            <div className="text-5xl mb-4" style={{ animation: 'float-up 3s ease-in-out infinite', animationDelay: `${idx * 0.5}s` }}>
                                {stat.icon}
                            </div>
                            <div className="text-5xl font-black mb-2 counter-value" style={{ color: stat.color }}>
                                {inView ? (
                                    <CountUp
                                        start={0}
                                        end={stat.value}
                                        duration={2.5}
                                        delay={idx * 0.2}
                                        suffix={stat.suffix}
                                    />
                                ) : '0'}
                            </div>
                            <p className="text-zinc-400 text-sm font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Trust bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="mt-14 p-6 rounded-2xl text-center glass-card border border-orange-500/20"
                >
                    <p className="text-zinc-300 text-lg">
                        🔥 <strong className="text-white">Kamlesh Charcoal</strong> has been the backbone of Mumbai's food industry since{' '}
                        <strong className="fire-text">2014</strong>. No missed deliveries. Ever.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
