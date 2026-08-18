import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  CONSENT_CHANGE_EVENT,
  disableAnalytics,
  getConsent,
  initAnalytics,
  trackPageView,
  type CookieConsent,
} from '../lib/analytics'

export default function AnalyticsTracker() {
  const location = useLocation()
  const [consent, setConsent] = useState<CookieConsent | null>(() => getConsent())

  useEffect(() => {
    function syncConsent() {
      const next = getConsent()
      setConsent(next)
      if (next === 'accepted') initAnalytics()
      if (next === 'rejected') disableAnalytics()
    }

    syncConsent()
    window.addEventListener(CONSENT_CHANGE_EVENT, syncConsent)
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, syncConsent)
  }, [])

  useEffect(() => {
    if (consent !== 'accepted') return

    const timer = window.setTimeout(() => {
      trackPageView(location.pathname)
    }, 80)

    return () => window.clearTimeout(timer)
  }, [location.pathname, consent])

  return null
}
