import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { asset } from '../lib/assets'
import Picture from '../components/Picture'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
}

const word = {
  hidden: { opacity: 0, y: 48, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const { t } = useTranslation()
  const headline: string = t('hero.headline')
  const words = headline.split(' ')

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'linear' }}
        className="absolute inset-0 z-0"
      >
        <Picture
          src={asset('assets/pc.jpg')}
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-bg/85 via-surface-bg/60 to-surface-bg" />
        {/* Brand gradient glow at top */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(123,92,255,0.5) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 pt-32 pb-24 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-display font-semibold"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
          {t('hero.badge')}
        </motion.div>

        {/* Headline — word-by-word stagger */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white mb-6 max-w-4xl"
          aria-label={headline}
        >
          {words.map((w, i) => (
            <motion.span key={i} variants={word} className="inline-block mr-[0.25em]">
              {i === 3 || i === 4 ? (
                <span className="text-gradient">{w}</span>
              ) : (
                w
              )}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.9 }}
          className="font-body text-lg sm:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
        >
          {t('hero.sub')}
        </motion.p>

        {/* CTA group */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.a
            href={`mailto:${t('contact.email')}`}
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(50,214,209,.4), 0 0 40px rgba(123,92,255,.3)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-2xl font-display font-bold text-base text-surface-bg bg-brand-gradient shadow-glow transition-all duration-200"
          >
            {t('hero.cta')}
          </motion.a>
          <span className="text-sm text-text-muted font-body">{t('hero.ctaSub')}</span>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-brand-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
