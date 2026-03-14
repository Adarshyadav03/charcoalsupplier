import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm()

    const onSubmit = (data) => {
        const msg = encodeURIComponent(
            `New Enquiry from ${data.name}\n\nBusiness: ${data.business}\nPhone: ${data.phone}\nProduct: ${data.product}\nMonthly Usage: ${data.usage}\nMessage: ${data.message || 'N/A'}`
        )
        window.open(`https://wa.me/918542800091?text=${msg}`, '_blank')
        reset()
    }

    return (
        <section id="contact" className="section-padding" style={{ background: 'var(--dark-surface)' }}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Ready to Order? Let's <span className="fire-text">Talk.</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Fill the form and we'll send you a customized quote within 30 minutes on WhatsApp.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="glass-card rounded-3xl p-8 border border-white/8 space-y-5"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Your Name *</label>
                                <input
                                    {...register('name', { required: true })}
                                    placeholder="Rajesh Kumar"
                                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm outline-none transition-colors focus:border-orange-500 ${errors.name ? 'border-red-500' : 'border-white/10'}`}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Phone Number *</label>
                                <input
                                    {...register('phone', { required: true })}
                                    placeholder="+91 98765 43210"
                                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm outline-none transition-colors focus:border-orange-500 ${errors.phone ? 'border-red-500' : 'border-white/10'}`}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Business Name *</label>
                            <input
                                {...register('business', { required: true })}
                                placeholder="My Restaurant / Hotel Name"
                                className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm outline-none transition-colors focus:border-orange-500 ${errors.business ? 'border-red-500' : 'border-white/10'}`}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Product Needed</label>
                                <select
                                    {...register('product')}
                                    className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white text-sm outline-none focus:border-orange-500"
                                >
                                    <option value="coconut">Coconut Shell Charcoal</option>
                                    <option value="hardwood">Premium Hardwood</option>
                                    <option value="briquettes">BBQ Briquettes</option>
                                    <option value="mixed">Mixed / Custom</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Monthly Usage (kg)</label>
                                <input
                                    {...register('usage')}
                                    placeholder="e.g. 200 kg"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-orange-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Message (Optional)</label>
                            <textarea
                                {...register('message')}
                                rows={3}
                                placeholder="Any specific requirements, delivery schedule, or questions..."
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none resize-none focus:border-orange-500 transition-colors"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full ripple-button flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold fire-gradient hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-orange-900/30"
                        >
                            <Send size={16} />
                            Send via WhatsApp — Get Instant Quote
                        </button>

                        <p className="text-center text-xs text-zinc-600">
                            Your info is sent directly to our WhatsApp. No spam. Reply in 30 mins.
                        </p>
                    </motion.form>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="space-y-6"
                    >
                        {[
                            {
                                icon: MessageCircle,
                                color: '#25D366',
                                label: 'WhatsApp (Instant)',
                                value: '+91 85428 00091',
                                href: 'https://wa.me/918542800091',
                            },
                            {
                                icon: Phone,
                                color: '#FF6B1A',
                                label: 'Call Us',
                                value: '+91 85428 00091 / 93233 56706',
                                href: 'tel:+918542800091',
                            },
                            {
                                icon: Mail,
                                color: '#3B82F6',
                                label: 'Email',
                                value: 'info.kamleshcharcoal@gmail.com',
                                href: 'mailto:info.kamleshcharcoal@gmail.com',
                            },
                            {
                                icon: MapPin,
                                color: '#A78BFA',
                                label: 'Location',
                                value: 'LL John Dsouza House, 126L, Golfa Devi Temple Rd, near Thadani House, Koliwada, Worli, Mumbai, Maharashtra 400030',
                                href: 'https://goo.gl/maps/YOUR_LINK_HERE', // Using embed below instead
                            },
                        ].map(({ icon: Icon, color, label, value, href }) => (
                            <div
                                key={label}
                                className="flex items-center gap-5 p-5 rounded-2xl glass-card border border-white/8 hover:border-white/15 transition-colors"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: `${color}20` }}
                                >
                                    <Icon size={22} style={{ color }} />
                                </div>
                                <div>
                                    <p className="text-zinc-500 text-xs font-semibold mb-0.5">{label}</p>
                                    {href ? (
                                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-white font-semibold hover:text-orange-400 transition-colors">
                                            {value}
                                        </a>
                                    ) : (
                                            <p className="text-white font-semibold text-sm leading-relaxed">{value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}

                        {/* Google Maps Embed */}
                        <div className="rounded-2xl overflow-hidden border border-white/8 h-[200px] w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.868742880775!2d72.82208151489953!3d19.01918458712071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cebe08c7a6f9%3A0xe536dcd2958742db!2sGolfa%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Working Hours */}
                        <div className="p-6 rounded-2xl border border-orange-500/20" style={{ background: 'rgba(255,107,26,0.05)' }}>
                            <h3 className="text-white font-bold mb-4">⏰ Working Hours</h3>
                            <div className="space-y-2 text-sm">
                                {[
                                    { day: 'Mon – Sun', time: '8:00 AM – 10:00 PM' },
                                    { day: 'Emergency', time: 'WhatsApp 24/7' },
                                ].map(({ day, time }) => (
                                    <div key={day} className="flex justify-between">
                                        <span className="text-zinc-400">{day}</span>
                                        <span className="text-white font-medium">{time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
