class CategoryFilter extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.columns = this.getAttribute('columns') || 6
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          button{
            background-color: hsl(204, 59%, 51%);
            border: none;
            cursor: pointer;
            border-radius: 2rem;
            color: hsl(0, 0%, 100%);
            padding: 0.5rem 2rem;
            font-family: 'Poppins', sans-serif;
          }

          .category-filters{
            display: flex;
            justify-content: center;
            gap: 2rem;
            padding: 0 0 2rem;
          }

          h1{
            display: flex;
            justify-content: center;
            font-family: 'Poppins', sans-serif;
          }
        </style>
        <h1>¡Apúntate a nuestros talleres!</h1>
        <div class="category-filters">
          <div class="category-filter">
            <button>Niños</button>
          </div>
          <div class="category-filter">
            <button>Jóvenes</button>
          </div>
          <div class="category-filter">
            <button>Adultos</button>
          </div>
        </div>
      `
  }
}

customElements.define('category-filter-component', CategoryFilter)
