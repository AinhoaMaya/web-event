class AddButton extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .add-button * { 
            box-sizing: border-box; 
          }

          .add-button {
            background-color: hsl(0, 0%, 100%);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            height: 2.2rem;
            padding: 0;
            width: 2.2rem;
          }

          .add-button.active { 
            background-color: hsl(130deg 82% 37%);
          }

          .button-icon {
            align-items: center;
            display: flex;
            justify-content: center;
          }

          .line {
            background-color: hsl(130deg 82% 37%);
            border-radius: 5px;
            height: 3px;
            position: absolute;
            transition: all 0.4s;
            width: 60%; 
          }

          .line:nth-child(2) {
            transform: translateX(0) rotate(90deg);
          }

          .add-button.active .line { 
            background-color: hsl(0, 0%, 100%); 
            margin-top: -2px;
            left: 5%; 
          }

          .add-button.active .line:nth-child(1) {
            transform: translateX(47%) rotate(45deg);
            top: 63%;
            width: 30%;
          }

          .add-button.active .line:nth-child(2) {
            transform: translateX(50%) rotate(-55deg);
            top: 52%;
            width: 55%;
          }

          .add-button.active .loader{
            animation: rotation linear 0.7s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards; 
            background-color: transparent;
            border-radius: 50%;
            border: 3px solid hsl(0, 0%, 100%);
            border-bottom: 3px solid transparent;
            border-right: 3px solid transparent;
            border-top: 3px solid transparent;
            height: 100%;
            position: absolute;
            top: 0;
            width: 100%;
          }

          @keyframes rotation{
            0%{
              transform: rotate(0);
            }
            100%{
              display: none;
              transform: rotate(400deg);
            }
          }
      </style>
      <button class="add-button">
        <div class="button-icon">
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="loader"></div>
      </button>
    `

    const button = this.shadow.querySelector('button')

    button.addEventListener('click', function () {
      button.classList.toggle('active')
    })
  }
}

customElements.define('add-button-component', AddButton)
