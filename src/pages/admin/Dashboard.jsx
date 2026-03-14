import { motion } from 'framer-motion'
import { TrendingUp, Package, Inbox, DollarSign, Users, Clock, Star, AlertCircle } from 'lucide-react'

const kpis = [
    { label: 'Total Leads Today', value: '12', change: '+3', color: '#FF6B1A', icon: Inbox },
    { label: 'Active Products', value: '3', change: 'Live', color: '#FBBF24', icon: Package },
    { label: 'Est. Monthly Revenue', value: '₹2.4L', change: '+18%', color: '#34D399', icon: DollarSign },
    { label: 'Pending Enquiries', value: '5', change: 'Action needed', color: '#F87171', icon: AlertCircle },
]

const recentLeads = [
    { name: 'Rahul Sharma', business: 'Hotel Grand Palace', product: 'Coconut Charcoal', status: 'New', time: '2 hrs ago' },
    { name: 'Priya Verma', business: 'Spice Garden Restaurant', product: 'Hardwood Charcoal', status: 'Contacted', time: '4 hrs ago' },
    { name: 'Amit Patel', business: 'BBQ Brothers Park', product: 'Briquettes', status: 'Closed', time: 'Yesterday' },
    { name: 'Sunita Joshi', business: 'Royal Catering', product: 'Mixed Order', status: 'New', time: '5 hrs ago' },
]

const statusColors = { New: '#FF6B1A', Contacted: '#FBBF24', Closed: '#34D399' }

const areaData = [
    { area: 'Andheri', pct: 82 },
    { area: 'Thane', pct: 65 },
    { area: 'South Mumbai', pct: 55 },
    { area: 'Navi Mumbai', pct: 40 },
    { area: 'Pune', pct: 30 },
]

export default function Dashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-black text-white mb-1">Good morning, Kamlesh 👋</h1>
                <p className="text-zinc-500 text-sm">Here's what's happening with your business today.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {kpis.map(({ label, value, change, color, icon: Icon }, idx) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card rounded-2xl p-5 border border-white/8"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}20` }}>
                                <Icon size={18} style={{ color }} />
                            </div>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${color}20`, color }}>
                                {change}
                            </span>
                        </div>
                        <p className="text-3xl font-black text-white mb-1">{value}</p>
                        <p className="text-zinc-500 text-xs">{label}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Leads */}
                <div className="glass-card rounded-2xl border border-white/8 overflow-hidden">
                    <div className="p-5 border-b border-white/8 flex items-center justify-between">
                        <h2 className="text-white font-bold">Recent Leads</h2>
                        <a href="/admin/leads" className="text-xs text-orange-400 hover:underline">View All →</a>
                    </div>
                    <div className="divide-y divide-white/5">
                        {recentLeads.map((lead) => (
                            <div key={lead.name} className="flex items-center justify-between px-5 py-3.5 hover:bg-white/2 transition-colors">
                                <div>
                                    <p className="text-white text-sm font-semibold">{lead.name}</p>
                                    <p className="text-zinc-500 text-xs">{lead.business} · {lead.product}</p>
                                </div>
                                <div className="text-right">
                                    <span
                                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                                        style={{ background: `${statusColors[lead.status]}20`, color: statusColors[lead.status] }}
                                    >
                                        {lead.status}
                                    </span>
                                    <p className="text-zinc-600 text-xs mt-1">{lead.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Area Demand */}
                <div className="glass-card rounded-2xl border border-white/8 overflow-hidden">
                    <div className="p-5 border-b border-white/8">
                        <h2 className="text-white font-bold">Area-wise Demand</h2>
                    </div>
                    <div className="p-5 space-y-4">
                        {areaData.map(({ area, pct }, idx) => (
                            <div key={area}>
                                <div className="flex justify-between text-sm mb-1.5">
                                    <span className="text-zinc-300">{area}</span>
                                    <span className="text-zinc-500">{pct}%</span>
                                </div>
                                <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${pct}%` }}
                                        transition={{ duration: 1, delay: idx * 0.15, ease: 'easeOut' }}
                                        className="h-full rounded-full fire-gradient"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card rounded-2xl p-5 border border-white/8">
                <h2 className="text-white font-bold mb-4">Quick Actions</h2>
                <div className="flex flex-wrap gap-3">
                    {[
                        { label: '📦 Add Product', href: '/admin/products' },
                        { label: '📩 View Leads', href: '/admin/leads' },
                        { label: '📊 Analytics', href: '/admin/analytics' },
                        { label: '⚙️ Settings', href: '/admin/settings' },
                        { label: '🌐 View Website', href: '/' },
                    ].map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="px-4 py-2 rounded-xl text-sm text-zinc-300 border border-white/10 hover:border-orange-500/40 hover:text-orange-400 transition-all duration-200"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
