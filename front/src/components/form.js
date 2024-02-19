class Form extends HTMLElement {
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
          form{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            justify-content: center;
            margin: 0 auto;
            max-width: 1200px;
            padding: 2rem 0;
            width: 100%;
          }
          .form-groups{
            display: flex;
            gap: 2rem;
          }
          .form-group{
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
          }
          .form-group-title h3{
            color: hsl(0, 0%, 0%);
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 1.2;
            margin: 0;
            text-align: center;
            text-transform: capitalize;
          }
          .form-row{
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          }
          .form-element.full-width{
            width: 100%;
          }
          .form-element.half-width{
            width: 50%;
          }
          .form-element-label label{
            font-family: 'Poppins', sans-serif;
          }
          .form-element-input label{
            font-family: 'Poppins', sans-serif;
          }
          .form-element-input input{
            font-family: 'Poppins', sans-serif;
            width: 100%;
          }
          input[type="checkbox"] {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            display: none;
          }
          .custom-checkbox {
            border: 1px solid hsl(0, 0%, 50%);
            border-radius: 0.5rem;
            box-sizing: border-box;
            min-height: 10vh;
            padding: 1rem;
            width: 100%;
          }
          .custom-checkbox h3{
            color: hsl(0, 0%, 0%);
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            font-weight: 600;
            line-height: 1.2;
            margin: 0;
            text-align: center;
            text-transform: capitalize;
          }


          @media (hover: hover) {
            
          }

          @media (min-width: 601px) {

          }

          @media (min-width: 601px) and (orientation: landscape) {

          }

          @media (min-width: 1025px) and (max-width: 1920px) {

          }

          @media (min-width: 1920px) {

          }
        </style>

        <section>
          <form>
            <div class="form-groups">
              <div class="form-group">
                <div class="form-group-title">
                  <h3>Escenario 1</h3>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>    

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>   

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div> 

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>                  
              </div>

              <div class="form-group">
                <div class="form-group-title">
                  <h3>Escenario 2</h3>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div> 

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>                  
              </div>

              <div class="form-group">
                <div class="form-group-title">
                  <h3>Escenario 3</h3>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>   

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>                   
              </div>

              <div class="form-group">
                <div class="form-group-title">
                  <h3>Escenario 4</h3>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>

                <div class="form-element full-width">
                  <div class="form-element-input">
                    <div class="custom-checkbox">
                      <h3>Taller de marionetas</h3>
                      <input type="checkbox" id="activities" name="activities[]">
                    </div>
                  </div>
                </div>                   
              </div>
            </div>

          <div class="form-group">
            <div class="form-element half-width">
              <div class="form-element-label">
                <label>Nombre</label>
              </div>
              <div class="form-element-input">
                <input type="text" id="name" name="name" required>
              </div>
            </div>

            <div class="form-element half-width">
              <div class="form-element-label">
                <label>Apellidos</label>
              </div>
              <div class="form-element-input">
                <input type="text" id="lastname" name="surname" required>
              </div>
            </div>

            <div class="form-element half-width">
              <div class="form-element-label">
                <label>Correo</label>
              </div>
              <div class="form-element-input">
                <input type="email" id="email" name="email" required>
              </div>
            </div>
          </div>
        </form>
        </section>
      `
  }
}

customElements.define('form-component', Form)
