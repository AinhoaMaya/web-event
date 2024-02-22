class Cart extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
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


          .cart{
            width: 400px;
            height: 100vh;
            min-height: 100vh;
            right: 0;
            top: 0;
            position: fixed;
            z-index: 1000;
          }

          .cart-header{
            background-color: hsl(240, 100%, 23%);
            display: flex;
            height: 10%;
            padding: 1rem;
          }

          .cart-header-button button{
            border: none;
            background-color: transparent;
            cursor: pointer;
          }

          .cart-header-button svg{
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
            height: 50%;
            padding: 1rem;
          }

          .cart-products-block{
            display: flex;
            align-items: center;
          }

          .cart-products-images{
            width: 70px;
          }

          .cart-products-images img{
            object-fit: cover;
            width: 100%;
          }

          .cart-products-buttons-remove {
            background-color: hsl(0, 73%, 58%);
            border: none;
            width: 25px;
            cursor: pointer;
          }

          .cart-products-buttons-add {
            background-color: hsl(120, 80%, 32%);
            border: none;
            width: 25px;
            cursor: pointer;
          }

          .cart-products-title, .cart-products-buttons {
            padding: 0 0.5rem;
          }

          .cart-form{
            background-color: hsl(0, 0%, 90%);
            height: 50%;
          }

          .cart-form input{
            width: 90%;
          }

          .form-group, .form-checkbox, .form-button{
            padding: 1rem 0 0 1rem;;
          }
          
          .form-label{
            font-family: 'Poppins', sans-serif;
            color: hsl(0, 0%, 0%);
          }

          .form-checkbox{
            display: flex;
            gap: 2rem;
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

        <div class="cart">
          <div class="cart-header">
            <div class="cart-header-text">
              <h2>Tu horario para el evento</h2>
              <h5>Dinos cuantas personas quieres apuntar a cada actividad</h5>
            </div>
            <div class="cart-header-button">
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
                <div>
                  <div class="cart-products-title">
                    <h4>Taller de marionetas</h4>
                  </div>
                  <div class="cart-products-buttons">
                    <button class="cart-products-buttons-remove">-</button>
                    <button class="cart-products-buttons-add">+</button>
                  </div>
                </div>
              </div>

              <div class="cart-products-block">
                <div class="cart-products-images">
                  <picture>
                    <img src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
                  </picture>
                </div>
                <div>
                  <div class="cart-products-title">
                    <h4>Taller de marionetas</h4>
                  </div>
                  <div class="cart-products-buttons">
                    <button class="cart-products-buttons-remove">-</button>
                    <button class="cart-products-buttons-add">+</button>
                  </div>
                </div>
              </div>
            </div>


            <div class="cart-form">
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
                <button>Reserva tu plaza</button>
              </div>
            </div>
          </div> 
        </div>
      `
  }
}

customElements.define('cart-component', Cart)
