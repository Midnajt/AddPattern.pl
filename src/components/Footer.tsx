import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-border bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo_icon.png" alt="AddPattern" className="h-7 w-auto opacity-70" />
          <span className="text-text-muted text-sm font-body">{t('footer.tagline')}</span>
        </div>

        <div className="flex items-center gap-6 text-xs text-text-muted font-body">
          <Link to="/dla-devow" className="hover:text-brand-primary transition-colors">
            {t('nav.forDevs')}
          </Link>
          <a href="mailto:midnajt0@gmail.com" className="hover:text-brand-primary transition-colors">
            midnajt0@gmail.com
          </a>
          <span>© {year} AddPattern. {t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  )
}
