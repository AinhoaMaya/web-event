class Header extends HTMLElement {
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
          header{
            align-items: center;
            background-color: hsla(0, 0%, 15%);
            transition: background-color 0.5s;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            height: 10vh;
            max-height: 10vh;
            left: 0;
            padding: 0 2rem;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 5000;
          }
        </style>
        <header>
          <slot></slot>
        </header>
      `
  }
}

customElements.define('header-component', Header)
