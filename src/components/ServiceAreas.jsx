import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, MapPin, Star } from 'lucide-react'

// Main zones
const mainZones = [
    {
        id: 'western-suburbs',
        name: 'Western Suburbs',
        subAreas: 'Bandra West, Khar, Santacruz, Juhu, Andheri West/East, Versova, Goregaon, Malad, Kandivali',
        delivery: '3-4 hrs',
        tag: 'Pubs, Cafes & BBQ',
        image: '/western-bbq.jpg', 
        highlightAreas: ['Bandra', 'Andheri', 'Juhu'],
    },
    {
        id: 'south-mumbai',
        name: 'South Mumbai',
        subAreas: 'Colaba, Cuffe Parade, Fort, Marine Lines, Girgaon, Grant Road, Tardeo, Worli',
        delivery: '2-4 hrs',
        tag: 'Luxury Hotels & Catering',
        image: '/colaba-hotel.jpg', 
        highlightAreas: ['Colaba', 'Worli'],
    },
    {
        id: 'central-mumbai',
        name: 'Central & Business',
        subAreas: 'Kurla, Sion, Chembur, Dadar, Lower Parel',
        delivery: '2-4 hrs',
        tag: 'Corporate & Lounges',
        image: '/central-lounges.jpg', 
        highlightAreas: ['Kurla', 'Lower Parel', 'Dadar'],
    },
    {
        id: 'navi-mumbai',
        name: 'Navi Mumbai & Thane',
        subAreas: 'Vashi, Thane',
        delivery: '4-6 hrs',
        tag: 'Banquets & New Restaurants',
        image: '/thane-banquets.jpg', 
        highlightAreas: ['Thane'],
    }
]

const otherAreas = [
    { name: 'Pune / Lonavala', delivery: 'Next Day', emoji: '🌇' },
    { name: 'Nashik', delivery: 'Next Day', emoji: '🍇' },
    { name: 'Vasai / Virar / Palghar', delivery: 'Next Day', emoji: '🌴' },
    { name: 'Raigad / Alibaug', delivery: 'Next Day', emoji: '🏖️' },
    { name: 'Nagpur / Kolhapur', delivery: '2 Days', emoji: '📍' },
    { name: 'Aurangabad / Solapur', delivery: '2 Days', emoji: '📍' },
    { name: 'Amravati', delivery: '2 Days', emoji: '📍' },
]

export default function ServiceAreas() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="section-padding" style={{ background: 'var(--dark-bg)' }}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-4">
                        <MapPin size={14} />
                        Highest Demand Areas
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Supplying Mumbai's <span className="fire-text">Top Food Hubs</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        From Colaba's luxury hotels to Bandra's buzzing cafes, we are the trusted charcoal partner for restaurants across the city.
                    </p>
                </motion.div>

                {/* Main Zones Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {mainZones.map((zone, idx) => (
                        <motion.div
                            key={zone.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden border border-white/10 glass-card"
                        >
                            {/* Background Image / Overlay */}
                            <div className="absolute inset-0">
                                <img
                                    src={zone.image}
                                    alt={zone.name}
                                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
                                />
                                <div className="hidden absolute inset-0 bg-zinc-900/60" /> {/* Fallback if image fails */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                            </div>

                            <div className="relative p-8 h-full flex flex-col justify-end min-h-[320px]">
                                <div className="mb-auto">
                                    <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30 mb-3 backdrop-blur-md">
                                        {zone.tag}
                                    </span>
                                </div>
                                
                                <h3 className="text-3xl font-black text-white mb-2">{zone.name}</h3>
                                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                                    {zone.subAreas}
                                </p>
                                
                                <div className="flex flex-wrap items-center gap-3 mt-2">
                                    <div className="flex items-center gap-1.5 text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-full text-white backdrop-blur-md">
                                        <Clock size={12} className="text-orange-400" />
                                        {zone.delivery} Delivery
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-semibold bg-orange-500/10 px-3 py-1.5 rounded-full text-orange-300 border border-orange-500/20 backdrop-blur-md">
                                        <Star size={12} />
                                        Hotspots: {zone.highlightAreas.join(', ')}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Areas Grid */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Extended Maharashtra Delivery</h3>
                    <p className="text-zinc-500 text-sm">We also deliver bulk orders to these regions</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                    {otherAreas.map((area, idx) => (
                        <motion.div
                            key={area.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.4 + (idx * 0.05) }}
                            className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-2xl">{area.emoji}</span>
                            <div className="text-left">
                                <p className="text-white font-bold text-sm tracking-wide">{area.name}</p>
                                <p className="text-orange-400 text-xs font-semibold">{area.delivery}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
