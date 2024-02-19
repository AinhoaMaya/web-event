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
            padding: 1.5rem;
          }

          .menu ul{
            display: flex;
          }

          .menu li{
            list-style: none;
          }

          .menu li a{
            text-decoration: none;
            color: black;
            text-transform: capitalize;
            margin-right: 2rem;
          }

          .menu li a:visited{
            color: purple;
          }


          @media (hover: hover) {
            
          }

          @media (min-width: 601px) {

          }

          @media (min-width: 601px) and (orientation: landscape) {

          }

          @media (min-width: 1025px) and (max-width: 1920px) {

          }

          @media (min-width: 1920px) {

          }
        </style>

        <header>
          <div class="menu">
            <nav>
              <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Horario</a></li>
                <li><a href="#">Quiénes somos</a></li>
              </ul>
            </nav>
          </div>
        </header>
      `
  }
}

customElements.define('menu-component', Menu)
