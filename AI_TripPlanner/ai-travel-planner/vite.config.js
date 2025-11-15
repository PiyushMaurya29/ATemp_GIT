import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Tailwind CSS is configured via PostCSS (postcss.config.js)
    // If you want to use @tailwindcss/vite plugin instead, uncomment below:
    // import tailwindcss from '@tailwindcss/vite'
    // tailwindcss(),
  ],
})
