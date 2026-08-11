import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { asset } from '../lib/assets'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const IMAGES: Record<string, string> = {
  wesele: asset('assets/weeding.jpg'),
  pianos: asset('assets/piano.jpeg'),
  dental: asset('assets/clinic.png'),
  kwiaciarnia: asset('assets/flowers.jpg'),
}

export default function Portfolio() {
  const { t } = useTranslation()
  const items = t('portfolio.items', { returnObjects: true }) as Array<{
    id: string
    name: string
    cat: string
    url: string
  }>

  return (
    <section id="portfolio" className="py-28 section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-xl">
            {t('portfolio.sub')}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {items.map((project) => (
            <motion.a
              key={project.id}
              variants={item}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] block"
              whileHover="hover"
            >
              {/* Image */}
              <motion.img
                src={IMAGES[project.id]}
                alt={project.name}
                className="w-full h-full object-cover"
                variants={{
                  hover: { scale: 1.06, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
              />

              {/* Default overlay — always slightly visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-bg/80 via-surface-bg/20 to-transparent" />

              {/* Category pill */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-bg/70 backdrop-blur-sm border border-surface-border text-xs font-display font-semibold text-text-secondary">
                {project.cat}
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-7"
                variants={{
                  hover: { transition: { staggerChildren: 0.06 } },
                }}
              >
                <motion.p
                  className="font-display font-bold text-xl text-white mb-2 translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400"
                >
                  {project.name}
                </motion.p>
                <motion.span
                  className="font-body text-sm text-brand-primary translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-75"
                >
                  {t('portfolio.visit')}
                </motion.span>
              </motion.div>

              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-brand-primary/40 transition-colors duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
