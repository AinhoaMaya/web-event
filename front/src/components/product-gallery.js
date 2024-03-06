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
        schedule: '10:00 - 11:00',
        category: 'niños',
        size: 'frame-1x1',
        color: 'hsl(9deg 100% 65%)'
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
        schedule: '10:00 - 11:00',
        category: 'niños',
        size: 'frame-2x2',
        color: 'hsl(38deg 100% 50%)'
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
        schedule: '10:00 - 11:00',
        category: 'niños',
        size: 'frame-1x2',
        color: 'hsl(209deg 100% 55%)'
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
        schedule: '10:00 - 11:00',
        category: 'niños',
        size: 'frame-1x1',
        color: 'hsl(248deg 53% 57%)'
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
        schedule: '10:00 - 11:00',
        category: 'niños',
        size: 'frame-2x1',
        color: 'hsl(146deg 50% 45%)'
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
        schedule: '10:00 - 11:00',
        category: 'familias',
        size: 'frame-2x1',
        color: 'hsl(300deg 75% 70%)'
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
        schedule: '10:00 - 11:00',
        category: 'adultos',
        size: 'frame-3x1',
        color: 'hsl(9deg 100% 65%)'
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
        schedule: '10:00 - 11:00',
        category: 'niños',
        size: 'frame-1x1',
        color: 'hsl(38deg 100% 50%)'
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
        schedule: '10:00 - 11:00',
        category: 'adultos',
        size: 'frame-2x2',
        color: 'hsl(209deg 100% 55%)'
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
        schedule: '10:00 - 11:00',
        category: 'niños',
        size: 'frame-1x1',
        color: 'hsl(300, 75%, 70%)'
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
        schedule: '10:00 - 11:00',
        category: 'adultos',
        size: 'frame-1x1',
        color: 'hsl(248deg 53% 57%)'
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
        schedule: '10:00 - 11:00',
        category: 'familias',
        size: 'frame-1x1',
        color: 'hsl(300deg 75% 70%)'
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
        schedule: '10:00 - 11:00',
        category: 'familias',
        size: 'frame-2x1',
        color: 'hsl(9deg 100% 65%)'
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
        schedule: '10:00 - 11:00',
        category: 'adultos',
        size: 'frame-1x1',
        color: 'hsl(248deg 53% 57%)'
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
        schedule: '10:00 - 11:00',
        category: 'adultos',
        size: 'frame-1x1',
        color: 'hsl(38deg 100% 50%)'
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

      .product-gallery{
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 300px;
        grid-auto-flow: row dense;
        grid-gap: 0.5rem;
        padding: 0.5rem;
      }

      .frame-1x1{
        grid-column: span 1;
        grid-row: span 1;
      }

      .frame-2x2{
        grid-column: span 2;
        grid-row: span 2;
      }

      .frame-1x2{
        grid-column: span 1;
        grid-row: span 2;
      }

      .frame-2x1{
        grid-column: span 2;
        grid-row: span 1;
      }

      .frame-3x1{
        grid-column: span 3;
        grid-row: span 1;
      }

      .product{
        align-items: center;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        padding: 1rem;
        position: relative;
        background-color: hsl(248deg 53% 57%);
      }

      .add-button-container{
        position: absolute;
        right: 1rem;
        top: 1rem;
      }

      .product-details{
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

      img{
        height: 4rem;
        width: 4rem;
      }

      .product-title h3{
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
      
    </section>
    `
    const productsGallery = this.shadow.querySelector('.product-gallery')

    this.data.forEach(category => {
      const product = document.createElement('div')
      product.classList.add('product')
      product.classList.add(category.size)
      productsGallery.appendChild(product)
      product.setAttribute('data-category', category.category)
      product.style.backgroundColor = category.color

      const button = document.createElement('add-button-component')
      button.classList.add('add-button-container')
      product.appendChild(button)

      const linkButtonProduct = document.createElement('a')
      linkButtonProduct.setAttribute('href', category.buttonLinkProduct)
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
      sourceLg.setAttribute('srcset', category.images.lg.src)
      sourceLg.setAttribute('type', 'image/webp')
      sourceLg.setAttribute('media', '(min-width: 1921px)')
      picture.appendChild(sourceLg)

      const sourceMd = document.createElement('source')
      sourceMd.setAttribute('srcset', category.images.md.src)
      sourceMd.setAttribute('type', 'image/webp')
      sourceMd.setAttribute('media', '(min-width: 1025px')
      picture.appendChild(sourceMd)

      const sourceSm = document.createElement('source')
      sourceSm.setAttribute('srcset', category.images.sm.src)
      sourceSm.setAttribute('type', 'image/webp')
      sourceSm.setAttribute('media', '(min-width: 601px)')
      picture.appendChild(sourceSm)

      const sourceXs = document.createElement('source')
      sourceXs.setAttribute('srcset', category.images.xs.src)
      sourceXs.setAttribute('type', 'image/webp')
      sourceXs.setAttribute('media', '(max-width: 600px)')
      picture.appendChild(sourceXs)

      const img = document.createElement('img')
      img.setAttribute('src', category.images.lg.src)
      img.setAttribute('alt', category.images.lg.alt)
      img.setAttribute('title', category.images.lg.title)
      picture.appendChild(img)

      const productTitle = document.createElement('div')
      productTitle.classList.add('product-title')
      productDetails.appendChild(productTitle)

      const titleContent = document.createElement('h3')
      titleContent.textContent = category.title
      productTitle.appendChild(titleContent)

      const productDescription = document.createElement('div')
      productDescription.classList.add('product-description')
      productDetails.appendChild(productDescription)

      const descriptionContent = document.createElement('p')
      descriptionContent.textContent = category.description
      productDescription.appendChild(descriptionContent)

      const productDate = document.createElement('div')
      productDate.classList.add('product-description')
      productDetails.appendChild(productDate)

      const dateContent = document.createElement('span')
      productDate.classList.add('product-date')
      dateContent.textContent = category.schedule
      productDate.appendChild(dateContent)
    })
  }
}

customElements.define('product-gallery-component', ProductGallery)
