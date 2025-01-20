import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactBableCompiter from 'babel-plugin-react-compiler'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react({
    babel: {
      plugins: [reactBableCompiter]
    }
  })],
  server: {
    port: 3000,
    host: true
  }
});
