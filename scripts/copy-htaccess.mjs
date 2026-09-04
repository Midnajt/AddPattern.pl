import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'public', '.htaccess')
const destDir = join(root, 'dist')
const dest = join(destDir, '.htaccess')

if (!existsSync(src)) {
  console.error('Missing public/.htaccess')
  process.exit(1)
}

mkdirSync(destDir, { recursive: true })
copyFileSync(src, dest)
console.log('Copied public/.htaccess → dist/.htaccess')

const indexHtml = join(destDir, 'index.html')
const notFound = join(destDir, '404.html')
if (existsSync(indexHtml)) {
  copyFileSync(indexHtml, notFound)
  console.log('Copied dist/index.html → dist/404.html')
}
