import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default: FTP / addpattern.pl (domain root).
// GitHub Pages overrides this with `vite build --base /AddPattern.github.io/`.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
