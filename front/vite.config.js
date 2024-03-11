const { defineConfig } = require('vite')

module.exports = defineConfig({
  base: './',
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist', // La carpeta donde quiero que se guarde el resultado del empaquetamiento. En este caso la carpeta "dist" */
    assetsDir: 'assets', // JavaScript y CSS se guardarán en la carpeta "assets" y esta dentro de "dist" */
    minify: 'terser', // Para comprimir al máximo ("minify") se utiliza una librería llamada "terser" */
    rollupOptions: {
      input: 'src/index.js' // En la carpeta donde se encuentra el archivo que llama a todos los js */
    }
  }
})
