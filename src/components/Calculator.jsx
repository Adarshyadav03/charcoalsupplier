import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calculator as CalculatorIcon, TrendingDown, Package, ArrowRight } from 'lucide-react'

const businessTypes = [
    { id: 'hotel', label: '🏨 Hotel / Resort', multiplier: 1.0, avgMonthly: 800 },
    { id: 'restaurant', label: '🍽️ Restaurant', multiplier: 0.85, avgMonthly: 300 },
    { id: 'bbq', label: '🔥 BBQ Park', multiplier: 0.95, avgMonthly: 600 },
    { id: 'catering', label: '🍱 Catering', multiplier: 0.9, avgMonthly: 400 },
    { id: 'food_court', label: '🏬 Food Court', multiplier: 0.8, avgMonthly: 200 },
]

const charcoalTypes = [
    { id: 'coconut', label: 'Coconut Shell Charcoal', pricePerKg: 85, savings: 15 },
    { id: 'hardwood', label: 'Premium Hardwood', pricePerKg: 70, savings: 12 },
    { id: 'briquettes', label: 'BBQ Briquettes', pricePerKg: 55, savings: 10 },
]

export default function Calculator() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    const [businessType, setBusinessType] = useState('restaurant')
    const [usage, setUsage] = useState(300)
    const [charcoalType, setCharcoalType] = useState('coconut')

    const biz = businessTypes.find((b) => b.id === businessType)
    const coal = charcoalTypes.find((c) => c.id === charcoalType)

    const ourCost = Math.round(usage * coal.pricePerKg * biz.multiplier)
    const marketCost = Math.round(ourCost * 1.22)
    const savings = marketCost - ourCost
    const savingsPercent = Math.round((savings / marketCost) * 100)

    const plan =
        usage < 100 ? 'Starter Pack' : usage < 500 ? 'Business Pack' : 'Enterprise Plan'
    const delivery = usage >= 200 ? 'Free' : '₹500 flat'

    const whatsappMsg = encodeURIComponent(
        `Hi, I'm a ${biz.label.replace(/[^\w\s]/gi, '')} and I need ${usage}kg of ${coal.label} per month. Please share your best rate and delivery schedule.`
    )

    return (
        <section
            id="calculator"
            className="section-padding"
            style={{ background: 'var(--dark-bg)' }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-4">
                        <CalculatorIcon size={14} />
                        Cost Calculator
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        How Much Will You <span className="fire-text">Save With Us?</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Select your business type and monthly usage to see your estimated cost and savings vs. a regular supplier.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Input Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="glass-card rounded-3xl p-8 border border-white/8"
                    >
                        {/* Business Type */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-zinc-300 mb-3">
                                1. What type of business?
                            </label>
                            <div className="grid grid-cols-1 gap-2">
                                {businessTypes.map((biz) => (
                                    <button
                                        key={biz.id}
                                        onClick={() => { setBusinessType(biz.id); setUsage(biz.avgMonthly) }}
                                        className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-200 border ${businessType === biz.id
                                            ? 'border-orange-500 bg-orange-500/10 text-orange-300'
                                            : 'border-white/8 text-zinc-400 hover:border-white/20 hover:text-white'
                                            }`}
                                    >
                                        {biz.label}
                                        {businessType === biz.id && (
                                            <span className="float-right text-xs text-orange-500">Selected ✓</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Charcoal Type */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-zinc-300 mb-3">
                                2. Which charcoal type?
                            </label>
                            <div className="grid grid-cols-1 gap-2">
                                {charcoalTypes.map((coal) => (
                                    <button
                                        key={coal.id}
                                        onClick={() => setCharcoalType(coal.id)}
                                        className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-200 border ${charcoalType === coal.id
                                            ? 'border-orange-500 bg-orange-500/10 text-orange-300'
                                            : 'border-white/8 text-zinc-400 hover:border-white/20 hover:text-white'
                                            }`}
                                    >
                                        <span>{coal.label}</span>
                                        <span className="float-right font-bold" style={{ color: charcoalType === coal.id ? '#FF9B45' : '#71717A' }}>
                                            ₹{coal.pricePerKg}/kg
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Usage Slider */}
                        <div>
                            <label className="block text-sm font-semibold text-zinc-300 mb-2">
                                3. Monthly Usage
                            </label>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-zinc-500 text-xs">50 kg</span>
                                <span className="text-2xl font-black text-white">{usage} <span className="text-base text-zinc-400">kg/month</span></span>
                                <span className="text-zinc-500 text-xs">2000 kg</span>
                            </div>
                            <input
                                type="range"
                                min={50}
                                max={2000}
                                step={25}
                                value={usage}
                                onChange={(e) => setUsage(Number(e.target.value))}
                                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, #FF6B1A ${((usage - 50) / 1950) * 100}%, rgba(255,255,255,0.1) ${((usage - 50) / 1950) * 100}%)`,
                                    accentColor: '#FF6B1A',
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Results Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="space-y-4"
                    >
                        {/* Cost Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-card rounded-2xl p-6 border border-white/8">
                                <p className="text-xs text-zinc-500 mb-2 flex items-center gap-1">
                                    <Package size={12} />
                                    WITH KAMLESH
                                </p>
                                <p className="text-3xl font-black text-white mb-1">
                                    ₹{ourCost.toLocaleString()}
                                </p>
                                <p className="text-xs text-orange-400 font-semibold">/month ({usage}kg)</p>
                            </div>
                            <div className="glass-card rounded-2xl p-6 border border-red-500/20">
                                <p className="text-xs text-zinc-500 mb-2">MARKET RATE</p>
                                <p className="text-3xl font-black text-red-400 mb-1">
                                    ₹{marketCost.toLocaleString()}
                                </p>
                                <p className="text-xs text-red-500/60 font-semibold">avg. competitor price</p>
                            </div>
                        </div>

                        {/* Savings */}
                        <div
                            className="rounded-2xl p-6 border border-green-500/30"
                            style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.03))' }}
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <TrendingDown size={18} className="text-green-400" />
                                <span className="text-green-400 font-bold text-sm">YOUR SAVINGS</span>
                            </div>
                            <p className="text-4xl font-black text-white">
                                ₹{savings.toLocaleString()}
                                <span className="text-green-400 text-xl font-bold ml-2">/ month</span>
                            </p>
                            <p className="text-zinc-400 text-sm mt-1">
                                That's <strong className="text-green-400">₹{(savings * 12).toLocaleString()}/year</strong> saved — {savingsPercent}% cheaper than market!
                            </p>
                        </div>

                        {/* Plan Card */}
                        <div className="glass-card rounded-2xl p-6 border border-white/8">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-xs text-zinc-500 mb-1">RECOMMENDED PLAN</p>
                                    <p className="text-xl font-black text-white">{plan}</p>
                                </div>
                                <span className="px-3 py-1 rounded-full text-xs font-bold text-orange-400 bg-orange-500/15 border border-orange-500/20">
                                    BEST FOR YOU
                                </span>
                            </div>
                            <div className="space-y-2 text-sm text-zinc-400 mb-5">
                                <div className="flex justify-between">
                                    <span>Delivery Cost</span>
                                    <span className={delivery === 'Free' ? 'text-green-400 font-bold' : 'text-white'}>
                                        {delivery}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Min. Order</span>
                                    <span className="text-white">{usage >= 500 ? '100 kg/delivery' : '50 kg'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery Time</span>
                                    <span className="text-white">Same Day / Next Day</span>
                                </div>
                            </div>
                            <a
                                href={`https://wa.me/919999999999?text=${whatsappMsg}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold fire-gradient hover:opacity-90 transition-opacity"
                            >
                                Get This Deal on WhatsApp
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
