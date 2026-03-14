import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X } from 'lucide-react'

const comparisons = [
    'Same-Day Delivery',
    'Hotel-Grade Quality',
    'Zero Smoke Charcoal',
    'Bulk Pricing Discounts',
    'Dedicated Account Manager',
    'Custom Order Sizes',
    'Free Quality Samples',
    'WhatsApp Support 24/7',
]

export default function WhyChooseUs() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="about"
            className="section-padding"
            style={{ background: 'var(--dark-surface)' }}
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-4">
                        Why Choose Us?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        We're Not Just <span className="fire-text">Another Supplier</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">See how Kamlesh Charcoal compares to your regular local supplier.</p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="rounded-3xl overflow-hidden border border-white/8"
                >
                    {/* Column Headers */}
                    <div className="grid grid-cols-3 bg-white/3 border-b border-white/8">
                        <div className="p-5 text-sm font-semibold text-zinc-400">Feature</div>
                        <div className="p-5 text-center border-l border-white/8">
                            <span className="text-lg font-black fire-text">Kamlesh Co.</span>
                        </div>
                        <div className="p-5 text-center border-l border-white/8">
                            <span className="text-zinc-500 font-semibold text-sm">Others</span>
                        </div>
                    </div>

                    {/* Rows */}
                    {comparisons.map((item, idx) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                            className={`grid grid-cols-3 border-b border-white/5 ${idx % 2 === 0 ? 'bg-white/1' : ''
                                } hover:bg-orange-500/5 transition-colors duration-200`}
                        >
                            <div className="p-4 text-sm text-zinc-300 flex items-center">{item}</div>
                            <div className="p-4 flex justify-center items-center border-l border-white/5">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={inView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.08, type: 'spring' }}
                                    className="w-8 h-8 rounded-full flex items-center justify-center"
                                    style={{ background: 'rgba(34,197,94,0.15)' }}
                                >
                                    <Check size={16} className="text-green-400" strokeWidth={3} />
                                </motion.div>
                            </div>
                            <div className="p-4 flex justify-center items-center border-l border-white/5">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={inView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.08, type: 'spring' }}
                                    className="w-8 h-8 rounded-full flex items-center justify-center"
                                    style={{ background: 'rgba(239,68,68,0.12)' }}
                                >
                                    <X size={16} className="text-red-500" strokeWidth={3} />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="mt-10 text-center"
                >
                    <a
                        href={`https://wa.me/918542800091?text=${encodeURIComponent('Hi, I want a free charcoal sample to test quality before placing bulk order.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ripple-button inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold fire-gradient hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-900/40"
                    >
                        🎁 Request Free Sample
                    </a>
                    <p className="text-zinc-500 text-sm mt-3">No commitment. Test quality before ordering.</p>
                </motion.div>
            </div>
        </section>
    )
}
