import { html, css, LitElement } from "lit";

export class NavBar extends LitElement {
  static styles = css`
    .main {
      max-width: 1500px;
      width: 100%;
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      border-bottom: 1px solid #fff;
      box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.2);
    }
    .container-up {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #cdcdcd;
      margin-bottom: 5px;
    }
    .data {
      display: flex;
    }
    .logo-data {
      width: 25px;
      height: 25px;
      padding: 10px 5px;
    }
    .container-down {
      width: 100%;
      height: 80px;
      display: flex;
    }
    .first-section,
    .second-section {
      width: 50%;
      display: flex;
    }
    .second-section {
      justify-content: end;
    }
    .logo {
      min-width: 10px;
      padding: 0 10px;
    }
    .logo-letters {
      min-width: 36%;
      height: 30px;
      padding: 30px 5px;
    }
    .btn {
      padding: 30px 0;
    }
  `;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="main">
        <div class="container-up">
          <section class="data">
            <img class="logo-data" src="../public/phone.png" />
            <p>5541126754</p>
          </section>
          <section class="data">
            <img class="logo-data" src="../public/location.png" />
            <p>Av. Zacatlán 7, Pueblo de San Lorenzo, 09790.</p>
          </section>
          <section class="data">
            <img class="logo-data" src="../public/calendar.png" />
            <p>Lunes a Viernes 11am a 7pm</p>
          </section>
        </div>
        <div class="container-down">
          <section class="first-section">
            <img class="logo" src="../public/logo.png" />
            <img class="logo-letters" src="../public/logo-letters.png" />
          </section>
          <section class="second-section">
            <button-general class="btn" label="INICIO" href=""></button-general>
            <button-general
              class="btn"
              label="SERVICIOS"
              href=""
            ></button-general>
            <button-general
              class="btn"
              label="MI AGENDA"
              href=""
            ></button-general>
            <button-general
              class="btn"
              label="CONTACTO"
              href=""
            ></button-general>
          </section>
        </div>
      </div>
    `;
  }
}
customElements.define("nav-bar", NavBar);
