import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom'
import { LayoutDashboard, Package, Inbox, BarChart2, Settings, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { label: 'Products', icon: Package, path: '/admin/products' },
    { label: 'Leads', icon: Inbox, path: '/admin/leads' },
    { label: 'Analytics', icon: BarChart2, path: '/admin/analytics' },
    { label: 'Settings', icon: Settings, path: '/admin/settings' },
]

export default function AdminLayout() {
    const location = useLocation()
    const navigate = useNavigate()
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const logout = () => {
        localStorage.removeItem('admin_token')
        navigate('/admin/login')
    }

    const Sidebar = () => (
        <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-5 border-b border-white/8">
                <div className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="Kamlesh Charcoal"
                        className="h-10 w-10 rounded-xl object-cover shadow"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                    />
                    <div style={{ display: 'none' }} className="w-10 h-10 rounded-xl items-center justify-center fire-gradient">
                        <span className="text-white font-black">K</span>
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm leading-none">Kamlesh Admin</p>
                        <p className="text-zinc-500 text-xs">Charcoal & Lakda Ent.</p>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 p-4 space-y-1">
                {navItems.map(({ label, icon: Icon, path }) => {
                    const active = location.pathname === path
                    return (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${active
                                ? 'fire-gradient text-white shadow-lg shadow-orange-900/30'
                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <Icon size={18} />
                            {label}
                        </Link>
                    )
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-white/8 space-y-2">
                <Link to="/" className="flex items-center gap-3 px-4 py-2 rounded-xl text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                    ← View Website
                </Link>
                <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-xl text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
                >
                    <LogOut size={15} />
                    Sign Out
                </button>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen flex" style={{ background: 'var(--dark-bg)' }}>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-64 flex-col border-r border-white/8 fixed h-full" style={{ background: 'var(--dark-surface)' }}>
                <Sidebar />
            </aside>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div className="lg:hidden fixed inset-0 z-50 flex">
                    <div className="w-64 flex flex-col border-r border-white/8" style={{ background: 'var(--dark-surface)' }}>
                        <div className="flex justify-end p-4">
                            <button onClick={() => setSidebarOpen(false)} className="text-zinc-400">
                                <X size={20} />
                            </button>
                        </div>
                        <Sidebar />
                    </div>
                    <div className="flex-1 bg-black/60" onClick={() => setSidebarOpen(false)} />
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
                {/* Top bar */}
                <header className="sticky top-0 z-30 border-b border-white/8 px-6 py-4 flex items-center gap-4" style={{ background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(12px)' }}>
                    <button className="lg:hidden text-zinc-400" onClick={() => setSidebarOpen(true)}>
                        <Menu size={22} />
                    </button>
                    <div className="flex-1">
                        <p className="text-white font-semibold">
                            {navItems.find((n) => n.path === location.pathname)?.label || 'Admin'}
                        </p>
                    </div>
                    <div className="text-xs text-zinc-500">
                        Kamlesh Charcoal & Lakda Ent.
                    </div>
                </header>

                <div className="flex-1 p-6 lg:p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
