import { store } from '../redux/store.js'
import { addProduct, removeProduct } from '../redux/cart-slice.js'

class Cart extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
    this.unsubscribe = null
  }

  async connectedCallback () {
    this.unsubscribe = store.subscribe(() => {
      const currentState = store.getState()

      if (currentState.cart.cartProducts.length > this.data.length) {
        currentState.cart.cartProducts.forEach(async product => {
          const cartProduct = this.data.some(cartProduct => cartProduct.id === product.id)

          if (!cartProduct) {
            await this.addProduct(product.id)
          }
        })
      }

      if (currentState.cart.cartProducts.length < this.data.length) {
        this.data.forEach(async product => {
          const cartProduct = currentState.cart.cartProducts.some(cartProduct => cartProduct.id === product.id)

          if (!cartProduct) {
            this.data = this.data.filter(cartProduct => cartProduct.id !== product.id)

            if (this.shadow.querySelector('.cart').classList.contains('active')) {
              this.render('active')
            } else {
              this.render()
            }
          }
        })
      }
    })

    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch('/src/data/cart.json')
    this.data = await response.json()
  }

  render (state = null) {
    this.shadow.innerHTML =
      /* html */`
        <style>
          h2{
            color: hsl(0, 0%, 100%);
            font-family: 'Poppins', sans-serif;
            margin: 0;
          }

          h4{
            color: hsl(0, 0%, 0%);
            font-family: 'Poppins', sans-serif;
            line-height: 1;
            margin: 0;
            padding-bottom: 0.5rem;
          }

          h5{
            color: hsl(0, 0%, 100%);
            font-family: 'Poppins', sans-serif;
            margin-top: 1rem;
          }

          p{
            color: hsl(0, 0%, 0%);
            font-family: 'Poppins', sans-serif;
            margin: 0;
            font-size: 14px;
          }

          .button-cart button{
            height: 3rem;
            width: 3rem;
            cursor: pointer;
            border: none;
            border-radius: 1rem;
          }

          .cart{
            background-color: hsl(0, 0%, 100%);
            width: 400px;
            height: 100vh;
            min-height: 100vh;
            right: -400px;
            top: 0;
            position: fixed;
            z-index: 1000;
            transition: all 0.4s;
          }

          .cart.active{
            right: 0;
          }

          .cart-header{
            background-color: hsl(240, 100%, 23%);
            display: flex;
            height: 10%;
            padding: 1rem;
          }

          .cart-header-button-remove{
            transition: all 0.4s;
          }

          .cart-header-button-remove button{
            border: none;
            background-color: transparent;
            cursor: pointer;
          }

          .cart-header-button-remove svg{
            width: 1.5rem;
            height: 1.5rem;
            fill: hsl(0, 0%, 100%);
          }

          .cart-body{
            height: 90%;
          }

          .cart-products{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            height: 50%;
            max-height: 50%;
            overflow-y: scroll;
          }

          .cart-products::-webkit-scrollbar{
            width: 10px;
          }

          .cart-products::-webkit-scrollbar-thumb {
            background-color: hsl(276, 75%, 42%);
          }

          .cart-products-block{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid hsl(0, 6%, 73%);
            padding-bottom: 0.7rem;
          }

          .cart-products-images{
            width: 70px;
            min-width: 70px;
          }

          .cart-products-images img{
            object-fit: cover;
            width: 100%;
          }

          .cart-products-button-remove{
            display: flex;
            align-items: center;
            cursor: pointer;
          }

          .cart-products-button-remove button{
            border: none;
            width: 25px;
            background: none;
          }

          .cart-products-button-remove svg{
            width: 1.5rem;
            height: 1.5rem;
            fill: hsl(0, 0%, 0%);
          }

          .cart-products-title, .cart-products-buttons{
            padding: 0 0.5rem;
          }

          .cart-products-title-button{
            padding: 0 0.5rem;
            flex-grow: 3;
          }

          .checkout-text-div{
            color: hsl(0, 0%, 0%);
          }

          .checkout-text{
            display: flex;
            justify-content: center;
            margin: 5rem 0 1rem 0;
            font-weight: bold
          }

          .checkout-svg{
            display: flex;
            justify-content: center;
          }

          .checkout-svg svg{
            display: flex;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            fill: hsl(0, 0%, 0%);
          }
        </style>

        <div class="button-cart">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-outline</title>
              <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
            </svg>
          </button>
        </div>

        <div class="cart ${state}">
          <div class="cart-header">
            <div class="cart-header-text">
              <h2>Tu horario para el evento</h2>
              <h5>Dinos cuantas personas quieres apuntar a cada actividad</h5>
            </div>
            <div class="cart-header-button-remove">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </button>
            </div>
          </div>


          <div class="cart-body">
            <div class="cart-products"></div>
          </div>
        </div> 
      `

    if (this.data.length === 0) {
      const cartProducts = document.createElement('div')
      cartProducts.classList.add('checkout-text-div')

      const checkoutText = document.createElement('p')
      checkoutText.classList.add('checkout-text')
      cartProducts.appendChild(checkoutText)
      this.shadow.querySelector('.cart-products').appendChild(cartProducts)

      const noProducts = document.createElement('div')
      noProducts.classList.add('checkout-svg')
      cartProducts.appendChild(noProducts)
      noProducts.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>emoticon-sad-outline</title><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" /></svg>'
      checkoutText.textContent = '¡No te has apuntado a ninguna actividad!'
    }

    if (this.data.length > 0) {
      const checkoutComponent = document.createElement('checkout-component')
      const cartBody = this.shadow.querySelector('.cart-body')
      cartBody.appendChild(checkoutComponent)
    }

    const cartProducts = this.shadow.querySelector('.cart-products')

    this.data.forEach(cart => {
      const cartProductBlock = document.createElement('div')
      cartProductBlock.classList.add('cart-products-block')
      cartProducts.appendChild(cartProductBlock)

      const cartProductImages = document.createElement('div')
      cartProductImages.classList.add('cart-products-images')
      cartProductBlock.appendChild(cartProductImages)

      const productDetails = document.createElement('div')
      productDetails.classList.add('product-details')
      cartProductImages.appendChild(productDetails)

      const productImage = document.createElement('div')
      productImage.classList.add('product-image')
      productDetails.appendChild(productImage)

      const picture = document.createElement('picture')
      productImage.appendChild(picture)

      const sourceLg = document.createElement('source')
      sourceLg.setAttribute('srcset', cart.images.lg.src)
      sourceLg.setAttribute('type', 'image/webp')
      sourceLg.setAttribute('media', '(min-width: 1921px)')
      picture.appendChild(sourceLg)

      const sourceMd = document.createElement('source')
      sourceMd.setAttribute('srcset', cart.images.md.src)
      sourceMd.setAttribute('type', 'image/webp')
      sourceMd.setAttribute('media', '(min-width: 1025px)')
      picture.appendChild(sourceMd)

      const sourceSm = document.createElement('source')
      sourceSm.setAttribute('srcset', cart.images.sm.src)
      sourceSm.setAttribute('type', 'image/webp')
      sourceSm.setAttribute('media', '(min-width: 601px)')
      picture.appendChild(sourceSm)

      const sourceXs = document.createElement('source')
      sourceXs.setAttribute('srcset', cart.images.xs.src)
      sourceXs.setAttribute('type', 'image/webp')
      sourceXs.setAttribute('media', '(max-width: 600px)')
      picture.appendChild(sourceXs)

      const img = document.createElement('img')
      img.setAttribute('src', cart.images.lg.src)
      img.setAttribute('alt', cart.images.lg.alt)
      img.setAttribute('title', cart.images.lg.title)
      picture.appendChild(img)

      const cartTitleButton = document.createElement('div')
      cartTitleButton.classList.add('cart-products-title-button')
      cartProductBlock.appendChild(cartTitleButton)

      const cartTitle = document.createElement('div')
      cartTitle.classList.add('cart-products-title')
      cartTitleButton.appendChild(cartTitle)

      const cartTitleContent = document.createElement('h4')
      cartTitleContent.textContent = cart.title
      cartTitle.appendChild(cartTitleContent)

      const cartProductsButtons = document.createElement('div')
      cartProductsButtons.classList.add('cart-products-title')
      cartTitleButton.appendChild(cartProductsButtons)

      const plusMinusComponent = document.createElement('plus-minus-component')
      plusMinusComponent.setAttribute('product-id', cart.id)
      plusMinusComponent.setAttribute('quantity', cart.quantity)
      cartProductsButtons.appendChild(plusMinusComponent)

      const cartButtonRemove = document.createElement('div')
      cartButtonRemove.classList.add('cart-products-button-remove')
      cartProductBlock.appendChild(cartButtonRemove)
      cartButtonRemove.dataset.id = cart.id
      cartButtonRemove.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>'
    })

    const cartButton = this.shadow.querySelector('.button-cart')
    const cart = this.shadow.querySelector('.cart')

    cartButton.addEventListener('click', () => {
      cart.classList.add('active')
    })

    cart.addEventListener('click', event => {
      if (event.target.closest('.cart-header-button-remove')) {
        cart.classList.remove('active')
      }

      if (event.target.closest('.cart-products-button-remove')) {
        const productElement = event.target.closest('.cart-products-button-remove')
        const productId = productElement.dataset.id

        this.removeProduct(productId)
      }
    })
  }

  async addProduct (id) {
    const response = await fetch(`/src/data/products/${id}.json`)
    const product = await response.json()
    this.data.push(product)

    if (this.shadow.querySelector('.cart').classList.contains('active')) {
      this.render('active')
    } else {
      this.render()
    }
  }

  async removeProduct (id) {
    this.data = this.data.filter(product => product.id !== id)

    store.dispatch(removeProduct({ id }))

    if (this.shadow.querySelector('.cart').classList.contains('active')) {
      this.render('active')
    } else {
      this.render()
    }
  }
}

customElements.define('cart-component', Cart)
