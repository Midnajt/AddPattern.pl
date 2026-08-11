import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { asset } from '../lib/assets'

const SLIDE_FILES = [
  '2.jfif',
  '1.jfif',
  '3.jfif',
  '4.jfif',
  '5.jfif',
  '6.jfif',
  '7.jfif',
  '8.jfif',
  '9.jfif',
  '10.jfif',
  '11.jfif',
  '13.jfif',
  'f1.jpg',
  'dart.jpg',
]

const SLIDES = SLIDE_FILES.map((file) => asset(`assets/interests/${file}`))

const AUTO_MS = 4200

export default function InterestsCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)
  const [lightbox, setLightbox] = useState(false)

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir)
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length)
  }, [])

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1)
    setIndex(i)
  }

  useEffect(() => {
    if (paused || lightbox) return
    const id = window.setInterval(() => go(1), AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, lightbox, go])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, go])

  return (
    <>
      <div
        className="relative mt-6 overflow-hidden rounded-3xl border border-surface-border bg-surface-card"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {/* 16:9 — matches images/assets/2.jfif (1600×900) */}
        <div className="relative aspect-video">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.button
              key={SLIDES[index]}
              type="button"
              aria-label="Open photo"
              onClick={() => setLightbox(true)}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d > 0 ? '12%' : '-12%', opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({ x: d > 0 ? '-12%' : '12%', opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 cursor-zoom-in"
            >
              <img
                src={SLIDES[index]}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
            </motion.button>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-bg/50 via-transparent to-surface-bg/20" />

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-surface-border bg-surface-bg/70 text-white backdrop-blur-sm transition-colors hover:border-brand-primary/50 hover:text-brand-primary"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-surface-border bg-surface-bg/70 text-white backdrop-blur-sm transition-colors hover:border-brand-primary/50 hover:text-brand-primary"
          >
            ›
          </button>
        </div>

        <div className="flex items-center justify-center gap-1.5 px-4 py-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-6 bg-brand-primary'
                  : 'w-1.5 bg-surface-border hover:bg-text-muted'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Photo preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-bg/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(false)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightbox(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-surface-card text-lg text-white transition-colors hover:border-brand-primary/50"
            >
              ×
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation()
                go(-1)
              }}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-surface-border bg-surface-card text-xl text-white transition-colors hover:border-brand-primary/50 hover:text-brand-primary sm:left-6"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation()
                go(1)
              }}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-surface-border bg-surface-card text-xl text-white transition-colors hover:border-brand-primary/50 hover:text-brand-primary sm:right-6"
            >
              ›
            </button>

            <motion.img
              key={SLIDES[index]}
              src={SLIDES[index]}
              alt=""
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[min(96vw,1200px)] rounded-2xl object-contain shadow-glow"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
