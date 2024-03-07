class ProductGallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.products = []
    this.data = []
  }

  async connectedCallback () {
    await document.addEventListener('filter-gallery', this.handleShowNotification.bind(this))
    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch('/src/data/product-gallery.json')
    this.data = await response.json()
  }

  handleShowNotification (event) {
    const products = event.detail.category === 'todos' ? this.data : this.data.filter(product => product.category === event.detail.category)
    this.render(products)
  }

  render (products = this.data) {
    this.shadow.innerHTML =
    /* html */`
    <style>
      a{
        height: 100%;
        text-decoration: none;
        width: 100%;
      }

      .product-gallery{
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 300px;
        grid-auto-flow: row dense;
        grid-gap: 0.5rem;
        padding: 0.5rem;
      }

      .frame-1x1{
        grid-column: span 1;
        grid-row: span 1;
      }

      .frame-2x2{
        grid-column: span 2;
        grid-row: span 2;
      }

      .frame-1x2{
        grid-column: span 1;
        grid-row: span 2;
      }

      .frame-2x1{
        grid-column: span 2;
        grid-row: span 1;
      }

      .frame-3x1{
        grid-column: span 3;
        grid-row: span 1;
      }

      .product{
        align-items: center;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        padding: 1rem;
        position: relative;
        background-color: hsl(248deg 53% 57%);
      }

      .add-button-container{
        position: absolute;
        right: 1rem;
        top: 1rem;
      }

      .product-details{
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        height: 100%;
        justify-content: center;
      }

      .product-image{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img{
        height: 4rem;
        width: 4rem;
      }

      .product-title h3{
        color: hsl(0, 0%, 100%);
        font-family: "Open Sans", sans-serif;
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0;
        text-align: center;
      }

      .product-description p, .product-date span{
        color: hsl(0, 0%, 100%);
        font-family: "Open Sans", sans-serif;
        font-size: 0.9rem;
        font-style: italic;
        margin: 0;
        text-align: center;
      }

      @media (hover: hover) {
        .product:hover{
          cursor: pointer;
        }

        .product:has(.product-details:hover) {
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
        }
      }
    </style>

    <section class="product-gallery">
      
    </section>
    `
    const productsGallery = this.shadow.querySelector('.product-gallery')

    products.forEach(product => {
      const productContainer = document.createElement('div')
      productContainer.classList.add('product')
      productContainer.classList.add(product.size)
      productsGallery.appendChild(productContainer)
      productContainer.dataset.category = product.category
      productContainer.style.backgroundColor = product.color

      const button = document.createElement('add-button-component')
      button.classList.add('add-button-container')
      productContainer.appendChild(button)

      const linkButtonProduct = document.createElement('a')
      linkButtonProduct.setAttribute('href', product.buttonLinkProduct)
      productContainer.appendChild(linkButtonProduct)

      const productDetails = document.createElement('div')
      productDetails.classList.add('product-details')
      linkButtonProduct.appendChild(productDetails)

      const productImage = document.createElement('div')
      productImage.classList.add('product-image')
      productDetails.appendChild(productImage)

      const picture = document.createElement('picture')
      productImage.appendChild(picture)

      const sourceLg = document.createElement('source')
      sourceLg.setAttribute('srcset', product.images.lg.src)
      sourceLg.setAttribute('type', 'image/webp')
      sourceLg.setAttribute('media', '(min-width: 1921px)')
      picture.appendChild(sourceLg)

      const sourceMd = document.createElement('source')
      sourceMd.setAttribute('srcset', product.images.md.src)
      sourceMd.setAttribute('type', 'image/webp')
      sourceMd.setAttribute('media', '(min-width: 1025px')
      picture.appendChild(sourceMd)

      const sourceSm = document.createElement('source')
      sourceSm.setAttribute('srcset', product.images.sm.src)
      sourceSm.setAttribute('type', 'image/webp')
      sourceSm.setAttribute('media', '(min-width: 601px)')
      picture.appendChild(sourceSm)

      const sourceXs = document.createElement('source')
      sourceXs.setAttribute('srcset', product.images.xs.src)
      sourceXs.setAttribute('type', 'image/webp')
      sourceXs.setAttribute('media', '(max-width: 600px)')
      picture.appendChild(sourceXs)

      const img = document.createElement('img')
      img.setAttribute('src', product.images.lg.src)
      img.setAttribute('alt', product.images.lg.alt)
      img.setAttribute('title', product.images.lg.title)
      picture.appendChild(img)

      const productTitle = document.createElement('div')
      productTitle.classList.add('product-title')
      productDetails.appendChild(productTitle)

      const titleContent = document.createElement('h3')
      titleContent.textContent = product.title
      productTitle.appendChild(titleContent)

      const productDescription = document.createElement('div')
      productDescription.classList.add('product-description')
      productDetails.appendChild(productDescription)

      const descriptionContent = document.createElement('p')
      descriptionContent.textContent = product.description
      productDescription.appendChild(descriptionContent)

      const productDate = document.createElement('div')
      productDate.classList.add('product-description')
      productDetails.appendChild(productDate)

      const dateContent = document.createElement('span')
      productDate.classList.add('product-date')
      dateContent.textContent = product.schedule
      productDate.appendChild(dateContent)
    })
  }
}

customElements.define('product-gallery-component', ProductGallery)
