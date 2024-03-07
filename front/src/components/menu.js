class Menu extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch('/src/data/menu.json')
    this.data = await response.json()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .menu{
            width: 100%;
          }

          .menu ul{
            display: flex;
            gap: 2rem;
            margin: 0;
            padding: 0;
            width: 100%;
          }

          .menu li{
            list-style: none;
          }

          .menu li a{
            color: hsl(0 0% 100%);
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            text-decoration: none;
            text-transform: capitalize;
          }
        </style>
        
        <nav class="menu"></nav>
      `

    const menuContainer = this.shadow.querySelector('.menu')
    const ul = document.createElement('ul')
    menuContainer.appendChild(ul)

    this.data.forEach(element => {
      const li = document.createElement('li')
      ul.appendChild(li)

      const link = document.createElement('a')
      link.setAttribute('href', element.link)
      link.textContent = element.title
      li.appendChild(link)
    })
  }
}

customElements.define('menu-component', Menu)
