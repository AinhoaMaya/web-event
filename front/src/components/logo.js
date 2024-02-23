class Logo extends HTMLElement {
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
          .logo svg{
            fill: hsl(300, 98%, 43%);
            height: 3rem;
            width: 3rem;
            display: flex;
          }

          @media (min-width: 601px) {
            .logo svg{
              height: 5rem;
              width: 5rem;
            }
          }

          @media (min-width: 601px) and (orientation: landscape) {
            .logo svg{
              height: 2.5rem;
              width: 2.5rem;
            }
          }

          @media (min-width: 1025px) and (max-width: 1920px) {
            .logo svg{
              height: 5rem;
              width: 5rem;
            }
          }

          @media (min-width: 1921px) {

          }
        </style>

        <div class="logo">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>adjust</title>
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12Z" />
            </svg>
          </a>
        </div>
      `
  }
}

customElements.define('logo-component', Logo)
