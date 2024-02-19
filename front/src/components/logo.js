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
            width: 4rem;
            height: 4rem;
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
          <div class="logo">
            <a target="_blank" href="https://www.sonsampol.com/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>adjust</title>
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12Z" />
              </svg>
            </a>
          </div>
        </header>
      `
  }
}

customElements.define('logo-component', Logo)
