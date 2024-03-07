class About extends HTMLElement {
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
    const response = await fetch('/src/data/about.json')
    this.data = await response.json()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .about{
            overflow: hidden;
          }

          .about-image img{
            object-fit: cover;
            width: 100%;
            margin: 0;
          }
          
          .about-content{
            padding: 0 5rem;
            margin: 0;
            font-family: 'Poppins', sans-serif;
            text-align: justify;
          }
        </style>

        <div class="about">
          <div class="about-image">
            <picture>
              <source srcset="${this.data.images.lg.src}" type="image/webp" media="(min-width: 1200px)">
              <source srcset="${this.data.images.md.src}" type="image/webp" media="(min-width: 992px)">
              <source srcset="${this.data.images.sm.src}" type="image/webp" media="(max-width: 601px)">
              <source srcset="${this.data.images.xs.src}" type="image/webp" media="(max-width: 600px)">
              <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
            </picture>
          </div>
          <div class="about-content">
            <div class="about-title-about">
              <h1>${this.data.title}</h1>
            </div>
            <div class="about-text">
              <p>${this.data.description}</p>
            </div>
          </div>
        </div>
      `
  }
}

customElements.define('about-component', About)
