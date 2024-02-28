class Notification extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.orientation = this.getAttribute('orientation')
  }

  connectedCallback () {
    this.render()

    document.addEventListener('message', event => {
      const notification = this.shadow.querySelector('.notification')
      const notificationText = this.shadow.querySelector('.notification-title h2')

      notificationText.textContent = event.detail.text
      notification.classList.add('active')

      setTimeout(() => {
        notification.classList.remove('active')
      }, 3000)
    })
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
      h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
      }

      .notification {
        position: fixed;
        display: flex;
        height: 50px;
        width: 350px;
        right: 0;
        bottom: -100px;
        padding: 1rem;
        border-radius: 7px;
        background-color: hsla(0, 100%, 100%);
        border: 1px solid hsla(0, 0%, 0%, .1);
        transition: all .5s;
        z-index: 3;
      }

      .notification.active{
        bottom: 0;
      }

      .notification-icon{
        display: flex;
        align-items: center;
      }

      .notification-icon svg{
        height: 2rem;
        width: 2rem;
        fill: hsl(130deg 82% 37%);
      }

      .notification-content{
        display: flex;
        align-items: center;
        padding: 0 0 0 1rem;
      }
      </style>

      <div class="notification">
        <div class="notification-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>
        </div>
        <div class="notification-content">
          <div class="notification-title">
            <h2></h2>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('notification-component', Notification)
