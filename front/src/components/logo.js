class Logo extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    this.data = {
      images: {
        alt: 'logo',
        title: 'logo',
        xs: {
          src: './public/logo.svg'
        },
        sm: {
          src: './public/logo.svg'
        },
        md: {
          src: './public/logo.svg'
        },
        lg: {
          src: './public/logo.svg'
        }
      }
    }
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .logo{
            height: 3rem;
            width: 3rem;
          }
        </style>

        <div class="logo">
          <a href="/">
            <picture>
              <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
              <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
              <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
              <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
              <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
            </picture>
          </a>
        </div>
      `
  }
}

customElements.define('logo-component', Logo)
