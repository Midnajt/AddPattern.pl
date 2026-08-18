import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ForDevsPage from './pages/ForDevsPage'
import CookiesPage from './pages/CookiesPage'
import CookieBanner from './components/CookieBanner'
import AnalyticsTracker from './components/AnalyticsTracker'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface-bg font-body text-text">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dla-devow" element={<ForDevsPage />} />
        <Route path="/polityka-cookies" element={<CookiesPage />} />
      </Routes>
      <Footer />
      <CookieBanner />
      <AnalyticsTracker />
    </div>
  )
}
