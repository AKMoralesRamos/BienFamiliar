import { html, css, LitElement } from "lit";

export class RefillIcon extends LitElement {
  static styles = css`
    .container {
      width: 100%;
      display: flex;
      margin: 0 auto;
    }
    p {
      font-size: 35px;
      font-weight: bold;
    }
    h1 {
      font-size: 50px;
      color: #ff2768;
    }
    .message {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    img {
      min-width: 100%;
      height: auto;
    }

    @media screen and (max-width: 720px) {
      img {
        max-width: 65%;
      }
      p {
        font-size: 18px;
      }
      h1 {
        font-size: 24px;
      }
    }
  `;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container">
        <section class="image-tip">
          <img src="../public/tip.png" />
        </section>
        <section class="message">
          <p>¡No esperes a que te duela!</p>
          <h1>La prevención es el mejor tratamiento.</h1>
        </section>
      </div>
    `;
  }
}
customElements.define("refill-icon", RefillIcon);
