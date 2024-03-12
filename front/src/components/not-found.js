class notFound extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.columns = this.getAttribute('columns') || 1
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .text-content{
            width: 100%;
            height: 100vh;
            background-color: hsl(209, 72%, 83%);M
          }

          .text-not-found{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
          }

          .not-found{
            text-size: 20px;
          }
        </style>
        <div class="text-content">
          <div class="text-not-found">
            <p class="not-found">404</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>emoticon-sad-outline</title><path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" /></svg>
            <p>No encuentro la página</p>
          </div>
        </div>
      `
  }
}

customElements.define('not-found-component', notFound)
