import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    outDir: "dist",
  },
  server: {
    proxy: command === "serve" ? {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    } : undefined,
  },
}));
