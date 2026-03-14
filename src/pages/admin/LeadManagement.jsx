import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, StickyNote, Download } from 'lucide-react'

const initLeads = [
    { id: 1, name: 'Rahul Sharma', phone: '+91 98765 43210', business: 'Hotel Grand Palace', product: 'Coconut Charcoal', usage: '300kg', area: 'Andheri', status: 'New', notes: '', time: '2 hrs ago' },
    { id: 2, name: 'Priya Verma', phone: '+91 87654 32109', business: 'Spice Garden Restaurant', product: 'Hardwood Charcoal', usage: '150kg', area: 'Thane', status: 'Contacted', notes: 'Called. Needs quote by Friday.', time: '4 hrs ago' },
    { id: 3, name: 'Amit Patel', phone: '+91 76543 21098', business: 'BBQ Brothers Park', product: 'Briquettes', usage: '500kg', area: 'Pune', status: 'Closed', notes: 'Order placed. Delivered on time.', time: 'Yesterday' },
    { id: 4, name: 'Sunita Joshi', phone: '+91 65432 10987', business: 'Royal Catering', product: 'Mixed', usage: '200kg', area: 'Navi Mumbai', status: 'New', notes: '', time: '5 hrs ago' },
    { id: 5, name: 'Vikram Singh', phone: '+91 54321 09876', business: 'Moti Mahal Hotel', product: 'Coconut Charcoal', usage: '400kg', area: 'South Mumbai', status: 'Contacted', notes: 'Awaiting sample test result.', time: '1 day ago' },
]

const statusColors = { New: '#FF6B1A', Contacted: '#FBBF24', Closed: '#34D399' }
const statuses = ['New', 'Contacted', 'Closed']

export default function LeadManagement() {
    const [leads, setLeads] = useState(initLeads)
    const [editNoteId, setEditNoteId] = useState(null)
    const [noteText, setNoteText] = useState('')
    const [filterStatus, setFilterStatus] = useState('All')

    const updateStatus = (id, status) => setLeads((ls) => ls.map((l) => l.id === id ? { ...l, status } : l))
    const saveNote = (id) => { setLeads((ls) => ls.map((l) => l.id === id ? { ...l, notes: noteText } : l)); setEditNoteId(null) }

    const filtered = filterStatus === 'All' ? leads : leads.filter((l) => l.status === filterStatus)

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-2xl font-black text-white">Lead Management</h1>
                    <p className="text-zinc-500 text-sm mt-0.5">{leads.length} total enquiries</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {['All', ...statuses].map((s) => (
                        <button
                            key={s}
                            onClick={() => setFilterStatus(s)}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${filterStatus === s ? 'fire-gradient text-white' : 'border border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'}`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            <div className="glass-card rounded-2xl border border-white/8 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/8 text-left">
                                {['Name & Business', 'Product', 'Usage', 'Area', 'Status', 'Actions'].map((h) => (
                                    <th key={h} className="px-5 py-3.5 text-zinc-500 text-xs font-semibold">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filtered.map((lead, idx) => (
                                <motion.tr
                                    key={lead.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: idx * 0.06 }}
                                    className="hover:bg-white/2 transition-colors"
                                >
                                    <td className="px-5 py-4">
                                        <p className="text-white font-semibold">{lead.name}</p>
                                        <p className="text-zinc-500 text-xs">{lead.business} · {lead.phone}</p>
                                        <p className="text-zinc-600 text-xs mt-0.5">{lead.time}</p>
                                    </td>
                                    <td className="px-5 py-4 text-zinc-300">{lead.product}</td>
                                    <td className="px-5 py-4 text-zinc-300">{lead.usage}/mo</td>
                                    <td className="px-5 py-4 text-zinc-300">{lead.area}</td>
                                    <td className="px-5 py-4">
                                        <select
                                            value={lead.status}
                                            onChange={(e) => updateStatus(lead.id, e.target.value)}
                                            className="px-3 py-1.5 rounded-xl text-xs font-bold border-0 outline-none cursor-pointer"
                                            style={{
                                                background: `${statusColors[lead.status]}20`,
                                                color: statusColors[lead.status],
                                            }}
                                        >
                                            {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex gap-2">
                                            <a
                                                href={`https://wa.me/${lead.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${lead.name}, this is Kamlesh Charcoal Co. Regarding your enquiry for ${lead.product} (${lead.usage}/month for ${lead.business}), we'd like to share our best offer.`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="WhatsApp"
                                                className="p-2 rounded-xl border border-white/10 text-green-400 hover:border-green-500/40 transition-colors"
                                            >
                                                <MessageCircle size={15} />
                                            </a>
                                            <button
                                                onClick={() => { setEditNoteId(lead.id); setNoteText(lead.notes) }}
                                                title="Add Note"
                                                className="p-2 rounded-xl border border-white/10 text-zinc-400 hover:border-orange-500/40 hover:text-orange-400 transition-colors"
                                            >
                                                <StickyNote size={15} />
                                            </button>
                                        </div>
                                        {lead.notes && <p className="text-zinc-600 text-xs mt-1 max-w-[160px] truncate" title={lead.notes}>📝 {lead.notes}</p>}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Note Popup */}
            {editNoteId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.75)' }}>
                    <div className="w-full max-w-sm glass-card rounded-2xl p-6 border border-white/10 space-y-4">
                        <h3 className="text-white font-bold">Add Note</h3>
                        <textarea
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            rows={4}
                            placeholder="Enter follow-up notes..."
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none resize-none focus:border-orange-500 transition-colors"
                            autoFocus
                        />
                        <div className="flex gap-3">
                            <button onClick={() => saveNote(editNoteId)} className="flex-1 py-2.5 rounded-xl text-white font-bold fire-gradient hover:opacity-90">Save</button>
                            <button onClick={() => setEditNoteId(null)} className="flex-1 py-2.5 rounded-xl border border-white/10 text-zinc-400 hover:text-white">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
