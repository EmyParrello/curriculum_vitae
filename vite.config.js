import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/curriculum_vitae/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})
