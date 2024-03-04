class Hero extends HTMLElement {
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
      title: 'Encuentro Mosaico',
      description: 'Un espacio para compartir, aprender y disfrutar',
      buttonText: 'Ver horarios',
      buttonLink: 'schedule.html',
      images: {
        alt: 'son-sampol',
        title: 'finca son sampol',
        xs: {
          src: './public/son-sampol-mobile.webp'
        },
        sm: {
          src: './public/son-sampol-mobile.webp'
        },
        md: {
          src: './public/son-sampol.webp'
        },
        lg: {
          src: './public/son-sampol.webp'
        }
      }
    }
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .hero{
            min-height: 100vh;
            overflow: hidden;
            position: relative;
            width: 100%;
          }

          .hero-image{
            height: 100%;
            position: absolute;
            width: 100%;
            z-index: 1000;
          }

          .hero-image img{
            height: 100%;
            object-fit: cover;
            width: 100%;
          }

          .hero-content{
            align-items: center;
            background-color: hsla(0, 0%, 0%, 0.5);
            display: flex;
            flex-direction: column;
            gap: 2rem;
            height: 100%;
            justify-content: center;
            position: absolute;
            width: 100%;
            z-index: 1001;
          }

          .hero-title h1{
            color: hsl(0, 0%, 100%);
            font-family: 'Poppins', sans-serif;
            font-size: 4rem;
            font-weight: 600;
            line-height: 1.2;
            margin: 0;
            text-align: center;
            text-transform: capitalize;
          }

          .hero-description p{
            color: hsl(0, 0%, 100%);
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            font-weight: 400;
            margin: 0;
            text-align: center;
          }

          .hero-button button{
            background-color: hsl(204, 59%, 51%);
            border: none;
            border-radius: 1rem;
            color: hsl(0, 0%, 100%);
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            font-weight: 600;
            padding: 1rem 2rem;
            transition: all 0.3s ease;
          }

          @media (hover: hover) {
            .hero-button button:hover{
              background-color: hsl(204, 59%, 61%);
            }
          }

          @media (min-width: 601px) {
            .hero-title h1{
              font-size: 4rem;
              line-height: 1;
            }

            .hero-description p{
              font-size: 1.5rem;
            }
          }

          @media (min-width: 601px) and (orientation: landscape) {
            .hero-title h1{
              font-size: 5rem;
              line-height: 1;
            }

            .hero-description p{
              font-size: 2rem;
            }
          }

          @media (min-width: 1025px) and (max-width: 1920px) {
            .hero-content{
              gap: 3rem;
            }

            .hero-title h1{
              font-size: 7rem;
              line-height: 1;
            }

            .hero-description p{
              font-size: 3rem;
            }
          }

          @media (min-width: 1921px) {

          }
      </style>

        <div class="hero">
          <div class="hero-image">
            <picture>
              <source srcset="${this.data.images.lg.src}" type="image/webp" media="(min-width: 1200px)">
              <source srcset="${this.data.images.md.src}" type="image/webp" media="(min-width: 992px)">
              <source srcset="${this.data.images.sm.src}" type="image/webp" media="(max-width: 601px)">
              <source srcset="${this.data.images.xs.src}" type="image/webp" media="(max-width: 600px)">
              <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
            </picture>
          </div>
          <div class="hero-content">
            <div class="hero-title">
              <h1>${this.data.title}</h1>
            </div>
            <div class="hero-description">
              <p>${this.data.description}</p>
            </div>
            <div class="hero-button">
              <a href="${this.data.buttonLink}">
                <button>${this.data.buttonText}</button>
              </a>
            </div>
          </div>
        </div>
      `

    // const hero = this.shadow.querySelector('.hero')
    // const heroImage = document.createElement('div')
    // heroImage.classList.add('hero-image')
    // hero.appendChild(heroImage)

    // const picture = document.createElement('picture')
    // heroImage.appendChild(picture)

    // const sourceLg = document.createElement('source')
    // sourceLg.setAttribute('srcset', this.data.images.lg.src)
    // sourceLg.setAttribute('type', 'image/webp')
    // sourceLg.setAttribute('media', '(min-width: 1921px)')
    // picture.appendChild(sourceLg)

    // const sourceMd = document.createElement('source')
    // sourceMd.setAttribute('srcset', this.data.images.md.src)
    // sourceMd.setAttribute('type', 'image/webp')
    // sourceMd.setAttribute('media', '(min-width: 1025px')
    // picture.appendChild(sourceMd)

    // const sourceSm = document.createElement('source')
    // sourceSm.setAttribute('srcset', this.data.images.sm.src)
    // sourceSm.setAttribute('type', 'image/webp')
    // sourceSm.setAttribute('media', '(min-width: 601px)')
    // picture.appendChild(sourceSm)

    // const sourceXs = document.createElement('source')
    // sourceXs.setAttribute('srcset', this.data.images.xs.src)
    // sourceXs.setAttribute('type', 'image/webp')
    // sourceXs.setAttribute('media', '(max-width: 600px)')
    // picture.appendChild(sourceXs)

    // const img = document.createElement('img')
    // img.setAttribute('src', this.data.images.lg.src)
    // img.setAttribute('alt', this.data.images.lg.alt)
    // img.setAttribute('title', this.data.images.lg.title)
    // picture.appendChild(img)

    // const heroContent = document.createElement('div')
    // heroContent.classList.add('hero-content')
    // hero.appendChild(heroContent)

    // const heroTitle = document.createElement('div')
    // heroTitle.classList.add('hero-title')
    // heroContent.appendChild(heroTitle)

    // const title = document.createElement('h1')
    // title.textContent = this.data.title
    // heroTitle.appendChild(title)

    // const heroDescription = document.createElement('div')
    // heroDescription.classList.add('hero-description')
    // heroContent.appendChild(heroDescription)

    // const p = document.createElement('p')
    // p.textContent = this.data.description
    // heroDescription.appendChild(p)

    // const heroButton = document.createElement('div')
    // heroButton.classList.add('hero-button')
    // heroContent.appendChild(heroButton)

    // const linkButton = document.createElement('a')
    // linkButton.setAttribute('href', this.data.buttonLink)
    // heroButton.appendChild(linkButton)

    // const button = document.createElement('button')
    // button.textContent = this.data.buttonText
    // linkButton.appendChild(button)
  }
}

customElements.define('hero-component', Hero)
