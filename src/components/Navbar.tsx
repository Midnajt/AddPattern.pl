import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import LanguageSwitch from './LanguageSwitch'
import { asset } from '../lib/assets'

const NAV_ITEMS = ['offer', 'portfolio', 'process', 'contact'] as const

export default function Navbar() {
  const { t } = useTranslation()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  function scrollTo(id: string) {
    if (!isHome) return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  function goHome() {
    setMobileOpen(false)
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function goToForDevs() {
    setMobileOpen(false)
    if (location.pathname === '/dla-devow') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-surface-bg/95 backdrop-blur-md border-b border-surface-border shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={goHome} className="flex items-center group" aria-label="AddPattern — strona główna">
            <img
              src={asset('logo_icon.png')}
              alt="AddPattern"
              className="h-14 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((key) =>
              isHome ? (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="text-sm font-body text-text-secondary hover:text-white transition-colors duration-200"
                >
                  {t(`nav.${key}`)}
                </button>
              ) : (
                <Link
                  key={key}
                  to={`/#${key}`}
                  className="text-sm font-body text-text-secondary hover:text-white transition-colors duration-200"
                >
                  {t(`nav.${key}`)}
                </Link>
              )
            )}
          </nav>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/dla-devow"
              onClick={goToForDevs}
              className="text-sm font-body text-text-muted hover:text-brand-primary transition-colors duration-200"
            >
              {t('nav.forDevs')}
            </Link>
            <LanguageSwitch />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
            <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
            <span className="block w-5 h-0.5 bg-current transition-all" />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-surface-bg/98 backdrop-blur-md border-b border-surface-border px-6 pb-6 pt-4 flex flex-col gap-4 md:hidden"
          >
            {NAV_ITEMS.map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className="text-left text-base font-body text-text-secondary hover:text-white transition-colors"
              >
                {t(`nav.${key}`)}
              </button>
            ))}
            <Link
              to="/dla-devow"
              className="text-base font-body text-brand-primary"
              onClick={goToForDevs}
            >
              {t('nav.forDevs')}
            </Link>
            <div className="pt-2 border-t border-surface-border">
              <LanguageSwitch />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
