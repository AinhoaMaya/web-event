class PlusMinusButton extends HTMLElement {
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

          .cart-products-buttons{
            height: 1.5rem;
          }

          .cart-products-buttons input{
            border: none;
            outline: none;
            height: 100%;
            width: 25px;
          }

          .cart-products-buttons-reduce{
            background-color: hsl(0, 73%, 58%);
            border: none;
            width: 25px;
            height: 100%;
            cursor: pointer;
          }

          .cart-products-buttons-add{
            background-color: hsl(120, 80%, 32%);
            border: none;
            width: 25px;
            height: 100%;
            cursor: pointer;
          }

          .cart-products-title-button{
            padding: 0 0.5rem;
            flex-grow: 3;
          }
          
          /* Para eliminar las flechas del input */
          input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          /* Para centrar el número del input */
          input[type="number"] {
            text-align: center;
          }
        </style>

        <div class="cart-products-buttons">
          <button class="cart-products-buttons-reduce">-</button>
          <input type="number" value="1">
          <button class="cart-products-buttons-add">+</button>
        </div>
      `
  }
}

customElements.define('plus-minus-component', PlusMinusButton)
