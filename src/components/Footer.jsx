import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const footerLinks = {
    Company: ['About Us', 'Our Story', 'Careers', 'Contact'],
    Products: ['Coconut Shell Charcoal', 'Hardwood Charcoal', 'BBQ Briquettes', 'Custom Orders'],
    'Service Areas': ['Mumbai', 'Thane', 'Navi Mumbai', 'Pune', 'Nashik', 'Vasai-Virar', 'Kalyan', 'Palghar', 'Raigad'],
}

export default function Footer() {
    return (
        <footer style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/kamleshcharcoal .png"
                                alt="Kamlesh Charcoal and Lakda Enterprises"
                                className="h-14 w-14 rounded-xl object-cover shadow-lg"
                                onError={(e) => { e.target.style.display = 'none' }}
                            />
                            <div>
                                <span className="text-white font-black text-xl font-['Outfit']">Kamlesh</span>
                                <span className="block text-xs text-orange-400">Charcoal & Lakda Enterprises</span>
                                <span className="block text-xs text-zinc-600">Est. 1970</span>
                            </div>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">
                            Mumbai's most trusted premium charcoal & fuel wood supplier since 1970. Hotel-grade quality. Same day delivery. Zero compromises.
                        </p>
                        <div className="space-y-2">
                            {[
                                { icon: Phone, text: '+91 85428 00091 / +91 93233 56706', href: 'tel:+918542800091' },
                                { icon: MessageCircle, text: 'WhatsApp Us', href: 'https://wa.me/918542800091' },
                                { icon: Mail, text: 'info.kamleshcharcoal@gmail.com', href: 'mailto:info.kamleshcharcoal@gmail.com' },
                                { icon: MapPin, text: 'LL John Dsouza House, 126L, Golfa Devi Temple Rd, near Thadani House, Koliwada, Worli, Mumbai, Maharashtra 400030', href: null },
                            ].map(({ icon: Icon, text, href }) => (
                                <div key={text} className="flex items-start gap-2 text-zinc-500 text-sm hover:text-zinc-300 transition-colors">
                                    <Icon size={14} className="text-orange-500 flex-shrink-0 mt-1" />
                                    {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="hover:text-orange-400">{text}</a> : <span className="leading-relaxed">{text}</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{category}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-zinc-500 text-sm hover:text-orange-400 transition-colors duration-200">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-600 text-sm">
                        © 2025 Kamlesh Charcoal & Coconut Fuel Co. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-zinc-600">
                        <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-400">Terms</a>
                        <a href="/admin/login" className="hover:text-orange-500 transition-colors">Admin Login</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
