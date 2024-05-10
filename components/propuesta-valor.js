import { html, css, LitElement } from "lit";

export class PropuestaValor extends LitElement {
  static styles = css`
    .iconPink {
      width: 30%;
      height: 110px;
    }
    .container {
      max-width: 1500px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    .benefit {
      width: 100%;
      margin: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    p {
      padding: 0 20px;
      text-align: center;
    }

    @media screen and (max-width: 620px) {
      .container {
        display: flex;
        flex-direction: column;

        align-items: center;
      }
      .iconPink {
        width: 15%;
        height: 70px;
      }
      p {
        padding: 0 60px;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <section class="benefit">
          <img class="iconPink" src="../public/costo.png" />
          <b>Precios accesibles</b>
          <p>
            En todos nuestros tratamientos aplicamos un costo justo en base a su
            nivel socioeconómico.
          </p>
        </section>
        <section class="benefit">
          <img class="iconPink" src="../public/reloj.png" />
          <b>Calidad de servicio</b>
          <p>
            Cada paciente es importante, nos tomamos el tiempo necesario para
            cada uno.
          </p>
        </section>
        <section class="benefit">
          <img class="iconPink" src="../public/uno.png" />
          <b>Profesionalismo</b>
          <p>Nuestro mayor éxito es gracias a tu valiosa recomendación.</p>
        </section>
      </div>
    `;
  }
}

customElements.define("propuesta-valor", PropuestaValor);
