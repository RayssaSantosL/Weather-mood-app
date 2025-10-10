import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['framer-motion'] // força Vite a processar framer-motion corretamente
  },
  server: {
    port: 5173, // você pode mudar a porta se quiser
  },
  resolve: {
    alias: {
      '@': '/src', // facilita imports tipo "@/components/WeatherCard"
    },
  },
})
