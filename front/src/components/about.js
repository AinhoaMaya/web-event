class About extends HTMLElement {
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
    this.data = {
      images: {
        alt: 'son-sampol',
        title: 'finca son sampol',
        xs: {
          src: './public/about-mobile.webp'
        },
        sm: {
          src: './public/about-mobile.webp'
        },
        md: {
          src: './public/about.webp'
        },
        lg: {
          src: './public/about.webp'
        }
      },
      title: 'Sobre nosotros',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quia dolorem iste natus sit maiores nostrum repudiandae mollitia eaque rem, quas praesentium perferendis? Ad dolore voluptatum dolor optio saepe repudiandae velit, sint quasi, eligendi magnam vel officiis ipsam cumque perspiciatis alias ratione voluptate delectus perferendis! Ratione dolorem dolor nemo minima eum mollitia adipisci? Similique explicabo nobis vitae provident tenetur neque repellendus error rem repudiandae eum sequi obcaecati aliquam harum omnis debitis commodi ducimus dolorum amet corrupti illo, veritatis, quod nulla. Dolorum, ducimus a error minima odit libero et. Aperiam fuga in, odio voluptates ipsam rem explicabo inventore optio vitae tenetur esse cumque dolores laborum assumenda enim, accusantium alias. Amet, nisi molestias saepe incidunt error possimus repellendus vel nemo eligendi numquam voluptas expedita iste, soluta aspernatur sint quasi facilis voluptates quidem reiciendis temporibus cumque praesentium! Tempore, nobis minus quas sed atque at sint velit impedit perspiciatis, exercitationem quis amet adipisci praesentium!'
    }
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .about{
            overflow: hidden;
          }

          .about-image{
            padding: 7.5rem 5rem 0 5rem;
          }

          .about-image img{
            object-fit: cover;
            width: 100%;
            margin: 0;
          }
          
          .about-content{
            padding: 0 5rem;
            margin: 0;
            font-family: 'Poppins', sans-serif;
            text-align: justify;
          }
        </style>

        <div class="about">
          <div class="about-image">
            <picture>
              <source srcset="${this.data.images.lg.src}" type="image/webp" media="(min-width: 1200px)">
              <source srcset="${this.data.images.md.src}" type="image/webp" media="(min-width: 992px)">
              <source srcset="${this.data.images.sm.src}" type="image/webp" media="(max-width: 601px)">
              <source srcset="${this.data.images.xs.src}" type="image/webp" media="(max-width: 600px)">
              <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
            </picture>
          </div>
          <div class="about-content">
            <div class="about-title-about">
              <h1>${this.data.title}</h1>
            </div>
            <div class="about-text">
              <p>${this.data.description}</p>
            </div>
          </div>
        </div>
      `
  }
}

customElements.define('about-component', About)
