class Product extends HTMLElement {
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
    const response = await fetch('/src/data/product.json')
    this.data = await response.json()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          h1, h2{
            line-height: 0;
            font-family: 'Poppins', sans-serif;
          }

          p{
            padding-top: 1rem;
            margin: 0;
          }

          .products{
            padding-top: 5rem;
            height: 80vh;
            max-height: 80vh;
            z-index: 1000;
          }

          .products-activity{
            display: flex;
            gap: 5rem;
            padding: 5rem;
            min-height: 500px;
          }

          .products-image{
            display: flex;
            width: 430px;
            min-width: 430px;
          }

          .products-image img{
            object-fit: cover;
            width: 100%;
          }

          .products-title-schedule{
            display: flex;
            justify-content: space-between;
          }
          
          .products-button{
            display: flex;
            justify-content: center;
          }

          .products-button button{
            background-color: hsl(204, 59%, 51%);
            border: none;
            border-radius: 1rem;
            color: hsl(0, 0%, 100%);
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            padding: 0.5rem 5rem;
            margin: 2rem 0;
            transition: all 0.3s ease;
          }

          .products-button button:hover{
            background-color: hsl(204, 59%, 61%);
          }
        </style>

        <div class="products">
          <div class="products-activity">
            <div class="products-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/webp" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/webp" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/webp" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/webp" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
            </div>
            <div class="products-info">
              <div class="products-title-schedule">
                <h1>${this.data.title}</h1>
              </div>
              <div class="products-organizer">
                <h2>${this.data.subtitle}</h2>
              </div>
              <div class="products-description">
                <p>${this.data.description}</p>
              </div>
              <div class="products-button">
                <button>${this.data.buttonText}</button>
              </div>
            </div>
          </div>
        </div>
      `
  }
}

customElements.define('product-component', Product)
