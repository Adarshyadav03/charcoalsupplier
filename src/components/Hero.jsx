import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, Truck, Star, Shield } from 'lucide-react'

// Ember particle (tiny floating dot)
function Ember({ style }) {
    return (
        <div
            className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
            style={{
                background: `radial-gradient(circle, #FF9B45, #FF3D00)`,
                animation: `ember-drift ${2.5 + Math.random() * 3}s ease-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
                ...style,
            }}
        />
    )
}

const embers = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 50}px`,
}))

const badges = [
    { icon: Truck, label: 'Same Day Delivery' },
    { icon: Star, label: 'Hotel Grade Quality' },
    { icon: Shield, label: '10+ Years Trusted' },
]

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 110%, rgba(255,61,0,0.25) 0%, transparent 70%), var(--dark-bg)' }}
        >
            {/* Deep bg texture */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B1A' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Ember particles */}
            {embers.map((e) => (
                <Ember key={e.id} style={{ left: e.left, bottom: e.bottom }} />
            ))}

            {/* Radial fire glow bottom center */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(255,61,0,0.3) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left — Content */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-500/30 text-orange-400 text-sm font-medium mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        Mumbai's #1 Bulk Charcoal Supplier
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05]"
                    >
                        <span className="text-white">Hotel-Grade</span>
                        <br />
                        <span className="fire-text">Charcoal.</span>
                        <br />
                        <div className="text-white text-4xl md:text-5xl lg:text-6xl mt-2">
                            <TypeAnimation
                                sequence={[
                                    'Bulk Supply Ready.', 2000,
                                    'Same Day Delivered.', 2000,
                                    'Premium Quality.', 2000,
                                    'Best Price Guaranteed.', 2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                style={{ display: 'inline-block' }}
                            />
                        </div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="text-lg text-zinc-400 mb-10 max-w-lg leading-relaxed"
                    >
                        Supplying premium coconut shell charcoal, hardwood charcoal & BBQ briquettes
                        to 500+ hotels, restaurants & BBQ parks across Mumbai & Maharashtra.
                        <strong className="text-orange-400"> Zero smoke. Maximum heat. Guaranteed.</strong>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.65 }}
                        className="flex flex-wrap gap-4 mb-12"
                    >
                        <a
                            href={`https://wa.me/919999999999?text=${encodeURIComponent('Hi, I need bulk charcoal supply for my business. Please share price list.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ripple-button group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-lg fire-gradient hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl shadow-orange-900/50"
                            style={{ animation: 'glow-pulse 2.5s ease-in-out infinite' }}
                        >
                            Get Free Quote
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#products"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-lg border border-white/15 hover:border-orange-500/50 hover:bg-white/5 transition-all duration-300"
                        >
                            View Products
                        </a>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="flex flex-wrap gap-4"
                    >
                        {badges.map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl glass-card text-sm text-zinc-300"
                            >
                                <Icon size={16} className="text-orange-400" />
                                {label}
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-zinc-500">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-5 h-8 border-2 border-zinc-600 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-orange-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}
