import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { asset } from '../lib/assets'
import { isAnalyticsConfigured, openCookieSettings } from '../lib/analytics'

export default function Footer() {
  const { t } = useTranslation()
  const location = useLocation()
  const year = new Date().getFullYear()

  function scrollIfSame(path: string) {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-surface-border bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={asset('logo_icon.png')} alt="AddPattern" className="h-7 w-auto opacity-70" />
          <span className="text-text-muted text-sm font-body">{t('footer.tagline')}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-text-muted font-body">
          <Link
            to="/dla-devow"
            onClick={() => scrollIfSame('/dla-devow')}
            className="hover:text-brand-primary transition-colors"
          >
            {t('nav.forDevs')}
          </Link>
          <Link
            to="/polityka-cookies"
            onClick={() => scrollIfSame('/polityka-cookies')}
            className="hover:text-brand-primary transition-colors"
          >
            {t('footer.cookies')}
          </Link>
          {isAnalyticsConfigured() && (
            <button
              type="button"
              onClick={openCookieSettings}
              className="hover:text-brand-primary transition-colors"
            >
              {t('footer.cookieSettings')}
            </button>
          )}
          <span>© {year} AddPattern. {t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  )
}
