import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Fuerza la detección de cambios en archivos
    },
    hmr: {
      overlay: false, // Evita que la superposición de errores bloquee la recarga
    },
  },
})
