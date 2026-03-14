import { motion } from 'framer-motion'

const monthlyData = [
    { month: 'Sep', revenue: 180000, leads: 28 },
    { month: 'Oct', revenue: 210000, leads: 35 },
    { month: 'Nov', revenue: 195000, leads: 30 },
    { month: 'Dec', revenue: 265000, leads: 48 },
    { month: 'Jan', revenue: 230000, leads: 40 },
    { month: 'Feb', revenue: 240000, leads: 42 },
]
const maxRevenue = Math.max(...monthlyData.map((d) => d.revenue))

const productPerf = [
    { name: 'Coconut Shell Charcoal', pct: 88, orders: 142, color: '#FF6B1A' },
    { name: 'Premium Hardwood', pct: 65, orders: 85, color: '#FF9B45' },
    { name: 'BBQ Briquettes', pct: 42, orders: 54, color: '#FBBF24' },
]

const areaData = [
    { area: 'Andheri', demand: 82, color: '#FF6B1A' },
    { area: 'Thane', demand: 65, color: '#FF9B45' },
    { area: 'South Mumbai', demand: 55, color: '#FBBF24' },
    { area: 'Navi Mumbai', demand: 40, color: '#34D399' },
    { area: 'Bandra', demand: 78, color: '#6366F1' },
    { area: 'Borivali', demand: 60, color: '#8B5CF6' },
    { area: 'Dadar', demand: 72, color: '#EC4899' },
    { area: 'Malad', demand: 50, color: '#10B981' },
    { area: 'Kurla', demand: 45, color: '#F97316' },
    { area: 'Powai', demand: 68, color: '#0EA5E9' },
    { area: 'Ghatkopar', demand: 58, color: '#14B8A6' },
    { area: 'Vashi', demand: 48, color: '#A855F7' },

    // Newly Added Premium / Business Areas
    { area: 'Mahalaxmi', demand: 74, color: '#EF4444' },
    { area: 'Worli', demand: 85, color: '#F43F5E' },
    { area: 'Lower Parel', demand: 88, color: '#3B82F6' },
    { area: 'Colaba', demand: 62, color: '#22C55E' },
    { area: 'Fort', demand: 70, color: '#EAB308' },
    { area: 'Santacruz', demand: 66, color: '#06B6D4' },
    { area: 'Chembur', demand: 57, color: '#84CC16' },
    { area: 'Mulund', demand: 53, color: '#F472B6' },
    { area: 'Khar', demand: 69, color: '#7C3AED' },
    { area: 'Prabhadevi', demand: 77, color: '#DC2626' }
];

export default function Analytics() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-black text-white">Analytics</h1>
                <p className="text-zinc-500 text-sm mt-0.5">Last 6 months performance overview</p>
            </div>

            {/* Monthly Revenue Bar Chart */}
            <div className="glass-card rounded-2xl border border-white/8 p-6">
                <h2 className="text-white font-bold mb-6">Monthly Revenue (₹)</h2>
                <div className="flex items-end gap-3 h-48">
                    {monthlyData.map(({ month, revenue }, idx) => (
                        <div key={month} className="flex-1 flex flex-col items-center gap-2">
                            <span className="text-xs text-zinc-500">₹{(revenue / 1000).toFixed(0)}k</span>
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${(revenue / maxRevenue) * 100}%` }}
                                transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                                className="w-full rounded-t-xl fire-gradient min-h-[8px]"
                                style={{ maxHeight: '170px' }}
                            />
                            <span className="text-xs text-zinc-400 font-medium">{month}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex items-center gap-6 text-sm text-zinc-500 border-t border-white/8 pt-4">
                    <span>📈 Total 6-month revenue: <strong className="text-white">₹13.2L</strong></span>
                    <span>📊 Avg monthly: <strong className="text-white">₹2.2L</strong></span>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Product Performance */}
                <div className="glass-card rounded-2xl border border-white/8 p-6">
                    <h2 className="text-white font-bold mb-5">Product Performance</h2>
                    <div className="space-y-5">
                        {productPerf.map(({ name, pct, orders, color }, idx) => (
                            <div key={name}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-zinc-300 font-medium">{name}</span>
                                    <span className="text-zinc-500">{orders} orders</span>
                                </div>
                                <div className="h-2.5 rounded-full bg-white/8 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${pct}%` }}
                                        transition={{ duration: 1, delay: idx * 0.15, ease: 'easeOut' }}
                                        className="h-full rounded-full"
                                        style={{ background: color }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Area-wise Demand */}
                <div className="glass-card rounded-2xl border border-white/8 p-6">
                    <h2 className="text-white font-bold mb-5">Area-wise Demand</h2>
                    <div className="space-y-4">
                        {areaData.map(({ area, demand, color }, idx) => (
                            <div key={area} className="flex items-center gap-3">
                                <span className="text-zinc-400 text-sm w-28 flex-shrink-0">{area}</span>
                                <div className="flex-1 h-2.5 rounded-full bg-white/8 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${demand}%` }}
                                        transition={{ duration: 1, delay: idx * 0.12, ease: 'easeOut' }}
                                        className="h-full rounded-full"
                                        style={{ background: color }}
                                    />
                                </div>
                                <span className="text-zinc-500 text-xs w-8 text-right">{demand}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Monthly Leads */}
            <div className="glass-card rounded-2xl border border-white/8 p-6">
                <h2 className="text-white font-bold mb-5">Monthly Leads</h2>
                <div className="flex gap-6 overflow-x-auto pb-2">
                    {monthlyData.map(({ month, leads }, idx) => (
                        <div key={month} className="text-center flex-shrink-0">
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black mb-2 fire-gradient"
                                style={{ opacity: 0.6 + (idx / monthlyData.length) * 0.4 }}
                            >
                                {leads}
                            </div>
                            <span className="text-xs text-zinc-500">{month}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
