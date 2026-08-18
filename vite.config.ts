import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Local `npm run build` + FTP (addpattern.pl): assets at domain root.
// GitHub Actions sets GITHUB_PAGES=true → project site path.
const githubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  plugins: [react()],
  base: githubPages ? '/AddPattern.github.io/' : '/',
})
