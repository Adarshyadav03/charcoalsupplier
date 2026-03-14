import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Flame, Wind, Clock, Zap } from 'lucide-react'

const products = [
    {
        id: 1,
        name: 'Coconut Shell Charcoal',
        tag: 'BESTSELLER',
        tagColor: '#FF6B1A',
        description: 'Premium grade coconut shell charcoal. Zero chemical additives. Perfect for hookah, restaurants & hotels.',
        gradient: 'linear-gradient(145deg, #1A0F00, #2D1500)',
        heatLevel: 92,
        smokeLevel: 1,
        burnTime: 180,
        price: 'Best Price',
        minOrder: '50 kg',
        icon: '🥥',
        image: '/coconut-charcoal.jpg',
    },
    {
        id: 2,
        name: 'Premium Hardwood Charcoal',
        tag: 'RESTAURANT FAV',
        tagColor: '#FF9B45',
        description: 'Dense hardwood lakda charcoal with consistent heat. Ideal for tandoor, grills & commercial kitchens.',
        gradient: 'linear-gradient(145deg, #0F1200, #1A2000)',
        heatLevel: 85,
        smokeLevel: 2,
        burnTime: 150,
        price: 'Best Price',
        minOrder: '100 kg',
        icon: '🪵',
        image: '/lakda-charcoal.jpg',
    },
    {
        id: 3,
        name: 'BBQ Briquettes',
        tag: 'BEST VALUE',
        tagColor: '#FF3D00',
        description: 'Compressed briquettes for long, even burning. Perfect for BBQ parks, hotels & outdoor catering.',
        gradient: 'linear-gradient(145deg, #0A0A0A, #1A1010)',
        heatLevel: 78,
        smokeLevel: 2,
        burnTime: 210,
        price: 'Best Price',
        minOrder: '200 kg',
        icon: '🔥',
        image: '/bbq-briquettes.jpg',
    },
]

function HeatBar({ level, color, delay }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    return (
        <div ref={ref} className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                    width: inView ? `${level}%` : '0%',
                    background: `linear-gradient(90deg, ${color}88, ${color})`,
                    transitionDelay: `${delay}ms`,
                }}
            />
        </div>
    )
}

function SmokeDots({ level }) {
    return (
        <div className="flex gap-1.5 items-center">
            {[1, 2, 3, 4, 5].map((i) => (
                <div
                    key={i}
                    className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
                    style={{ background: i <= level ? '#A1A1AA' : 'rgba(255,255,255,0.1)' }}
                />
            ))}
            <span className="text-xs text-zinc-500 ml-1">{level <= 1 ? 'Near Zero' : level <= 2 ? 'Very Low' : 'Low'}</span>
        </div>
    )
}

export default function Products() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="products" className="section-padding" style={{ background: 'var(--dark-surface)' }}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-4">
                        Our Products
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Fuel That Powers <span className="fire-text">The Best Kitchens</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-lg">
                        Hover the cards to see full product specs — heat output, smoke rating, and burn duration.
                    </p>
                </motion.div>

                {/* Flip Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="flip-card h-[420px]"
                        >
                            <div className="flip-card-inner">
                                {/* FRONT */}
                                    <div
                                        className="flip-card-front flex flex-col items-center justify-center p-8 text-center border border-white/8 relative overflow-hidden"
                                        style={{ background: product.gradient }}
                                    >
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                            onError={(e) => { e.target.style.display = 'none' }}
                                        />
                                        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                                        
                                        <div className="relative z-10 text-7xl mb-5" style={{ animation: 'float-up 3s ease-in-out infinite' }}>
                                            {product.icon}
                                        </div>
                                    <span
                                        className="text-xs font-black px-3 py-1 rounded-full mb-4 tracking-widest"
                                        style={{ background: `${product.tagColor}25`, color: product.tagColor, border: `1px solid ${product.tagColor}40` }}
                                    >
                                        {product.tag}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{product.description}</p>
                                    <div className="text-3xl font-black" style={{ color: product.tagColor }}>{product.price}</div>
                                    <p className="text-zinc-500 text-xs mt-1">Min. order: {product.minOrder}</p>
                                    <div className="absolute bottom-5 text-xs text-zinc-600 animate-bounce">Hover to see specs ↑</div>
                                </div>

                                {/* BACK */}
                                <div
                                    className="flip-card-back flex flex-col justify-between p-8 border border-white/8"
                                    style={{ background: product.gradient }}
                                >
                                    <div>
                                        <div className="flex items-center gap-2 mb-6">
                                            <span className="text-3xl">{product.icon}</span>
                                            <div>
                                                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                                                <span className="text-xs" style={{ color: product.tagColor }}>{product.tag}</span>
                                            </div>
                                        </div>

                                        {/* Heat Output */}
                                        <div className="mb-5">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
                                                    <Flame size={14} className="text-orange-400" />
                                                    Heat Output
                                                </div>
                                                <span className="text-orange-400 font-bold text-sm">{product.heatLevel}%</span>
                                            </div>
                                            <HeatBar level={product.heatLevel} color={product.tagColor} delay={200} />
                                        </div>

                                        {/* Smoke Level */}
                                        <div className="mb-5">
                                            <div className="flex items-center gap-1.5 text-sm font-semibold text-white mb-2">
                                                <Wind size={14} className="text-zinc-400" />
                                                Smoke Level
                                            </div>
                                            <SmokeDots level={product.smokeLevel} />
                                        </div>

                                        {/* Burn Efficiency */}
                                        <div className="mb-5">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
                                                    <Zap size={14} className="text-yellow-400" />
                                                    Burn Efficiency
                                                </div>
                                                <span className="text-yellow-400 font-bold text-sm">
                                                    {product.heatLevel > 88 ? 'Maximum' : product.heatLevel > 80 ? 'High' : 'Good'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Burn Time */}
                                        <div className="flex items-center gap-1.5 text-sm text-zinc-300 mb-5">
                                            <Clock size={14} className="text-zinc-400" />
                                            Burns for <span className="text-white font-bold ml-1">{product.burnTime} min+</span>
                                        </div>
                                    </div>

                                    <a
                                        href={`https://wa.me/918542800091?text=${encodeURIComponent(`Hi, I want to order ${product.name} (${product.minOrder} minimum). Please share availability and delivery details.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-3 rounded-xl text-white font-bold text-center text-sm fire-gradient hover:opacity-90 transition-opacity"
                                    >
                                        Get Best Price →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-14 text-center"
                >
                    <p className="text-zinc-400 mb-4">Need a custom blend or bulk pricing for 500kg+?</p>
                    <a
                        href={`https://wa.me/918542800091?text=${encodeURIComponent('Hi, I need a custom bulk quote for charcoal supply. Please contact me.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-orange-500/40 text-orange-400 font-semibold hover:bg-orange-500/10 transition-all duration-300"
                    >
                        Request Custom Quote
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
