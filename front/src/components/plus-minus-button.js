import { store } from '../redux/store.js'
import { addProduct } from '../redux/cart-slice.js'

class PlusMinusButton extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.productId = this.getAttribute('product-id')
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .plus-minus-button{
            height: 1.5rem;
          }

          .plus-minus-button input{
            border: none;
            outline: none;
            height: 100%;
            width: 25px;
          }

          .plus-minus-button-reduce{
            background-color: hsl(0, 73%, 58%);
            border: none;
            width: 25px;
            cursor: pointer;
          }
          
          .plus-minus-button-reduce button{
            border-radius: 1rem;
          }

          .plus-minus-button-add{
            background-color: hsl(120, 80%, 32%);
            border: none;
            width: 25px;
            cursor: pointer;
          }

          .plus-minus-title-utton{
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

        <div class="plus-minus-button">
          <button class="plus-minus-button-reduce">-</button>
          <input class="plus-minus-button-input" type="number" value="1">
          <button class="plus-minus-button-add">+</button>
        </div>
      `

    const plusMinusButton = this.shadow.querySelector('.plus-minus-button')
    const quantity = this.shadow.querySelector('.plus-minus-button-input')

    plusMinusButton.addEventListener('click', event => {
      if (event.target.closest('.plus-minus-button-reduce')) {
        const currentValue = parseInt(quantity.value)

        if (currentValue > 0) {
          quantity.value = currentValue - 1

          store.dispatch(addProduct({
            id: this.productId,
            quantity: parseInt(quantity.value)
          }))
        }
      }

      if (event.target.closest('.plus-minus-button-add')) {
        const currentValue = parseInt(quantity.value)
        quantity.value = currentValue + 1

        store.dispatch(addProduct({
          id: this.productId,
          quantity: parseInt(quantity.value)
        }))
      }
    })
  }
}

customElements.define('plus-minus-component', PlusMinusButton)
