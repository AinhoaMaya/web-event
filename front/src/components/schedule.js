class Horario extends HTMLElement {
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
    this.data = {
      images: {
        alt: 'schedule',
        title: 'schedule',
        xs: {
          src: './public/schedule.webp'
        },
        sm: {
          src: './public/schedule.webp'
        },
        md: {
          src: './public/schedule.webp'
        },
        lg: {
          src: './public/schedule.webp'
        }
      },
      title: 'encuentro mosaico',
      subtitle: 'Un espacio para compartir, aprender y disfrutar',
      date: 'Llucmajor | 09:00h',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos voluptate maxime, vitae, commodi amet at recusandae error saepe perspiciatis ducimus, fugiat doloremque temporibus accusamus ratione quisquam atque ipsam repudiandae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos voluptate maxime, vitae, commodi amet at recusandae error saepe perspiciatis ducimus, fugiat doloremque temporibus accusamus ratione quisquam atque ipsam repudiandae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos voluptate maxime, vitae, commodi amet at recusandae error saepe perspiciatis ducimus, fugiat doloremque temporibus accusamus ratione quisquam atque ipsam repudiandae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos voluptate maxime, vitae, commodi amet at recusandae error saepe perspiciatis ducimus, fugiat doloremque temporibus accusamus ratione quisquam atque ipsam repudiandae',
      text: '¡Apúntate a las actividades!',
      schedule: [
        {
          title: 'Nuevas tecnologías y educación',
          date: '09:00h - 10:00h',
          size: 'frame-1x1',
          color: 'hsl(146deg 50% 45%)'
        },
        {
          title: 'Nuevas tecnologías y educación',
          date: '10:30h - 11:30h',
          size: 'frame-1x1',
          color: 'hsl(146deg 50% 45%)'
        },
        {
          title: 'Nuevas tecnologías y educación',
          date: '11:15h - 11:45h',
          size: 'frame-1x1',
          color: 'hsl(146deg 50% 45%)'
        },
        {
          title: 'Nuevas tecnologías y educación',
          date: '12:00h - 12:30h',
          size: 'frame-1x1',
          color: 'hsl(146deg 50% 45%)'
        },
        {
          title: 'Nuevas tecnologías y educación',
          date: '12:20h - 13:00h',
          size: 'frame-1x1',
          color: 'hsl(146deg 50% 45%)'
        },
        {
          title: 'Nuevas tecnologías y educación',
          date: '12:45h - 13:45h',
          size: 'frame-1x1',
          color: 'hsl(146deg 50% 45%)'
        },
        {
          title: 'Nuevas tecnologías y educación',
          date: '13:15h - 13:50h',
          size: 'frame-1x1',
          color: 'hsl(146deg 50% 45%)'
        },
        {
          title: 'Nuevas tecnologías y educación',
          date: '13:30h - 14:00h',
          size: 'frame-1x1',
          color: 'hsl(146deg 50% 45%)'
        },
        {
          title: 'Nuevas tecnologías y educación',
          date: '13:30h - 14:00h',
          size: 'frame-1x1',
          color: 'hsl(146deg 50% 45%)'
        },
        {
          title: 'Nuevas tecnologías y educación',
          date: '13:30h - 14:00h',
          size: 'frame-1x1',
          color: 'hsl(146deg 50% 45%)'
        }
      ],
      scheduleDinner: [
        {
          title: 'Hora de la comida y merienda',
          date: 'Comida: 14:00h - 14:45h | Merienda: 16:00h - 16:30h',
          size: 'frame-1x1',
          color: 'hsl(248deg 53% 57%)'
        }
      ]
    }
  }

  handleShowNotification (event) {
    console.log(event.detail.category)
    const products = this.shadow.querySelectorAll('.schedule')

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
          .schedule-body{
            padding: 7rem 0.1rem 0 0.1rem;
            overflow: hidden;
          }

          .schedule-image{
            padding: 1rem 0.5rem 0 0.5rem;
          }

          .schedule-image img{
            object-fit: cover;
            width: 100%;
            margin: 0;
          }

          .schedule-description{
            font-family: 'Poppins', sans-serif;
            padding: 5rem;
            text-align: justify;
          }

          .schedule-description h1{
            font-size: 4rem;
            font-weight: 600;
            line-height: 1.2;
            margin: 0;
            text-align: center;
            text-transform: capitalize;
          }

          .schedule-description h3{
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.2;
            margin: 0;
            text-align: center;
            padding: 0 0 2rem 0;
          }

          .schedule-description p{
            font-weight: 600;
            line-height: 1.2;
            margin: 0;
            text-align: center;
            text-align: justify;
            padding: 0 7rem 2rem 7rem;
          }

          .schedule-inscription-title h3{
            color: hsl(209deg 100% 55%);
          }

          .schedule{
            box-sizing: border-box;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-auto-rows: 300px;
            grid-auto-flow: row dense;
            grid-gap: 0.5rem;
            padding: 0.5rem;
            border-radius: 1rem;
          }

          .frame-1x1{
            grid-column: span 1;
            grid-row: span 1;
            place-items: center;
            position: relative;
          }

          .add-button-container{
            position: absolute;
            top: 0;
            right: 0;
            padding: 1rem;
          }

          .schedule-info, .schedule-info-dinner{
            color: hsl(0, 0%, 100%);
            font-family: 'Poppins', sans-serif;
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
        </style>

        <div class="schedule-body">
          <div class="schedule-image">
            <picture>
              <source srcset="${this.data.images.lg.src}" type="image/webp" media="(min-width: 1200px)">
              <source srcset="${this.data.images.md.src}" type="image/webp" media="(min-width: 992px)">
              <source srcset="${this.data.images.sm.src}" type="image/webp" media="(max-width: 601px)">
              <source srcset="${this.data.images.xs.src}" type="image/webp" media="(max-width: 600px)">
              <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
            </picture>
          </div>

          <div class="schedule-description">
            <h1>${this.data.title}</h1>
            <h3>${this.data.subtitle}</h3>
            <h3>${this.data.date}</h3>
            <p>${this.data.description}</p>
            <div class="schedule-inscription-title">
              <h3>${this.data.text}</h3>
            </div>
          </div>

          <div class="schedule"></div>
          <div class="schedule-dinner"></div>
        </div>
      `
    const schedules = this.shadow.querySelector('.schedule')
    const schedulesDinner = this.shadow.querySelector('.schedule-dinner')

    this.data.schedule.forEach(category => {
      const schedule = document.createElement('div')
      schedule.classList.add('schedule')
      schedule.classList.add(category.size)
      schedules.appendChild(schedule)
      schedule.style.backgroundColor = category.color

      const buttonContainer = document.createElement('div')
      buttonContainer.classList.add('add-button-container')
      schedule.appendChild(buttonContainer)

      const addButton = document.createElement('add-button-component')
      buttonContainer.appendChild(addButton)

      const scheduleInfo = document.createElement('div')
      scheduleInfo.classList.add('schedule-info')
      schedule.appendChild(scheduleInfo)

      const scheduleTitle = document.createElement('h3')
      scheduleTitle.textContent = category.title
      scheduleInfo.appendChild(scheduleTitle)

      const scheduleDate = document.createElement('h2')
      scheduleDate.textContent = category.date
      scheduleInfo.appendChild(scheduleDate)
    })

    this.data.scheduleDinner.forEach(category => {
      const scheduleDinner = document.createElement('div')
      scheduleDinner.classList.add('schedule')
      scheduleDinner.classList.add(category.size)
      schedulesDinner.appendChild(scheduleDinner)
      scheduleDinner.style.backgroundColor = category.color

      const buttonContainerDinner = document.createElement('div')
      buttonContainerDinner.classList.add('add-button-container')
      scheduleDinner.appendChild(buttonContainerDinner)

      const addButtonDinner = document.createElement('add-button-component')
      buttonContainerDinner.appendChild(addButtonDinner)

      const scheduleInfoDinner = document.createElement('div')
      scheduleInfoDinner.classList.add('schedule-info')
      scheduleDinner.appendChild(scheduleInfoDinner)

      const scheduleTitleDinner = document.createElement('h3')
      scheduleTitleDinner.textContent = category.title
      scheduleInfoDinner.appendChild(scheduleTitleDinner)

      const scheduleDateDinner = document.createElement('h2')
      scheduleDateDinner.textContent = category.date
      scheduleInfoDinner.appendChild(scheduleDateDinner)
    })
  }
}

customElements.define('schedule-component', Horario)
