import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ForDevsPage from './pages/ForDevsPage'
import CookiesPage from './pages/CookiesPage'
import NotFoundPage from './pages/NotFoundPage'
import CookieBanner from './components/CookieBanner'
import AnalyticsTracker from './components/AnalyticsTracker'

function LegacyHashRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    const raw = window.location.hash
    const legacy = raw.match(/^#(\/[^?]*)/)
    if (legacy) {
      navigate(legacy[1], { replace: true })
    }
  }, [navigate])

  return null
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash && !hash.startsWith('#/')) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash || hash.startsWith('#/')) return
    const id = decodeURIComponent(hash.slice(1))
    const el = document.getElementById(id)
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface-bg font-body text-text">
      <a href="#main-content" className="skip-link">
        Przejdź do treści
      </a>
      <LegacyHashRedirect />
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dla-devow" element={<ForDevsPage />} />
        <Route path="/polityka-cookies" element={<CookiesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <CookieBanner />
      <AnalyticsTracker />
    </div>
  )
}
