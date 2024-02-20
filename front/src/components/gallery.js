class Gallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.columns = this.getAttribute('columns') || 3
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .row{
            display: grid;
            gap: 2rem;
            grid-template-columns: repeat(${this.columns}, 1fr);
          }
          .row-gallery-image {
            width: 100%;
            height: auto;
            object-fit: cover;
          }

          .row-gallery{
            position: relative;
          }

          .row-gallery-content{
            position: absolute;
            color: hsl(0, 0%, 100%);
            background-color: hsla(0, 0%, 0%, 0.5);
            padding: 0 1rem;
          }

          .row-gallery-text{
            display: flex;
          }

          .row-gallery-text-svg{
            width: 2.5rem;
            height: 2.5rem;
            fill: hsl(0, 0%, 100%);
          }

          a{
            cursor: pointer;
          }

          a:hover{
            opacity: 0.5;
          }
        </style>
        <div class="row">
          <div class="row-gallery">
            <div class="row-gallery-content">
              <div class="row-gallery-title">
                <h1>Fotografía</h1>
              </div>
              <div class="row-gallery-text">
                <div class="row-gallery-text-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clock-check-outline</title><path d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M13.1 19.9C12.7 20 12.4 20 12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12C20 12.4 20 12.7 19.9 13.1C20.6 13.2 21.2 13.4 21.8 13.7C21.9 13.1 22 12.6 22 12C22 6.5 17.5 2 12 2S2 6.5 2 12C2 17.5 6.5 22 12 22C12.6 22 13.2 21.9 13.7 21.8C13.4 21.3 13.2 20.6 13.1 19.9M15.6 14.1L12.5 12.3V7H11V13L14.5 15.1C14.8 14.7 15.2 14.4 15.6 14.1Z" /></svg>
                </div>
                <div class="row-gallery-time">
                  <h2>10:30h</h2>
                </div>
              </div>
            </div>
            <picture>
              <a href="">
                <img class="row-gallery-image" src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
              </a>
            </picture>
          </div>

          <div class="row-gallery">
            <div class="row-gallery-content">
              <div class="row-gallery-title">
                <h1>Pintura</h1>
              </div>
              <div class="row-gallery-text">
                <div class="row-gallery-text-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clock-check-outline</title><path d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M13.1 19.9C12.7 20 12.4 20 12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12C20 12.4 20 12.7 19.9 13.1C20.6 13.2 21.2 13.4 21.8 13.7C21.9 13.1 22 12.6 22 12C22 6.5 17.5 2 12 2S2 6.5 2 12C2 17.5 6.5 22 12 22C12.6 22 13.2 21.9 13.7 21.8C13.4 21.3 13.2 20.6 13.1 19.9M15.6 14.1L12.5 12.3V7H11V13L14.5 15.1C14.8 14.7 15.2 14.4 15.6 14.1Z" /></svg>
                </div>
                <div class="row-gallery-text-time">
                  <h2>11:30h</h2>
                </div>
              </div>
            </div>
            <picture>
              <a href="">
                <img class="row-gallery-image" src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
              </a>
            </picture>
          </div>

          <div class="row-gallery">
            <div class="row-gallery-content">
              <div class="row-gallery-title">
                <h1>Collage</h1>
              </div>
              <div class="row-gallery-text">
                <div class="row-gallery-text-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clock-check-outline</title><path d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M13.1 19.9C12.7 20 12.4 20 12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12C20 12.4 20 12.7 19.9 13.1C20.6 13.2 21.2 13.4 21.8 13.7C21.9 13.1 22 12.6 22 12C22 6.5 17.5 2 12 2S2 6.5 2 12C2 17.5 6.5 22 12 22C12.6 22 13.2 21.9 13.7 21.8C13.4 21.3 13.2 20.6 13.1 19.9M15.6 14.1L12.5 12.3V7H11V13L14.5 15.1C14.8 14.7 15.2 14.4 15.6 14.1Z" /></svg>
                </div>
                <div class="row-gallery-text-time">
                  <h2>12:30h</h2>
                </div>
              </div>
            </div>
            <picture>
              <a href="">
                <img class="row-gallery-image" src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
              </a>
            </picture>
          </div>
        </div>
      `
  }
}

customElements.define('product-gallery-component', Gallery)
