import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const stepItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Process() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true }) as Array<{
    num: string
    title: string
    desc: string
  }>

  return (
    <section id="process" className="py-28 section-padding">
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
            {t('process.title')}
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-xl">
            {t('process.sub')}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-border rounded-3xl overflow-hidden"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              variants={stepItem}
              className="group relative bg-surface-bg p-8 hover:bg-surface transition-colors duration-300"
            >
              {/* Step number */}
              <div className="font-display text-5xl font-extrabold text-gradient mb-4 leading-none">
                {step.num}
              </div>

              {/* Connector line — only on desktop between steps */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-surface-border" />
              )}

              <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {step.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
