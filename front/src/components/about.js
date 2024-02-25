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
            min-height: 100vh;
            overflow: hidden;
            position: relative;
            width: 100%;
          }

          .about-image{
            height: 100%;
            position: absolute;
            width: 100%;
            z-index: 1000;
          }

          .about-image img{
            height: 100%;
            object-fit: cover;
            width: 100%;
          }

          .about-title{
            align-items: center;
            background-color: hsla(0, 0%, 0%, 0.5);
            display: flex;
            flex-direction: column;
            gap: 2rem;
            height: 100%;
            padding: 20rem 0;
            position: absolute;
            width: 100%;
            z-index: 1001;
          }

          .about-title-about h1{
            color: hsl(0, 0%, 100%);
            font-family: 'Poppins', sans-serif;
            font-size: 4rem;
            font-weight: 600;
            line-height: 1.2;
            margin: 0;
            text-align: center;
            text-transform: capitalize;
          }

          .about-content {
            z-index: 1002; 
            position: relative;
          }

          .about-text {
            padding: 470px 100px; 
            color: hsl(0, 0%, 100%);
          }


          @media (hover: hover) {

          }

          @media (min-width: 601px) {
            .about-title-about h1{
              font-size: 4rem;
              line-height: 1;
            }
          }

          @media (min-width: 601px) and (orientation: landscape) {
            .about-title-about h1{
              font-size: 5rem;
              line-height: 1;
            }
          }

          @media (min-width: 1025px) and (max-width: 1920px) {
            .about-title-about h1{
              font-size: 7rem;
              line-height: 1;
            }
          }

          @media (min-width: 1921px) {

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
          <div class="about-title">
            <div class="about-title-about">
              <h1>Sobre nosotros</h1>
            </div>
          </div>
          <div class="about-content">
            <div class="about-text">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quia dolorem iste natus sit maiores nostrum repudiandae mollitia eaque rem, quas praesentium perferendis? Ad dolore voluptatum dolor optio saepe repudiandae velit, sint quasi, eligendi magnam vel officiis ipsam cumque perspiciatis alias ratione voluptate delectus perferendis! Ratione dolorem dolor nemo minima eum mollitia adipisci? Similique explicabo nobis vitae provident tenetur neque repellendus error rem repudiandae eum sequi obcaecati aliquam harum omnis debitis commodi ducimus dolorum amet corrupti illo, veritatis, quod nulla. Dolorum, ducimus a error minima odit libero et. Aperiam fuga in, odio voluptates ipsam rem explicabo inventore optio vitae tenetur esse cumque dolores laborum assumenda enim, accusantium alias. Amet, nisi molestias saepe incidunt error possimus repellendus vel nemo eligendi numquam voluptas expedita iste, soluta aspernatur sint quasi facilis voluptates quidem reiciendis temporibus cumque praesentium! Tempore, nobis minus quas sed atque at sint velit impedit perspiciatis, exercitationem quis amet adipisci praesentium!</p><br>
            </div>
          </div>
        </div>
      `
  }
}

customElements.define('hola-component', About)
