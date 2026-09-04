import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

type CookieSection = {
  title: string
  paragraphs?: string[]
  list?: string[]
  paragraphsAfter?: string[]
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function CookiesPage() {
  const { t } = useTranslation()
  const sections = t('cookies.sections', { returnObjects: true }) as CookieSection[]

  return (
    <>
      <Helmet>
        <title>{t('cookies.metaTitle')}</title>
        <meta name="description" content={t('cookies.metaDesc')} />
        <link rel="canonical" href="https://addpattern.pl/polityka-cookies" />
      </Helmet>

      <section id="main-content" className="section-padding pt-32 pb-28">
        <motion.article
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            {t('cookies.title')}
          </h1>
          <p className="font-body text-sm text-text-muted mb-8">{t('cookies.updated')}</p>
          <p className="font-body text-base text-text-secondary leading-relaxed mb-12">
            {t('cookies.intro')}
          </p>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display font-semibold text-xl text-white mb-4 pb-2 border-b border-surface-border">
                  {section.title}
                </h2>
                {section.paragraphs?.map((p) => (
                  <p
                    key={p}
                    className="font-body text-sm sm:text-base text-text-secondary leading-relaxed mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-3 mb-3 space-y-2 list-disc pl-5">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="font-body text-sm sm:text-base text-text-secondary leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.paragraphsAfter?.map((p) => (
                  <p
                    key={p}
                    className="font-body text-sm sm:text-base text-text-secondary leading-relaxed mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </motion.article>
      </section>
    </>
  )
}
