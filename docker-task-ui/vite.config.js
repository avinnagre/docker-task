import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Ensure Vite binds to all interfaces
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://docker-task-server:5000', // Adjust the target URL to match your backend service
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
