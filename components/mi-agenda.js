import { html, css, LitElement } from "lit";

export class MiAgenda extends LitElement {
  static styles = css`
    .container {
      max-width: 1500px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .title-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 10%;
      height: 20px;
      padding: 10px;
    }
    .input-container {
      width: 300px;
      display: flex;
    }
    input {
      width: 100%;
      height: auto;
      border: none;
      box-shadow: 4px 3px 31px -7px rgba(0, 0, 0, 0.75);
      border-radius: 10px;
      margin-right: 15px;
      padding: 16px;
    }
    .btn {
      width: 140px;
      height: 50px;
      border-radius: 10px;
      background-color: #ff2768;
      box-shadow: 4px 3px 31px -7px rgba(0, 0, 0, 0.75);
      /* box-shadow: 1px 1px 1px rgba(255, 39, 104, 0.6); */
      transition: box-shadow 0.1s ease;
      border: none;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  `;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container">
        <section class="title-icon">
          <img src="../public/flecha-n.png" />
          <h2>MI AGENDA</h2>
        </section>
        <p>
          Introduce el correo electrónico con el que agendaste tu cita para ver
          los detalles de la misma.
        </p>
        <div class="input-container">
          <input placeholder="tucorreo@company.com" />
          <button class="btn">Buscar</button>
        </div>
      </div>
    `;
  }
}
customElements.define("mi-agenda", MiAgenda);
