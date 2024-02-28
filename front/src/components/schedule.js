class Horario extends HTMLElement {
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
          .schedule-body{
            padding: 7rem 0.1rem 0 0.1rem;
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

          .frame-1x1, .frame-2x2, .frame-1x2, .frame-2x1, .frame-3x1 {
            place-items: center;
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
          <div class="schedule">
            <div class="schedule frame-1x1" style="background-color:hsl(9deg 100% 65%)">
              <div class="schedule-info">
                <h3>Nuevas tecnologías y educación</h3>
                <h2>09:00h - 10:00h</h2>
              </div>
            </div>
            <div class="schedule frame-1x1" style="background-color:hsl(38deg 100% 50%)">
              <div class="schedule-info">
                <h3>Nuevas tecnologías y educación</h3>
                <h2>10:30h - 11:30h</h2>
              </div>
            </div>
            <div class="schedule frame-1x1" style="background-color:hsl(209deg 100% 55%)">
              <div class="schedule-info">
                <h3>Nuevas tecnologías y educación</h3>
                <h2>11:15h - 11:45h</h2>
              </div>
            </div>
            <div class="schedule frame-1x1" style="background-color:hsl(146deg 50% 45%)">
              <div class="schedule-info">
                <h3>Nuevas tecnologías y educación</h3>
                <h2>12:00h - 12:30h</h2>
              </div>
            </div>
          </div>

          <div class="schedule">
            <div class="schedule frame-1x1" style="background-color:hsl(38deg 100% 50%)">
              <div class="schedule-info">
                <h3>Nuevas tecnologías y educación</h3>
                <h2>12:20h - 13:00h</h2>
              </div>
            </div>
            <div class="schedule frame-1x1" style="background-color:hsl(9deg 100% 65%)">
              <div class="schedule-info">
                <h3>Nuevas tecnologías y educación</h3>
                <h2>12:45h - 13:45h</h2>
              </div>
            </div>
            <div class="schedule frame-1x1" style="background-color:hsl(146deg 50% 45%)">
              <div class="schedule-info">
                <h3>Nuevas tecnologías y educación</h3>
                <h2>13:15h - 13:50h</h2>
              </div>
            </div>
            <div class="schedule frame-1x1" style="background-color:hsl(209deg 100% 55%)">
              <div class="schedule-info">
                <h3>Nuevas tecnologías y educación</h3>
                <h2>13:30h - 14:00h</h2>
              </div>
            </div>
          </div>

          <div class="schedule">
            <div class="schedule frame-1x1" style="background-color:hsl(248deg 53% 57%)">
              <div class="schedule-info-dinner">
                <h2>Hora de la comida y merienda</h2>
                <h2>Comida: 14:00h - 14:45h | Merienda: 16:00h - 16:30h</h2>
              </div>
            </div>
          </div>

          <div class="schedule">
            <div class="schedule frame-1x1" style="background-color:hsl(9deg 100% 65%)">
              <div class="schedule-info">
                <h3>Nuevas tecnologías y educación</h3>
                <h2>15:00h - 16:00h</h2>
              </div>
            </div>
            <div class="schedule frame-1x1" style="background-color:hsl(38deg 100% 50%)">
              <div class="schedule-info">
                <h3>Nuevas tecnologías y educación</h3>
                <h2>16:30h - 17:30h</h2>
              </div>
            </div>
            <div class="schedule frame-1x1" style="background-color:hsl(209deg 100% 55%)">
              <div class="schedule-info">
                <h3>Nuevas tecnologías y educación</h3>
                <h2>17:30h - 18:00h</h2>
              </div>
            </div>
            <div class="schedule frame-1x1" style="background-color:hsl(146deg 50% 45%)">
              <div class="schedule-info">
                <h3>Nuevas tecnologías y educación</h3>
                <h2>18:00h - 18:30h</h2>
              </div>
            </div>
          </div>
        </div>
      `
  }
}

customElements.define('schedule-component', Horario)
