class ProductGallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.products = []
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
    await document.addEventListener('filter-gallery', this.handleShowNotification.bind(this))
  }

  async loadData () {
    this.data = [
      {
        buttonLinkProduct: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      },
      {
        buttonLink: '/product/1',
        images: {
          alt: 'product',
          title: 'product',
          xs: {
            src: './public/product.svg'
          },
          sm: {
            src: './public/product.svg'
          },
          md: {
            src: './public/product.svg'
          },
          lg: {
            src: './public/product.svg'
          }
        },
        title: 'Nuevas tecnologías y educación',
        description: 'Charla con el grupo "Por una adolescencia libre de móvil"',
        schedule: '10:00 - 11:00'
      }
    ]
  }

  handleShowNotification (event) {
    console.log(event.detail.category)
    const products = this.shadow.querySelectorAll('.product')

    if (event.detail.category === 'todos') {
      products.forEach(product => {
        product.classList.remove('hidden')
      })
    } else {
      products.forEach(product => {
        if (event.detail.category === product.dataset.category) {
          product.classList.remove('hidden')
        } else {
          product.classList.add('hidden')
        }
      })
    }
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

      .product.hidden {
        display: none;
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
        font-family: "Open Sans", sans-serif;
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0;
        text-align: center;
      }

      .product-description p, .product-date span{
        color: hsl(0, 0%, 100%);
        font-family: "Open Sans", sans-serif;
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
      <div class="product frame-1x1" style="background-color:hsl(9deg 100% 65%)" data-category="niños">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-2x2" style="background-color:hsl(38deg 100% 50%)" data-category="niños">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-1x2" style="background-color:hsl(209deg 100% 55%)" data-category="niños">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-1x1" style="background-color:hsl(248deg 53% 57%)" data-category="niños">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-2x1" style="background-color:hsl(146deg 50% 45%)" data-category="familias">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-2x1" style="background-color:hsl(300deg 75% 70%)" data-category="adultos">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-3x1" style="background-color:hsl(9deg 100% 65%)" data-category="niños">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-1x1" style="background-color:hsl(38deg 100% 50%)" data-category="adultos">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-2x2" style="background-color:hsl(38deg 100% 50%)" data-category="niños">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-1x1" style="background-color:hsl(209deg 100% 55%)" data-category="adultos">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-1x1" style="background-color:hsl(146deg 50% 45%)" data-category="familias">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-1x1" style="background-color:hsl(248deg 53% 57%)" data-category="familias">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-2x1" style="background-color:hsl(300deg 75% 70%)" data-category="niños">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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

      <div class="product frame-1x1" style="background-color:hsl(9deg 100% 65%)" data-category="familias">
        <div class="add-button-container">
          <add-button-component></add-button-component>
        </div>
        <a href="/product/1">
          <div class="product-details">
            <div class="product-image">
              <picture>
                <source srcset="${this.data.images.lg.src}" type="image/svg+xml" media="(min-width: 1200px)">
                <source srcset="${this.data.images.md.src}" type="image/svg+xml" media="(min-width: 992px)">
                <source srcset="${this.data.images.sm.src}" type="image/svg+xml" media="(max-width: 601px)">
                <source srcset="${this.data.images.xs.src}" type="image/svg+xml" media="(max-width: 600px)">
                <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
              </picture>
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
    const productsGallery = this.shadow.querySelector('.product-gallery')

    this.data.forEach(category => {
      const product = document.createElement('div')
      product.classList.add('product')
      productsGallery.appendChild(product)

      const button = document.createElement('add-button-container')
      product.appendChild(button)

      const linkButtonProduct = document.createElement('a')
      linkButtonProduct.setAttribute('href', this.data.buttonLinkProduct)
      product.appendChild(linkButtonProduct)

      const productDetails = document.createElement('div')
      productDetails.classList.add('product-details')
      linkButtonProduct.appendChild(productDetails)

      const productImage = document.createElement('div')
      productImage.classList.add('product-image')
      productDetails.appendChild(productImage)

      const picture = document.createElement('picture')
      productImage.appendChild(picture)

      const sourceLg = document.createElement('source')
      sourceLg.setAttribute('srcset', this.data.images.lg.src)
      sourceLg.setAttribute('type', 'image/webp')
      sourceLg.setAttribute('media', '(min-width: 1921px)')
      picture.appendChild(sourceLg)

      const sourceMd = document.createElement('source')
      sourceMd.setAttribute('srcset', this.data.images.md.src)
      sourceMd.setAttribute('type', 'image/webp')
      sourceMd.setAttribute('media', '(min-width: 1025px')
      picture.appendChild(sourceMd)

      const sourceSm = document.createElement('source')
      sourceSm.setAttribute('srcset', this.data.images.sm.src)
      sourceSm.setAttribute('type', 'image/webp')
      sourceSm.setAttribute('media', '(min-width: 601px)')
      picture.appendChild(sourceSm)

      const sourceXs = document.createElement('source')
      sourceXs.setAttribute('srcset', this.data.images.xs.src)
      sourceXs.setAttribute('type', 'image/webp')
      sourceXs.setAttribute('media', '(max-width: 600px)')
      picture.appendChild(sourceXs)

      const img = document.createElement('img')
      img.setAttribute('src', this.data.images.lg.src)
      img.setAttribute('alt', this.data.images.lg.alt)
      img.setAttribute('title', this.data.images.lg.title)
      picture.appendChild(img)

      const productTitle = document.createElement('div')
      productTitle.classList.add('product-title')
      productDetails.appendChild(productTitle)

      const titleContent = document.createElement('h3')
      productTitle.appendChild(titleContent)

      const productDescription = document.createElement('div')
      productDescription.classList.add('product-description')
      productDetails.appendChild(productDescription)

      const descriptionContent = document.createElement('p')
      productDescription.appendChild(descriptionContent)

      const productDate = document.createElement('div')
      productDate.classList.add('product-description')
      productDetails.appendChild(productDate)

      const dateContent = document.createElement('span')
      productDate.appendChild(dateContent)
    })
  }
}

customElements.define('product-gallery-component', ProductGallery)
