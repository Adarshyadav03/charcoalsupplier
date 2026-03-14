import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Industries', href: '#industries' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2 group">
                    <img
                        src="/kamleshcharcoal .png"
                        alt="Kamlesh Charcoal and Lakda Enterprises"
                        className="h-12 w-12 rounded-xl object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                    />
                    <div
                        style={{ display: 'none' }}
                        className="w-12 h-12 rounded-xl items-center justify-center fire-gradient"
                    >
                        <span className="text-white font-black text-xl">K</span>
                    </div>
                    <div>
                        <span className="text-white font-bold text-base leading-tight font-['Outfit']">Kamlesh</span>
                        <span className="block text-xs text-orange-400 leading-none">Charcoal & Lakda Enterprises</span>
                        <span className="block text-xs text-zinc-600 leading-none">Est. 1970</span>
                    </div>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href={`https://wa.me/918542800091?text=${encodeURIComponent('Hi, I want to enquire about bulk charcoal supply for my business.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ripple-button px-5 py-2.5 rounded-xl text-sm font-semibold text-white fire-gradient hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-900/40"
                    >
                        Get Quote
                    </a>
                    <a
                        href="tel:+918542800091"
                        className="text-sm text-zinc-400 hover:text-orange-400 transition-colors duration-200"
                    >
                        +91 85428 00091
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 text-zinc-300 hover:text-white"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-zinc-300 hover:text-orange-400 transition-colors py-1 text-base"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={`https://wa.me/918542800091?text=${encodeURIComponent('Hi, I want to enquire about bulk charcoal supply.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 py-3 text-center rounded-xl text-sm font-semibold text-white fire-gradient"
                            >
                                Get Free Quote
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
