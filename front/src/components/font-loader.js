class FontLoader extends HTMLElement {
  constructor () {
    super()

    const font = document.createElement('link')
    font.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'
    font.rel = 'stylesheet'
    document.head.appendChild(font)
  }
}

customElements.define('font-loader-component', FontLoader)