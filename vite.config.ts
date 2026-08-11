import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path: '/' for custom domain or username.github.io root repo,
// '/REPO-NAME/' for project pages — update before deploying
export default defineConfig({
  plugins: [react()],
  base: '/AddPattern.github.io/',
})
