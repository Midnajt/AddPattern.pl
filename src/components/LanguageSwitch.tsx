import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function LanguageSwitch() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  function toggle() {
    i18n.changeLanguage(isEn ? 'pl' : 'en')
  }

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center gap-1 px-3 py-1.5 rounded-full border border-surface-border text-sm font-display font-semibold text-text-secondary hover:text-white hover:border-brand-primary transition-colors duration-200"
      aria-label="Toggle language"
    >
      <span className={isEn ? 'text-text-muted' : 'text-gradient'}>PL</span>
      <span className="text-surface-border">|</span>
      <span className={isEn ? 'text-gradient' : 'text-text-muted'}>EN</span>
    </motion.button>
  )
}
