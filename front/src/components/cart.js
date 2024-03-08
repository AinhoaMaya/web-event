class Cart extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.products = []
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch('/src/data/cart.json')
    this.data = await response.json()
  }

  render (products = this.data) {
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
            margin: 0;
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
            background-color: hsl(0, 0%, 100%);
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
          }

          .cart-products-button-remove button{
            border: none;
            width: 25px;
            cursor: pointer;
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

          .cart-form{
            background-color: hsl(0, 0%, 90%);
            height: 50%;
          }

          .cart-form input{
            width: 90%;
          }

          .form-group, .form-button{
            padding: 1rem 0 0 1rem;
          }

          .form-checkbox{
            padding: 1rem 0 0 0.5rem;
          }
          
          .form-label{
            font-family: 'Poppins', sans-serif;
            color: hsl(0, 0%, 0%);
          }

          .form-checkbox{
            display: flex;
            gap: 0.5rem;
          }

          .form-button {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .form-button button{
            background-color: hsl(204, 59%, 51%);
            border: none;
            border-radius: 1rem;
            color: hsl(0, 0%, 100%);
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            padding: 0.5rem 5rem;
            transition: all 0.3s ease;
          }
        </style>

        <div class="button-cart">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-outline</title><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
            </svg>
          </button>
        </div>

        <div class="cart">
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
            <div class="cart-products">
              <div class="cart-products-block">
                <div class="cart-products-images">
                  <picture>
                    <img src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
                  </picture>
                </div>
                <div class="cart-products-title-button">
                  <div class="cart-products-title">
                    <h4>Taller de marionetas</h4>
                  </div>
                  <div class="cart-products-buttons">
                    <plus-minus-component></plus-minus-component>
                  </div>
                </div>
                <div class="cart-products-button-remove">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                  </button>
                </div>
            </div>
            
            <div class="cart-products-block">
              <div class="cart-products-images">
                <picture>
                  <img src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
                </picture>
              </div>
              <div class="cart-products-title-button">
                <div class="cart-products-title">
                  <h4>Taller de pintura para niños</h4>
                </div>
                <div class="cart-products-buttons">
                  <plus-minus-component></plus-minus-component>
                </div>
              </div>
              <div class="cart-products-button-remove">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="cart-products-block">
              <div class="cart-products-images">
                <picture>
                  <img src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
                </picture>
              </div>
              <div class="cart-products-title-button">
                <div class="cart-products-title">
                  <h4>Charla sobre la importancia de la lectura en la infancia</h4>
                </div>
                <div class="cart-products-buttons">
                  <plus-minus-component></plus-minus-component>
                </div>
              </div>
              <div class="cart-products-button-remove">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="cart-products-block">
              <div class="cart-products-images">
                <picture>
                  <img src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
                </picture>
              </div>
              <div class="cart-products-title-button">
                <div class="cart-products-title">
                  <h4>Lorem ipsum dolor sit amet</h4>
                </div>
                <div class="cart-products-buttons">
                  <plus-minus-component></plus-minus-component>
                </div>
              </div>
              <div class="cart-products-button-remove">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
                </button>
              </div>
            </div>

            <div class="cart-products-block">
              <div class="cart-products-images">
                <picture>
                  <img src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
                </picture>
              </div>
              <div class="cart-products-title-button">
                <div class="cart-products-title">
                  <h4>Lorem ipsum dolor sit amet</h4>
                </div>
                <div class="cart-products-buttons">
                  <plus-minus-component></plus-minus-component>
                </div>
              </div>
              <div class="cart-products-button-remove">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
                </button>
              </div>
            </div>

            <div class="cart-products-block">
              <div class="cart-products-images">
                <picture>
                  <img src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
                </picture>
              </div>
              <div class="cart-products-title-button">
                <div class="cart-products-title">
                  <h4>Lorem ipsum dolor sit amet</h4>
                </div>
                <div class="cart-products-buttons">
                  <plus-minus-component></plus-minus-component>
                </div>
              </div>
              <div class="cart-products-button-remove">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
                </button>
              </div>
            </div>

            <div class="cart-products-block">
              <div class="cart-products-images">
                <picture>
                  <img src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
                </picture>
              </div>
              <div class="cart-products-title-button">
                <div class="cart-products-title">
                  <h4>Lorem ipsum dolor sit amet</h4>
                </div>
                <div class="cart-products-buttons">
                  <plus-minus-component></plus-minus-component>
                </div>
              </div>
              <div class="cart-products-button-remove">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
                </button>
              </div>
            </div>
          </div>


            <form class="cart-form">
              <div class="form-group">
                <div class="form-label">
                  <label>Nombre</label>
                </div>
                <div class="form-input">
                  <input type="text" id="name" name="name" required>
                </div>
              </div>

              <div class="form-group">
                <div class="form-label">
                  <label>Apellidos</label>
                </div>
                <div class="form-input">
                  <input type="text" id="lastname" name="surname" required>
                </div>
              </div>

              <div class="form-group">
                <div class="form-label">
                  <label>Email</label>
                </div>
                <div class="form-input">
                  <input type="email" id="email" name="email" required>
                </div>
              </div>

              <div class="form-checkbox">
                <div class="form-input">
                  <input type="checkbox" id="info" name="info">
                </div>
                <div class="form-label">
                  <p>Quiero recibir información sobre futuros enventos</p>
                </div>
              </div>

              <div class="form-button">
                <button class="send-button">Reserva tu plaza</button>
              </div>
            </form>
          </div> 
        </div>
      `

    const cartProducts = this.shadow.querySelector('.cart-body')

    cartProducts.forEach(cart => {
      const cartProduct = document.createElement('div')
      cartProduct.classList.add('cart-products')
      cartProducts.appendChild(cartProduct)

      const cartProductBlock = document.createElement('div')
      cartProductBlock.classList.add('cart-products-block')
      cartProducts.appendChild(cartProductBlock)

      const cartProductImages = document.createElement('div')
      cartProductImages.classList.add('cart-products-images')
      cartProductBlock.appendChild(cartProductImages)

      const productDetails = document.createElement('div')
      productDetails.classList.add('product-details')

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
      sourceMd.setAttribute('media', '(min-width: 1025px')
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
      cartProductsButtons.appendChild(plusMinusComponent)

      const cartButtonRemove = document.createElement('div')
      cartButtonRemove.classList.add('cart-products-button-remove')
      cartProductBlock.appendChild(cartButtonRemove)
    })

    const cartButton = this.shadow.querySelector('.button-cart')
    const cart = this.shadow.querySelector('.cart')
    const cartButtonRemove = this.shadow.querySelector('.cart-header-button-remove')
    const sendButton = this.shadow.querySelector('.send-button')

    cartButton.addEventListener('click', () => {
      cart.classList.add('active')
    })

    cartButtonRemove.addEventListener('click', () => {
      cart.classList.remove('active')
    })

    sendButton.addEventListener('click', () => {
      this.sendForm()
    })
  }

  async sendForm () {
    const form = this.shadow.querySelector('form.cart-form')
    const formData = new FormData(form)
    const formDataJson = Object.fromEntries(formData.entries())

    console.log(formDataJson)

    const response = await fetch('https://localhost:3000/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataJson)
    })

    console.log(response)
  }
}

customElements.define('cart-component', Cart)
