import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { asset } from '../lib/assets'
import Picture from '../components/Picture'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="relative py-36 section-padding overflow-hidden">
      {/* Background — Warsaw sunset full-bleed */}
      <div className="absolute inset-0 z-0">
        <Picture
          src={asset('assets/warsaw-sunset.jpg')}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-bg via-surface-bg/80 to-surface-bg/60" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(123,92,255,0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {t('contact.title')}
          </h2>
          <p className="font-body text-lg text-text-secondary mb-10 max-w-xl mx-auto">
            {t('contact.sub')}
          </p>

          <motion.a
            href={`mailto:${t('contact.email')}`}
            whileHover={{
              scale: 1.04,
              boxShadow: '0 0 24px rgba(50,214,209,.45), 0 0 50px rgba(123,92,255,.3)',
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 rounded-2xl font-display font-bold text-lg text-surface-bg bg-brand-gradient shadow-glow transition-all duration-200 mb-6"
          >
            {t('contact.cta')}
          </motion.a>

          <p className="font-body text-sm text-text-muted">
            {t('contact.email')} · {t('contact.location')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
