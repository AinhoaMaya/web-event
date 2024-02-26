class About extends HTMLElement {
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
              <source srcset="./public/about.webp" type="image/webp" media="(max-width: 600px)">
              <source srcset="./public/about.webp" type="image/webp" media="(min-width: 601px)">
              <img src="./public/about.webp" alt="son-sampol" title="finca son sampol">
            </picture>
          </div>
          <div class="about-content">
            <div class="about-title-about">
              <h1>Sobre nosotros</h1>
            </div>
            <div class="about-text">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quia dolorem iste natus sit maiores nostrum repudiandae mollitia eaque rem, quas praesentium perferendis? Ad dolore voluptatum dolor optio saepe repudiandae velit, sint quasi, eligendi magnam vel officiis ipsam cumque perspiciatis alias ratione voluptate delectus perferendis! Ratione dolorem dolor nemo minima eum mollitia adipisci? Similique explicabo nobis vitae provident tenetur neque repellendus error rem repudiandae eum sequi obcaecati aliquam harum omnis debitis commodi ducimus dolorum amet corrupti illo, veritatis, quod nulla. Dolorum, ducimus a error minima odit libero et. Aperiam fuga in, odio voluptates ipsam rem explicabo inventore optio vitae tenetur esse cumque dolores laborum assumenda enim, accusantium alias. Amet, nisi molestias saepe incidunt error possimus repellendus vel nemo eligendi numquam voluptas expedita iste, soluta aspernatur sint quasi facilis voluptates quidem reiciendis temporibus cumque praesentium! Tempore, nobis minus quas sed atque at sint velit impedit perspiciatis, exercitationem quis amet adipisci praesentium!</p><br>
            </div>
          </div>
        </div>
      `
  }
}

customElements.define('about-component', About)
