/** Resolve a public/ asset path against Vite `base` (needed for GitHub Pages). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}

/** Same path with a .webp extension (paired file from scripts/optimize-images.mjs). */
export function webpOf(src: string): string | null {
  if (/\.webp$/i.test(src)) return null
  const next = src.replace(/\.(jpe?g|png|jfif)$/i, '.webp')
  return next === src ? null : next
}
