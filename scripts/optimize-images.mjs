import { readdirSync, statSync } from 'node:fs'
import { extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const publicDir = join(root, 'public')
const SKIP = new Set(['og-image.jpg', 'og-image.png'])
const INPUT_EXT = new Set(['.jpg', '.jpeg', '.png', '.jfif'])

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

const files = walk(publicDir).filter((file) => {
  const rel = relative(publicDir, file).replaceAll('\\', '/')
  if (SKIP.has(rel)) return false
  return INPUT_EXT.has(extname(file).toLowerCase())
})

for (const file of files) {
  const dest = file.replace(/\.(jpe?g|png|jfif)$/i, '.webp')
  const rel = relative(publicDir, file)
  const isLogo = /logo|avatar/i.test(rel)
  await sharp(file)
    .webp({ quality: isLogo ? 90 : 76, effort: 4 })
    .toFile(dest)
  console.log(`webp ${rel}`)
}
