import { defineConfig } from 'vite' // Importar `defineConfig` desde Vite en lugar de utilizar `require`

export default defineConfig({ // Utilizar `export default` en lugar de `module.exports`
  base: './',
  server: {
    port: 5500
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    rollupOptions: {
      input: 'src/index.js'
    }
  }
})
