import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const industries = [
    {
        id: 1,
        icon: '🏨',
        name: 'Hotels & Resorts',
        description: 'Premium charcoal for hotel BBQ setups, buffet grills, and fine-dining tandoors.',
        caseStudy: {
            client: 'Grand Hyatt Partner, Mumbai',
            challenge: 'Inconsistent charcoal quality affecting food taste and chef complaints.',
            solution: 'Switched to our Coconut Shell Charcoal — zero smoke, consistent 900°C heat.',
            result: '30% reduction in charcoal consumption, zero guest complaints in 8 months.',
        },
    },
    {
        id: 2,
        icon: '🍽️',
        name: 'Restaurants',
        description: 'Reliable bulk supply for tandoor, charcoal grills, and open-fire cooking stations.',
        caseStudy: {
            client: 'Chain Restaurant Group, Andheri',
            challenge: 'Supplier delays causing kitchen downtime during peak hours.',
            solution: 'Set up weekly auto-delivery schedule with emergency same-day backup.',
            result: 'Zero supply disruptions in 1 year across 5 outlets.',
        },
    },
    {
        id: 3,
        icon: '🔥',
        name: 'BBQ Parks',
        description: 'High-volume briquettes and coconut charcoal for outdoor BBQ setups and events.',
        caseStudy: {
            client: 'Smoky Sundays BBQ Park, Pune',
            challenge: 'Excessive smoke causing customer discomfort at open-air venue.',
            solution: 'Replaced wood charcoal with our premium coconut shell grade.',
            result: '95% smoke reduction, 40% better burn efficiency, customers love it.',
        },
    },
    {
        id: 4,
        icon: '🍱',
        name: 'Catering Companies',
        description: 'Flexible order sizes for outdoor events, weddings, and large-scale catering.',
        caseStudy: {
            client: 'Royal Events Catering, Thane',
            challenge: 'Irregular event schedules making stock management difficult.',
            solution: 'On-demand ordering via WhatsApp with 24-hour turnaround.',
            result: 'Cut charcoal waste by 25%, saved ₹18,000/month on average.',
        },
    },
    {
        id: 5,
        icon: '🏬',
        name: 'Food Courts',
        description: 'Consistent supply for multi-vendor food courts needing multiple charcoal types.',
        caseStudy: {
            client: 'Phoenix Mall Food Court, Mumbai',
            challenge: 'Managing supply for 12 different vendors with different charcoal needs.',
            solution: 'Single consolidated order with customized mix for each stall type.',
            result: 'Single-invoice simplicity, 18% bulk savings vs individual orders.',
        },
    },
    {
        id: 6,
        icon: '🍢',
        name: 'Street Food & Kiosks',
        description: 'Affordable small-batch charcoal for chai stalls, corn carts, and roadside grills.',
        caseStudy: {
            client: 'Nashik Street Food Association',
            challenge: 'Expensive charcoal eating into thin margins for small vendors.',
            solution: 'Introduced group buying program for 50+ small vendors.',
            result: '₹12/kg savings vs retail, delivered weekly to collection point.',
        },
    },
]

function CaseStudyModal({ industry, onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 40 }}
                transition={{ type: 'spring', damping: 25 }}
                className="max-w-lg w-full rounded-3xl p-8 relative border border-white/10"
                style={{ background: 'var(--dark-card)' }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/20 transition-all"
                >
                    <X size={16} />
                </button>

                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-black text-white mb-1">{industry.name}</h3>
                <p className="text-orange-400 text-sm font-semibold mb-6">{industry.caseStudy.client}</p>

                <div className="space-y-4">
                    {[
                        { label: '❗ Challenge', value: industry.caseStudy.challenge, color: 'border-red-500/30' },
                        { label: '✅ Solution', value: industry.caseStudy.solution, color: 'border-orange-500/30' },
                        { label: '🏆 Result', value: industry.caseStudy.result, color: 'border-green-500/30' },
                    ].map(({ label, value, color }) => (
                        <div key={label} className={`p-4 rounded-xl border ${color} bg-white/2`}>
                            <p className="text-xs font-bold text-zinc-500 mb-1">{label}</p>
                            <p className="text-zinc-300 text-sm">{value}</p>
                        </div>
                    ))}
                </div>

                <a
                    href={`https://wa.me/918542800091?text=${encodeURIComponent(`Hi, I run a ${industry.name} business and want to discuss charcoal supply.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full flex items-center justify-center py-3.5 rounded-xl text-white font-bold fire-gradient hover:opacity-90 transition-opacity"
                >
                    I have a {industry.name} — Get Quote
                </a>
            </motion.div>
        </motion.div>
    )
}

export default function Industries() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })
    const [activeModal, setActiveModal] = useState(null)

    return (
        <section id="industries" className="section-padding" style={{ background: 'var(--dark-bg)' }}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-4">
                        Industries We Serve
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Trusted Across Every <span className="fire-text">Food Industry</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Click any industry card to read a real success story.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, idx) => (
                        <motion.button
                            key={ind.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            onClick={() => setActiveModal(ind)}
                            className="group text-left p-7 rounded-3xl border border-white/8 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
                            style={{
                                background: 'var(--dark-card)',
                                boxShadow: '0 0 0 0 rgba(255,107,26,0)',
                            }}
                            whileHover={{
                                boxShadow: '0 0 30px rgba(255,107,26,0.15)',
                                y: -4,
                            }}
                        >
                            <div
                                className="text-4xl mb-4 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                style={{ background: 'rgba(255,107,26,0.1)' }}
                            >
                                {ind.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                                {ind.name}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{ind.description}</p>
                            <span className="text-xs text-orange-400 font-semibold group-hover:underline">
                                Read Case Study →
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {activeModal && (
                    <CaseStudyModal industry={activeModal} onClose={() => setActiveModal(null)} />
                )}
            </AnimatePresence>
        </section>
    )
}
