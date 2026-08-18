import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default: FTP / addpattern.pl (domain root).
// GitHub Pages overrides this with `vite build --base /<repo-name>/`.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
