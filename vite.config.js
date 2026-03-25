import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/easter-egg-shop/',
  plugins: [react()],
})
