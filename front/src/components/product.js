class Product extends HTMLElement {
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
          h1, h2{
            line-height: 0;
            font-family: 'Poppins', sans-serif;
          }

          p{
            padding-top: 1rem;
            margin: 0;
          }

          .products{
            padding-top: 2.5rem;
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
        </style>

        <div class="products">
          <div class="products-activity">
            <div class="products-image">
              <picture>
                <img src="./public/product-puppets.webp" alt="son-sampol" title="finca son sampol">
              </picture>
            </div>
            <div class="products-info">
              <div class="products-title-schedule">
                <h1>Taller de marionetas | 10:30h</h1>
              </div>
              <div class="products-organizer">
                <h2>Lorem ipsum</h2>
              </div>
              <div class="products-description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos voluptate maxime, vitae, commodi amet at recusandae error saepe perspiciatis ducimus, fugiat doloremque temporibus accusamus ratione quisquam atque ipsam repudiandae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos voluptate maxime, vitae, commodi amet at recusandae error saepe perspiciatis ducimus, fugiat doloremque temporibus accusamus ratione quisquam atque ipsam repudiandae?</p><br>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos voluptate maxime, vitae, commodi amet at recusandae error saepe perspiciatis ducimus, fugiat doloremque temporibus accusamus ratione quisquam atque ipsam repudiandae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos voluptate maxime, vitae, commodi amet at recusandae error saepe perspiciatis ducimus, fugiat doloremque temporibus accusamus ratione quisquam atque ipsam repudiandae?</p>
              </div>
              <div class="products-button">
                <button>Reserva tu plaza</button>
              </div>
            </div>
          </div>
        </div>
      `
  }
}

customElements.define('product-component', Product)
