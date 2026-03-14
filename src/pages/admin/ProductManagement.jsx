import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Edit2, Trash2, X, Eye, EyeOff } from 'lucide-react'

const initProducts = [
    { id: 1, name: 'Coconut Shell Charcoal', price: 85, minOrder: 50, heatLevel: 92, smokeLevel: 1, visible: true, tag: 'BESTSELLER', emoji: '🥥' },
    { id: 2, name: 'Premium Hardwood Charcoal', price: 70, minOrder: 100, heatLevel: 85, smokeLevel: 2, visible: true, tag: 'RESTAURANT FAV', emoji: '🪵' },
    { id: 3, name: 'BBQ Briquettes', price: 55, minOrder: 200, heatLevel: 78, smokeLevel: 2, visible: true, tag: 'BEST VALUE', emoji: '🔥' },
]

function ProductModal({ product, onSave, onClose }) {
    const [form, setForm] = useState(product || { name: '', price: '', minOrder: '', heatLevel: 80, smokeLevel: 2, visible: true, tag: '', emoji: '🔥' })
    const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)' }}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-md rounded-3xl p-8 border border-white/10 space-y-5"
                style={{ background: 'var(--dark-card)' }}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-white font-bold text-lg">{product ? 'Edit Product' : 'Add Product'}</h2>
                    <button onClick={onClose} className="text-zinc-400 hover:text-white"><X size={20} /></button>
                </div>

                {[
                    { label: 'Product Name', key: 'name', type: 'text', placeholder: 'e.g. Coconut Shell Charcoal' },
                    { label: 'Price (₹/kg)', key: 'price', type: 'number', placeholder: '85' },
                    { label: 'Min. Order (kg)', key: 'minOrder', type: 'number', placeholder: '50' },
                    { label: 'Tag (e.g. BESTSELLER)', key: 'tag', type: 'text', placeholder: 'BESTSELLER' },
                    { label: 'Emoji', key: 'emoji', type: 'text', placeholder: '🔥' },
                ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                        <label className="block text-xs font-semibold text-zinc-400 mb-1.5">{label}</label>
                        <input
                            type={type}
                            value={form[key]}
                            onChange={(e) => set(key, e.target.value)}
                            placeholder={placeholder}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-orange-500 transition-colors"
                        />
                    </div>
                ))}

                <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-2">Heat Level: {form.heatLevel}%</label>
                    <input type="range" min={40} max={100} value={form.heatLevel} onChange={(e) => set('heatLevel', +e.target.value)} className="w-full accent-orange-500" />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-2">Smoke Level: {form.smokeLevel}/5</label>
                    <input type="range" min={1} max={5} value={form.smokeLevel} onChange={(e) => set('smokeLevel', +e.target.value)} className="w-full accent-orange-500" />
                </div>

                <button onClick={() => onSave(form)} className="w-full py-3 rounded-xl text-white font-bold fire-gradient hover:opacity-90 transition-opacity">
                    {product ? 'Save Changes' : 'Add Product'}
                </button>
            </motion.div>
        </div>
    )
}

export default function ProductManagement() {
    const [products, setProducts] = useState(initProducts)
    const [editProduct, setEditProduct] = useState(null)
    const [showAdd, setShowAdd] = useState(false)

    const saveProduct = (form) => {
        if (editProduct) {
            setProducts((ps) => ps.map((p) => p.id === editProduct.id ? { ...form, id: p.id } : p))
            setEditProduct(null)
        } else {
            setProducts((ps) => [...ps, { ...form, id: Date.now() }])
            setShowAdd(false)
        }
    }

    const toggleVisible = (id) => setProducts((ps) => ps.map((p) => p.id === id ? { ...p, visible: !p.visible } : p))
    const deleteProduct = (id) => setProducts((ps) => ps.filter((p) => p.id !== id))

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-black text-white">Products</h1>
                    <p className="text-zinc-500 text-sm mt-0.5">{products.length} products listed</p>
                </div>
                <button
                    onClick={() => setShowAdd(true)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm fire-gradient hover:opacity-90 transition-opacity"
                >
                    <Plus size={16} /> Add Product
                </button>
            </div>

            <div className="space-y-4">
                {products.map((product, idx) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className={`glass-card rounded-2xl p-5 border transition-colors ${product.visible ? 'border-white/8' : 'border-white/4 opacity-60'}`}
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-4xl">{product.emoji}</span>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-white font-bold">{product.name}</h3>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 font-bold">{product.tag}</span>
                                    {!product.visible && <span className="text-xs text-zinc-600">Hidden</span>}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-zinc-400">
                                    <span>₹{product.price}/kg</span>
                                    <span>Min: {product.minOrder}kg</span>
                                    <span>Heat: {product.heatLevel}%</span>
                                    <span>Smoke: {product.smokeLevel}/5</span>
                                </div>
                                {/* Mini heat bar */}
                                <div className="mt-2 h-1.5 w-48 rounded-full bg-white/10">
                                    <div className="h-full rounded-full fire-gradient" style={{ width: `${product.heatLevel}%` }} />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => toggleVisible(product.id)} className="p-2 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                                    {product.visible ? <Eye size={16} /> : <EyeOff size={16} />}
                                </button>
                                <button onClick={() => setEditProduct(product)} className="p-2 rounded-xl border border-white/10 text-zinc-400 hover:text-orange-400 hover:border-orange-500/30 transition-all">
                                    <Edit2 size={16} />
                                </button>
                                <button onClick={() => deleteProduct(product.id)} className="p-2 rounded-xl border border-white/10 text-zinc-400 hover:text-red-400 hover:border-red-500/30 transition-all">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {(showAdd || editProduct) && (
                    <ProductModal
                        product={editProduct}
                        onSave={saveProduct}
                        onClose={() => { setShowAdd(false); setEditProduct(null) }}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}
