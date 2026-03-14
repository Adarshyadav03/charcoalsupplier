import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const deliveryPhotos = [
    {
        id: 1,
        title: '200kg Delivery to Taj Hotel Kitchen',
        location: 'Colaba, Mumbai',
        desc: 'Premium coconut shell charcoal delivered at 6 AM for morning service.',
        emoji: '🏨',
        bg: 'linear-gradient(145deg, #1a0800, #2d1200)',
    },
    {
        id: 2,
        title: 'Weekly Supply to BBQ Nation',
        location: 'Andheri, Mumbai',
        desc: '500kg weekly delivery — consistent quality, zero complaints.',
        emoji: '🔥',
        bg: 'linear-gradient(145deg, #0f0a00, #1a1200)',
    },
    {
        id: 3,
        title: 'Emergency 24hr Delivery',
        location: 'Pune, Maharashtra',
        desc: 'Restaurant ran out mid-service. We delivered within 3 hours. Crisis averted.',
        emoji: '🚚',
        bg: 'linear-gradient(145deg, #0a0a1a, #10101f)',
    },
    {
        id: 4,
        title: 'Bulk Supply — Wedding Catering',
        location: 'Thane, Mumbai',
        desc: '1000+ guests. 300kg of briquettes delivered the night before. Perfect burn.',
        emoji: '🍱',
        bg: 'linear-gradient(145deg, #0d0800, #1a0f00)',
    },
]

const clientLogos = [
    { name: 'Taj Hotels', emoji: '🏨' },
    { name: 'BBQ Nation', emoji: '🔥' },
    { name: 'Marriott', emoji: '⭐' },
    { name: 'Haldirams', emoji: '🍱' },
    { name: 'McDonald\'s', emoji: '🍔' },
    { name: 'ITC Hotels', emoji: '🏩' },
    { name: 'Zomato Events', emoji: '🍽️' },
    { name: 'Sodexo', emoji: '🥡' },
]

export default function TrustSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="section-padding" style={{ background: 'var(--dark-surface)' }}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-4">
                        Proof Of Delivery
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Real Deliveries. Real <span className="fire-text">Results.</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">500+ successful deliveries across Mumbai, Thane, Pune & Nashik.</p>
                </motion.div>

                {/* Delivery Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mb-20"
                >
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop
                        className="pb-12"
                    >
                        {deliveryPhotos.map((photo) => (
                            <SwiperSlide key={photo.id}>
                                <div
                                    className="rounded-3xl p-8 border border-white/8 h-64 flex flex-col justify-between"
                                    style={{ background: photo.bg }}
                                >
                                    <div className="text-6xl">{photo.emoji}</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{photo.title}</h3>
                                        <p className="text-orange-400 text-xs font-semibold mb-2">📍 {photo.location}</p>
                                        <p className="text-zinc-400 text-sm">{photo.desc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Partner Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <p className="text-center text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-8">
                        Trusted By India's Leading Brands
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {clientLogos.map((logo, idx) => (
                            <motion.div
                                key={logo.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.5 + idx * 0.07 }}
                                className="flex items-center gap-2 px-5 py-3 rounded-2xl glass-card border border-white/8 hover:border-orange-500/30 transition-colors duration-200"
                            >
                                <span className="text-2xl">{logo.emoji}</span>
                                <span className="text-zinc-300 text-sm font-semibold">{logo.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
