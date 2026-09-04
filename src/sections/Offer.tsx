import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { asset } from '../lib/assets'
import Picture from '../components/Picture'

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

function OfferIcon({ id }: { id: string }) {
  const gradientId = `offer-icon-${id}`
  const paths: Record<string, ReactNode> = {
    wizytowka: (
      <>
        <rect x="2.5" y="3" width="19" height="18" rx="2.5" />
        <path d="M2.5 7.5h19M6 5.25h.01M9 5.25h.01" />
        <path d="m7 14 5-4 5 4v5h-3.2v-3.7h-3.6V19H7v-5Z" />
      </>
    ),
    landing: (
      <>
        <rect x="2.5" y="3" width="19" height="18" rx="2.5" />
        <path d="M2.5 7.5h19M6 5.25h.01M9 5.25h.01M13.4 9.5 8.8 15h3.7l-1 5 4.8-6h-3.7l.8-4.5Z" />
      </>
    ),
    shop: (
      <>
        <path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6" />
        <path d="M9.2 8v7.7M15 8v7.7M7 11.8h12.8M9.5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      </>
    ),
    wordpress: (
      <>
        <path d="M3 3h8v5.2a2 2 0 1 0 0 3.6V17H8.2a2 2 0 1 1-3.4 0H3V3Z" />
        <path d="M11 3h10v7.8h-2.2a2 2 0 1 0 0 3.4H21V21H11v-4.8a2 2 0 1 0 0-3.4v-1" />
      </>
    ),
    blog: (
      <>
        <path d="M14 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7" />
        <path d="M8 9h4M8 13h3M8 17h5M13.5 14.5l1-3L20 6a1.4 1.4 0 0 1 2 2l-5.5 5.5-3 1Z" />
      </>
    ),
    support: (
      <>
        <path d="m4 4 6.5 6.5M13.5 13.5 20 20M3.5 3.5 7 4.3 4.3 7 3.5 3.5ZM17 17l-2 2 2 2 2-2" />
        <path d="M14 9.5a5 5 0 0 1 6.6-6.1l-3 3 .5 2.5 2.5.5 3-3A5 5 0 0 1 17.5 13L9 21.5a2.1 2.1 0 0 1-3-3L14 9.5Z" />
      </>
    ),
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9"
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5AF0EB" />
          <stop offset="0.4" stopColor="#6BA3FF" />
          <stop offset="0.72" stopColor="#A08CFF" />
          <stop offset="1" stopColor="#E9A0FF" />
        </linearGradient>
      </defs>
      {paths[id]}
    </svg>
  )
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
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <Picture
              src={asset('logo.png')}
              alt="AddPattern"
              width={720}
              height={720}
              className="h-80 sm:h-96 lg:h-[32rem] w-auto mx-auto opacity-90"
            />
          </motion.div>
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
              <div className="mb-4">
                <OfferIcon id={svc.id} />
              </div>
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
