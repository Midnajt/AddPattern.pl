export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-X8PYS8QPEQ'

export const CONSENT_STORAGE_KEY = 'ap_cookie_consent'
export const CONSENT_CHANGE_EVENT = 'ap-cookie-consent'
export const OPEN_COOKIE_SETTINGS_EVENT = 'ap-open-cookie-settings'

export type CookieConsent = 'accepted' | 'rejected'

function isValidMeasurementId(id: string): boolean {
  return /^G-[A-Z0-9]+$/.test(id)
}

export function isAnalyticsConfigured(): boolean {
  return isValidMeasurementId(GA_MEASUREMENT_ID)
}

export function getConsent(): CookieConsent | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (value === 'accepted' || value === 'rejected') return value
  } catch {
    /* private mode / blocked storage */
  }
  return null
}

export function setConsent(value: CookieConsent): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, value)
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT))
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
}

function setGaDisabled(disabled: boolean): void {
  Object.assign(window, { [`ga-disable-${GA_MEASUREMENT_ID}`]: disabled })
}

export function initAnalytics(): void {
  if (!isAnalyticsConfigured() || typeof window === 'undefined') return

  setGaDisabled(false)

  if (document.getElementById('ga4-gtag')) {
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })

  const script = document.createElement('script')
  script.id = 'ga4-gtag'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

export function disableAnalytics(): void {
  if (!isAnalyticsConfigured() || typeof window === 'undefined') return

  setGaDisabled(true)
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
  clearGaCookies()
}

export function trackPageView(path: string): void {
  if (!isAnalyticsConfigured() || typeof window.gtag !== 'function') return
  if (getConsent() !== 'accepted') return

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path,
  })
}

function clearGaCookies(): void {
  const names = document.cookie.split(';').map((part) => part.split('=')[0].trim())
  const hostParts = window.location.hostname.split('.')
  const rootDomain = hostParts.length >= 2 ? `.${hostParts.slice(-2).join('.')}` : window.location.hostname

  for (const name of names) {
    if (name !== '_ga' && name !== '_gid' && !name.startsWith('_ga_')) continue
    for (const domain of [undefined, window.location.hostname, rootDomain]) {
      const domainPart = domain ? `; domain=${domain}` : ''
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainPart}`
    }
  }
}
