class IconList extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.orientation = this.getAttribute('orientation')
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    this.data = {
      iconsFB: {
        alt: 'icon-facebook',
        title: 'icon Facebook',
        xs: {
          src: './public/icon-fb.svg'
        },
        sm: {
          src: './public/icon-fb.svg'
        },
        md: {
          src: './public/icon-fb.svg'
        },
        lg: {
          src: './public/icon-fb.svg'
        }
      },

      iconsX: {
        alt: 'icon-x',
        title: 'icon X',
        xs: {
          src: './public/icon-x.svg'
        },
        sm: {
          src: './public/icon-x.svg'
        },
        md: {
          src: './public/icon-x.svg'
        },
        lg: {
          src: './public/icon-x.svg'
        }
      },

      iconsIG: {
        alt: 'icon-instagram',
        title: 'icon Instagram',
        xs: {
          src: './public/icon-ig.svg'
        },
        sm: {
          src: './public/icon-ig.svg'
        },
        md: {
          src: './public/icon-ig.svg'
        },
        lg: {
          src: './public/icon-ig.svg'
        }
      },

      iconsYT: {
        alt: 'icon-youtube',
        title: 'icon Youtube',
        xs: {
          src: './public/icon-yt.svg'
        },
        sm: {
          src: './public/icon-yt.svg'
        },
        md: {
          src: './public/icon-yt.svg'
        },
        lg: {
          src: './public/icon-yt.svg'
        }
      }
    }
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .icons-list{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            padding: 2rem 0;
          }

          .icon{
            width: 2rem;
            height: 2rem;
          }

          img{
            filter: none;
          }

          img:hover{
            filter: brightness(0) saturate(100%) invert(13%) sepia(100%) saturate(7500%) hue-rotate(2deg) brightness(90%);
          }
        </style>
        
        <section>
          <div class="icons-list">
            <div class="icon">
              <a target="_blank" class="icon-list" href="https://www.facebook.com/sonsampol/">
                <picture>
                  <source srcset="${this.data.iconsFB.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                  <source srcset="${this.data.iconsFB.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                  <source srcset="${this.data.iconsFB.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                  <source srcset="${this.data.iconsFB.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                  <img src="${this.data.iconsFB.lg.src}" alt="${this.data.iconsFB.alt}" title="${this.data.iconsFB.title}">
                </picture>
              </a>
            </div>
            <div class="icon">
              <a target="_blank" href="https://twitter.com/?lang=es">
                <picture>
                  <source srcset="${this.data.iconsX.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                  <source srcset="${this.data.iconsX.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                  <source srcset="${this.data.iconsX.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                  <source srcset="${this.data.iconsX.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                  <img src="${this.data.iconsX.lg.src}" alt="${this.data.iconsX.alt}" title="${this.data.iconsX.title}">
                </picture>
              </a>
          </div>
          <div class="icon">
            <a target="_blank" href="https://www.instagram.com/sonsampol/">
              <picture>
                <source srcset="${this.data.iconsIG.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.iconsIG.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.iconsIG.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.iconsIG.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.iconsIG.lg.src}" alt="${this.data.iconsIG.alt}" title="${this.data.iconsIG.title}">
              </picture>
            </a>
          </div>
          <div class="icon">
            <a target="_blank" href="https://www.youtube.com/@fincasonsampol">
              <picture>
                <source srcset="${this.data.iconsYT.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.iconsYT.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.iconsYT.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.iconsYT.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.iconsYT.lg.src}" alt="${this.data.iconsYT.alt}" title="${this.data.iconsYT.title}">
              </picture>
            </a>
          </div>
        </section>
      `
  }
}

customElements.define('icons-list-component', IconList)
