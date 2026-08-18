import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  getConsent,
  isAnalyticsConfigured,
  setConsent,
} from '../lib/analytics'

export default function CookieBanner() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!isAnalyticsConfigured()) return
    setVisible(getConsent() === null)

    function openSettings() {
      setVisible(true)
    }

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings)
  }, [])

  if (!isAnalyticsConfigured()) return null

  function accept() {
    setConsent('accepted')
    setVisible(false)
  }

  function reject() {
    setConsent('rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-3xl"
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-text"
        >
          <div className="rounded-3xl border border-surface-border bg-surface-card/95 p-5 shadow-lg backdrop-blur-md sm:p-6">
            <p
              id="cookie-banner-title"
              className="font-display text-sm font-semibold text-white sm:text-base"
            >
              {t('cookieBanner.title')}
            </p>
            <p
              id="cookie-banner-text"
              className="mt-2 font-body text-sm leading-relaxed text-text-secondary"
            >
              {t('cookieBanner.text')}{' '}
              <Link
                to="/polityka-cookies"
                className="text-brand-primary underline-offset-2 hover:underline"
              >
                {t('cookieBanner.more')}
              </Link>
            </p>
            <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={reject}
                className="rounded-2xl border border-surface-border bg-surface px-5 py-2.5 font-display text-sm font-semibold text-text-secondary transition-colors hover:border-brand-primary/40 hover:text-white"
              >
                {t('cookieBanner.reject')}
              </button>
              <button
                type="button"
                onClick={accept}
                className="rounded-2xl bg-brand-gradient px-5 py-2.5 font-display text-sm font-bold text-surface-bg shadow-glow-sm transition-opacity hover:opacity-95"
              >
                {t('cookieBanner.accept')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
