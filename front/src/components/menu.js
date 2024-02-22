class Menu extends HTMLElement {
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
        <nav class="menu">
          <ul>
            <li><a href="/horarios">horarios</a></li>
            <li><a href="/quienes-somos">quienes somos</a></li>
          </ul>
        </nav>
      `
  }
}

customElements.define('menu-component', Menu)
