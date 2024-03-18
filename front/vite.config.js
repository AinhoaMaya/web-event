const { defineConfig } = require('vite')

export default defineConfig({
  base: './',
  server: {
    port: 5500
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    rollupOptions: {
      input: '/src/index.js'
    }
  }
})
