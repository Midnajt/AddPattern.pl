import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path: '/' for custom domain (addpattern.pl / OVH)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
