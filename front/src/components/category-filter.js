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
          <div class="category-filter" data-category="todos">
            <button>Todos</button>
          </div>
          <div class="category-filter" data-category="familias">
            <button>Familias</button>
          </div>
          <div class="category-filter" data-category="niños">
            <button>Niños</button>
          </div>
          <div class="category-filter" data-category="adultos">
            <button>Adultos</button>
          </div>
        </div>
      `
    const categoryFilters = this.shadow.querySelectorAll('.category-filter')

    categoryFilters.forEach(categoryFilter => {
      categoryFilter.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('filter-gallery', {
          detail: {
            category: categoryFilter.dataset.category
          }
        }))
      })
    })
  }
}

customElements.define('category-filter-component', CategoryFilter)
