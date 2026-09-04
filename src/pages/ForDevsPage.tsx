import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { asset } from '../lib/assets'
import InterestsCarousel from '../components/InterestsCarousel'
import Picture from '../components/Picture'
import JsonLd from '../components/JsonLd'
import { personJsonLd } from '../lib/jsonld'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

/** Technologies used every day — highlighted in the stack list */
const DAILY_STACK = new Set([
  'React',
  'Styled-components',
  'Node.js',
  'Express',
  'MySQL',
  'Cursor',
  'MySQL Workbench',
])

export default function ForDevsPage() {
  const { t } = useTranslation()

  const stack = t('devs.stack', { returnObjects: true }) as Record<
    string,
    { label: string; items: string[] }
  >

  const exp = t('devs.exp', { returnObjects: true }) as Array<{
    company: string
    period: string
    role: string
    bullets: string[]
  }>

  const training = t('devs.training', { returnObjects: true }) as Array<{
    name: string
    url?: string
    year: string
    desc: string
  }>

  const interests = t('devs.interests', { returnObjects: true }) as string[]

  return (
    <>
      <Helmet>
        <title>Marcin Krzysztoszek — Web Developer | AddPattern</title>
        <meta
          name="description"
          content="Web Developer z 4+ latami doświadczenia — React, TypeScript, Node.js. Rekrutacja i networking."
        />
        <link rel="canonical" href="https://addpattern.pl/dla-devow" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://addpattern.pl/dla-devow" />
        <meta property="og:title" content="Marcin Krzysztoszek — Web Developer | AddPattern" />
        <meta
          property="og:description"
          content="Web Developer z 4+ latami doświadczenia — React, TypeScript, Node.js. Rekrutacja i networking."
        />
        <meta property="og:image" content="https://addpattern.pl/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://addpattern.pl/og-image.jpg" />
      </Helmet>
      <JsonLd data={personJsonLd} />

      {/* Hero top with bg image */}
      <main id="main-content">
      <section className="relative pt-32 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Picture
            src={asset('assets/pc2.jpg')}
            alt=""
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-bg/70 to-surface-bg" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                'radial-gradient(ellipse 70% 40% at 30% 0%, rgba(50,214,209,0.4) 0%, transparent 60%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="flex flex-col lg:flex-row items-start gap-10"
          >
            {/* Avatar */}
            <motion.div variants={fadeUp} className="shrink-0">
              <Picture
                src={asset('avatar.png')}
                alt="Marcin Krzysztoszek"
                width={160}
                height={160}
                loading="eager"
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl object-cover border-2 border-brand-primary/40 shadow-glow"
              />
            </motion.div>

            {/* Info */}
            <div className="flex flex-col gap-2">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-display font-semibold w-fit"
              >
                {t('devs.badge')}
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display font-extrabold text-4xl lg:text-5xl text-white mt-1"
              >
                {t('devs.name')}
              </motion.h1>

              <motion.p variants={fadeUp} className="font-body text-text-secondary text-base">
                {t('devs.location')}
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="font-body text-text-secondary text-base max-w-2xl mt-2 leading-relaxed"
              >
                {t('devs.about')}
              </motion.p>

              {/* Contact links */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-4">
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface text-sm font-body text-text-secondary hover:border-brand-primary/50 hover:text-white transition-colors duration-200"
                >
                  ✉ {t('devs.email')}
                </a>
                <a
                  href="https://www.linkedin.com/in/marcin-krzysztoszek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface text-sm font-body text-text-secondary hover:border-brand-secondary/50 hover:text-white transition-colors duration-200"
                >
                  in {t('devs.linkedin')}
                </a>
                <a
                  href="https://github.com/Midnajt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-surface text-sm font-body text-text-secondary hover:border-brand-accent/50 hover:text-white transition-colors duration-200"
                >
                  ⌥ {t('devs.github')}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding pb-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column: Stack */}
          <div className="lg:col-span-1">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="font-display font-bold text-2xl text-white mb-8 pb-3 border-b border-surface-border"
              >
                {t('devs.stackTitle')}
              </motion.h2>

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-2.5 mb-7 text-xs font-body text-text-secondary"
              >
                <span
                  className="inline-block w-3.5 h-3.5 rounded-full border-2 border-brand-primary bg-brand-primary/10 shrink-0"
                  aria-hidden
                />
                {t('devs.stackLegend')}
              </motion.div>

              <div className="flex flex-col gap-7">
                {Object.values(stack).map((group) => (
                  <motion.div key={group.label} variants={fadeUp}>
                    <p className="font-display text-xs font-bold uppercase tracking-widest text-text-muted mb-3">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => {
                        const daily = DAILY_STACK.has(skill)
                        return (
                          <span
                            key={skill}
                            className={
                              daily
                                ? 'px-3 py-1 rounded-full bg-brand-primary/10 border-2 border-brand-primary text-xs font-body text-white'
                                : 'px-3 py-1 rounded-full bg-surface-card border border-surface-border text-xs font-body text-text-secondary hover:border-brand-primary/40 hover:text-white transition-colors duration-200'
                            }
                          >
                            {skill}
                          </span>
                        )
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column: Experience + Training + CTA */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            {/* Experience */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="font-display font-bold text-2xl text-white mb-8 pb-3 border-b border-surface-border"
              >
                {t('devs.expTitle')}
              </motion.h2>

              {exp.map((e) => (
                <motion.div key={e.company} variants={fadeUp} className="mb-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display font-semibold text-lg text-white">{e.company}</h3>
                    <span className="font-body text-sm text-text-muted">{e.period}</span>
                  </div>
                  <p className="font-body text-sm text-brand-primary mb-3">{e.role}</p>
                  <ul className="flex flex-col gap-2">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-body text-sm text-text-secondary leading-relaxed">
                        <span className="text-brand-primary mt-0.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Training */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="font-display font-bold text-2xl text-white mb-8 pb-3 border-b border-surface-border"
              >
                {t('devs.trainingTitle')}
              </motion.h2>

              {training.map((tr) => (
                <motion.div key={tr.name} variants={fadeUp} className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                  <div>
                    {tr.url ? (
                      <a
                        href={tr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-semibold text-base text-white hover:text-brand-primary transition-colors duration-200"
                      >
                        {tr.name} ↗
                      </a>
                    ) : (
                      <h3 className="font-display font-semibold text-base text-white">{tr.name}</h3>
                    )}
                    <p className="font-body text-sm text-text-muted mt-0.5">{tr.desc}</p>
                  </div>
                  <span className="font-body text-sm text-text-muted shrink-0">{tr.year}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Interests */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="font-display font-bold text-2xl text-white mb-8 pb-3 border-b border-surface-border"
              >
                {t('devs.interestsTitle')}
              </motion.h2>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-surface-card border border-surface-border text-sm font-body text-text-secondary hover:border-brand-primary/40 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <InterestsCarousel />
              </motion.div>
            </motion.div>

            {/* CV CTA */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-brand-primary/20 bg-surface-card p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <p className="font-body text-text-secondary text-base max-w-sm">
                {t('devs.cvCta')}
              </p>
              <motion.a
                href={`mailto:${t('contact.email')}`}
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0 0 20px rgba(50,214,209,.35), 0 0 40px rgba(123,92,255,.25)',
                }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-2xl font-display font-bold text-sm text-surface-bg bg-brand-gradient shadow-glow-sm transition-all duration-200 shrink-0"
              >
                {t('devs.cvBtn')}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}
