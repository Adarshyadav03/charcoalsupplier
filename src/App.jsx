import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

// Public Website
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'

import WhyChooseUs from './components/WhyChooseUs'
import Industries from './components/Industries'
import Stats from './components/Stats'
import TrustSection from './components/TrustSection'
import ServiceAreas from './components/ServiceAreas'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ProductManagement from './pages/admin/ProductManagement'
import LeadManagement from './pages/admin/LeadManagement'
import Analytics from './pages/admin/Analytics'
import Settings from './pages/admin/Settings'

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => { window.scrollTo(0, 0) }, [pathname])
    return null
}

// Protected route guard
function ProtectedRoute({ children }) {
    const token = localStorage.getItem('admin_token')
    return token ? children : <Navigate to="/admin/login" replace />
}

// Full public homepage
function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Products />
            <Stats />
            <WhyChooseUs />
            <Industries />
            <TrustSection />
            <ServiceAreas />
            <Contact />
            <Footer />
            <FloatingWhatsApp />
        </>
    )
}

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                {/* Public */}
                <Route path="/" element={<HomePage />} />

                {/* Admin Login */}
                <Route path="/admin/login" element={<AdminLogin />} />

                {/* Admin Protected Routes */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Navigate to="/admin/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="products" element={<ProductManagement />} />
                    <Route path="leads" element={<LeadManagement />} />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                {/* Catch all */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    )
}
