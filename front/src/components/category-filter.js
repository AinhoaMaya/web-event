class CategoryFilter extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.columns = this.getAttribute('columns') || 6
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    this.data = [
      {
        title: 'Todos'
      },
      {
        title: 'Familias'
      },
      {
        title: 'Adultos'
      },
      {
        title: 'Niños'
      }
    ]
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
            padding: 2rem 0;
          }

          .category-filter button{
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
          }
        </style>

        <div class="category-filters"></div>
      `

    const categoryFilters = this.shadow.querySelector('.category-filters')

    this.data.forEach(category => {
      const categoryFilter = document.createElement('div')
      categoryFilter.classList.add('category-filter')
      categoryFilter.dataset.category = category.title.toLowerCase()
      categoryFilters.appendChild(categoryFilter)

      const button = document.createElement('button')
      categoryFilter.appendChild(button)
      button.textContent = category.title
    })

    categoryFilters.addEventListener('click', event => {
      if (event.target.closest('.category-filter')) {
        const categoryFilter = event.target.closest('.category-filter')

        document.dispatchEvent(new CustomEvent('filter-gallery', {
          detail: {
            category: categoryFilter.dataset.category
          }
        }))
      }
    })
  }
}

customElements.define('category-filter-component', CategoryFilter)
