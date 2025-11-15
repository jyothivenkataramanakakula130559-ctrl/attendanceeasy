import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    host: true,
    allowedHosts: ["attendanceeasy-1.onrender.com"]
  },
  server: {
    host: true
  }
})
