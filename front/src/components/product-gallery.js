class ProductGallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.products = []
  }

  async connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
    /* html */`
    <style>

      a{
        height: 100%;
        text-decoration: none;
        width: 100%;
      }

      .product-gallery {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 300px;
        grid-auto-flow: row dense;
        grid-gap: 0.5rem;
        padding: 0.5rem;
      }

      .frame-1x1 {
        grid-column: span 1;
        grid-row: span 1;
      }

      .frame-2x2 {
        grid-column: span 2;
        grid-row: span 2;
      }

      .frame-1x2 {
        grid-column: span 1;
        grid-row: span 2;
      }

      .frame-2x1 {
        grid-column: span 2;
        grid-row: span 1;
      }

      .frame-3x1 {
        grid-column: span 3;
        grid-row: span 1;
      }

      .product {
        align-items: center;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        padding: 1rem;
        position: relative;
      }

      .add-button-container {
        position: absolute;
        right: 1rem;
        top: 1rem;
      }


      .product-details {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        height: 100%;
        justify-content: center;
      }

      .product-image{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .product-image svg {
        fill: hsl(0, 0%, 100%);
        height: 4rem;
        width: 4rem;
      }

      .product-title h3 {
        color: hsl(0, 0%, 100%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0;
        text-align: center;
      }

      .product-description p,
      .product-date span{
        color: hsl(0, 0%, 100%);
        font-family: 'Poppins', sans-serif;
        font-size: 0.9rem;
        font-style: italic;
        margin: 0;
        text-align: center;
      }

      @media (hover: hover) {
        .product:hover{
          cursor: pointer;
        }

        .product:has(.product-details:hover) {
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
        }
      }
    </style>

    <section class="product-gallery">
      <div class="product frame-1x1" style="background-color:hsl(9deg 100% 65%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-2x2" style="background-color:hsl(38deg 100% 50%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-1x2" style="background-color:hsl(209deg 100% 55%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-1x1" style="background-color:hsl(248deg 53% 57%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-2x1" style="background-color:hsl(146deg 50% 45%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-2x1" style="background-color:hsl(300deg 75% 70%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-3x1" style="background-color:hsl(9deg 100% 65%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-1x1" style="background-color:hsl(38deg 100% 50%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-2x2" style="background-color:hsl(38deg 100% 50%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-1x1" style="background-color:hsl(209deg 100% 55%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-1x1" style="background-color:hsl(146deg 50% 45%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-1x1" style="background-color:hsl(248deg 53% 57%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-2x1" style="background-color:hsl(300deg 75% 70%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
      <div class="product frame-1x1" style="background-color:hsl(9deg 100% 65%)">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chat</title><path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" /></svg>
            </div>
            <div class="product-title">
              <h3>Nuevas tecnologías y educación</h3>
            </div>
            <div class="product-description">
              <p>Charla con el grupo "Por una adolescencia libre de móvil"</p>
            </div>
            <div class="product-date">
              <span>10:00 - 11:00</span>
            </div>
          </div>
        </a>
      </div>
    </section>
    `
  }
}

customElements.define('product-gallery-component', ProductGallery)
