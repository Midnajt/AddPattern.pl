import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { asset } from '../lib/assets'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const ICONS: Record<string, string> = {
  wizytowka: '🏠',
  landing: '⚡',
  shop: '🛒',
  wordpress: '🧩',
  blog: '✍️',
  support: '🛠️',
}

export default function Offer() {
  const { t } = useTranslation()
  const items = t('offer.items', { returnObjects: true }) as Array<{
    id: string
    title: string
    desc: string
  }>
  const extras = t('offer.extras', { returnObjects: true }) as string[]

  return (
    <section id="offer" className="py-28 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          {/* Large brand logo */}
          <motion.img
            src={asset('logo.png')}
            alt="AddPattern"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="h-80 sm:h-96 lg:h-[32rem] w-auto mx-auto mb-12 opacity-90"
          />
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            {t('offer.title')}
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-xl">
            {t('offer.sub')}
          </p>
        </motion.div>

        {/* Main services — interactive items */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20"
        >
          {items.map((svc) => (
            <motion.div
              key={svc.id}
              variants={item}
              whileHover={{
                y: -6,
                boxShadow: '0 0 20px rgba(50,214,209,.2), 0 0 40px rgba(123,92,255,.15)',
              }}
              className="group relative bg-surface-card border border-surface-border rounded-3xl p-7 cursor-default transition-colors duration-300 hover:border-brand-primary/40"
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{ICONS[svc.id]}</div>
              <h3 className="font-display font-semibold text-lg text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {svc.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">{svc.desc}</p>
              {/* Gradient corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-3xl bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional services */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-start gap-8"
        >
          <h3 className="font-display font-semibold text-xl text-white shrink-0 lg:w-48 lg:pt-1">
            {t('offer.extraTitle')}
          </h3>
          <ul className="flex flex-wrap gap-3">
            {extras.map((extra, i) => (
              <li
                key={i}
                className="px-4 py-2 rounded-full border border-surface-border bg-surface text-sm font-body text-text-secondary hover:border-brand-primary/50 hover:text-white transition-colors duration-200"
              >
                {extra}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
