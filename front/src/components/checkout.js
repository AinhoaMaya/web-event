class Checkout extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .checkout{
            background-color: hsl(0, 0%, 90%);
            height: 50%;
            border-top: 1px solid hsl(0, 6%, 73%);
          }

          ul{
            padding-left: 1rem;
            color: red;
          }

          .checkout input{
            width: 90%;
          }

          .checkout input.validation-error{
            border: 1px solid red;
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
            align-items: center;
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

          .error-message{
            color: red;
            font-size: 0.8rem;
          }

          .error-message-remove{
            display: none;
          }
        </style>

      <section class="checkout">
        <form>
          <div class="form-group">
            <div class="form-label">
              <label>Nombre</label>
            </div>
            <div class="form-input">
              <input type="text" id="name" name="name" data-validate="onlyLetters" data-message="Sólo se admiten letras">
            </div>
          </div>

          <div class="form-group">
            <div class="form-label">
              <label>Apellidos</label>
            </div>
            <div class="form-input">
              <input type="text" id="lastname" name="surname" data-validate="onlyLetters" data-message="Sólo se admiten letras">
            </div>
          </div>

          <div class="form-group">
            <div class="form-label">
              <label>Email</label>
            </div>
            <div class="form-input">
              <input type="email" id="email" name="email" data-validate="email" data-message="Debe ser un email válido">
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
      </section>
    `

    const sendButton = this.shadow.querySelector('.send-button')

    sendButton.addEventListener('click', event => {
      event.preventDefault()
      this.sendForm()
    })
  }

  async sendForm () {
    const form = this.shadow.querySelector('form')

    if (!this.validateForm(form.elements)) {
      return
    }

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

  validateForm (elements) {
    let validForm = true

    const validators = {
      onlyLetters: /^[a-zA-Z\s]+$/g,
      onlyNumbers: /\d/g,
      telephone: /^\d{9}$/g,
      email: /\w+@\w+\.\w+/g,
      web: /^(http|https):\/\/\w+\.\w+/g,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
      date: /^\d{4}-\d{2}-\d{2}$/g,
      time: /^\d{2}:\d{2}$/g

    }

    for (const element of elements) {
      if (element.dataset.validate) {
        const validator = validators[element.dataset.validate]
        const valid = element.value.match(validator)

        if (valid === null) {
          element.classList.add('validation-error')
          const label = element.closest('.form-group').querySelector('.form-label')

          if (!label.querySelector('.error-message')) {
            const message = document.createElement('span')
            message.classList.add('error-message')
            message.textContent = element.dataset.message
            label.appendChild(message)
          }

          validForm = false
        } else {
          element.classList.remove('validation-error')
          const message = document.createElement('span')
          message.classList.add('error-message-remove')
        }
      }
    }
    return validForm
  }
}

customElements.define('checkout-component', Checkout)
