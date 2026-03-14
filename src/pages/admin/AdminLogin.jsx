import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Lock, User, Eye, EyeOff } from 'lucide-react'

export default function AdminLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setTimeout(() => {
            if (username === 'admin' && password === 'admin123') {
                localStorage.setItem('admin_token', 'kamlesh_admin_2025')
                navigate('/admin/dashboard')
            } else {
                setError('Invalid username or password.')
            }
            setLoading(false)
        }, 800)
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,61,0,0.15) 0%, transparent 60%), var(--dark-bg)' }}
        >
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, type: 'spring', damping: 20 }}
                className="w-full max-w-sm"
            >
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl fire-gradient flex items-center justify-center mx-auto mb-4 shadow-xl shadow-orange-900/50">
                        <Flame size={32} className="text-white" />
                    </div>
                    <h1 className="text-2xl font-black text-white">Admin Portal</h1>
                    <p className="text-zinc-500 text-sm mt-1">Kamlesh Charcoal & Fuel Co.</p>
                </div>

                <form
                    onSubmit={handleLogin}
                    className="glass-card rounded-3xl p-8 border border-white/10 space-y-5"
                >
                    <div>
                        <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Username</label>
                        <div className="relative">
                            <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="admin"
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-orange-500 transition-colors"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-zinc-400 mb-1.5">Password</label>
                        <div className="relative">
                            <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                            <input
                                type={showPass ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-orange-500 transition-colors"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                            >
                                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 rounded-xl text-white font-bold fire-gradient hover:opacity-90 transition-opacity disabled:opacity-60"
                    >
                        {loading ? 'Signing in…' : 'Sign In to Admin Panel'}
                    </button>

                    <div className="text-center text-xs text-zinc-600">
                        Demo — username: <strong className="text-zinc-400">admin</strong> / pass: <strong className="text-zinc-400">admin123</strong>
                    </div>
                </form>

                <p className="text-center text-zinc-600 text-xs mt-6">
                    <a href="/" className="hover:text-orange-400 transition-colors">← Back to Website</a>
                </p>
            </motion.div>
        </div>
    )
}
