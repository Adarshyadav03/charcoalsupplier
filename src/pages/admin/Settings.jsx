import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, Flame } from 'lucide-react'

const initSettings = {
    businessName: 'Kamlesh Charcoal & Coconut Fuel Co.',
    phone: '+91 99999 99999',
    whatsapp: '919999999999',
    email: 'info.kamleshcharcoal@gmail.com',
    address: 'Mumbai, Maharashtra, India',
    minOrderKg: '50',
    freeDeliveryKg: '200',
    deliveryCharge: '500',
    heroTagline: 'Hotel-Grade Charcoal. Bulk Supply. Delivered Same Day.',
    sampleAvailable: true,
}

export default function Settings() {
    const [settings, setSettings] = useState(initSettings)
    const [saved, setSaved] = useState(false)
    const set = (k, v) => setSettings((s) => ({ ...s, [k]: v }))

    const handleSave = () => {
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
    }

    const fields = [
        {
            group: 'Business Info', items: [
                { label: 'Business Name', key: 'businessName', type: 'text' },
                { label: 'Phone Number', key: 'phone', type: 'text' },
                { label: 'WhatsApp Number (with country code)', key: 'whatsapp', type: 'text' },
                { label: 'Email Address', key: 'email', type: 'email' },
                { label: 'Address / Location', key: 'address', type: 'text' },
            ]
        },
        {
            group: 'Delivery Settings', items: [
                { label: 'Minimum Order (kg)', key: 'minOrderKg', type: 'number' },
                { label: 'Free Delivery Above (kg)', key: 'freeDeliveryKg', type: 'number' },
                { label: 'Delivery Charge Below Min (₹)', key: 'deliveryCharge', type: 'number' },
            ]
        },
        {
            group: 'Website Content', items: [
                { label: 'Hero Tagline', key: 'heroTagline', type: 'text' },
            ]
        },
    ]

    return (
        <div className="space-y-6 max-w-2xl">
            <div>
                <h1 className="text-2xl font-black text-white">Settings</h1>
                <p className="text-zinc-500 text-sm mt-0.5">Manage your business information and website content.</p>
            </div>

            {fields.map(({ group, items }) => (
                <div key={group} className="glass-card rounded-2xl border border-white/8 overflow-hidden">
                    <div className="px-6 py-4 border-b border-white/8">
                        <h2 className="text-white font-bold text-sm">{group}</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        {items.map(({ label, key, type }) => (
                            <div key={key}>
                                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">{label}</label>
                                <input
                                    type={type}
                                    value={settings[key]}
                                    onChange={(e) => set(key, e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-orange-500 transition-colors"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Toggle */}
            <div className="glass-card rounded-2xl border border-white/8 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-white font-semibold text-sm">Free Samples Available</p>
                        <p className="text-zinc-500 text-xs mt-0.5">If enabled, "Request Free Sample" button shows on website.</p>
                    </div>
                    <button
                        onClick={() => set('sampleAvailable', !settings.sampleAvailable)}
                        className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${settings.sampleAvailable ? 'bg-orange-500' : 'bg-zinc-700'}`}
                    >
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${settings.sampleAvailable ? 'translate-x-7' : 'translate-x-1'}`} />
                    </button>
                </div>
            </div>

            {/* Save */}
            <div className="flex items-center gap-4">
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold fire-gradient hover:opacity-90 transition-opacity"
                >
                    <Save size={16} />
                    Save Settings
                </button>
                {saved && (
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-green-400 text-sm font-semibold"
                    >
                        ✓ Settings saved successfully!
                    </motion.span>
                )}
            </div>
        </div>
    )
}
