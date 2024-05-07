import { html, css, LitElement } from "lit";

export class TipsValor extends LitElement {
  static styles = css`
    .frame {
      max-width: 1500px;
      width: 100%;
      height: 80px;
      margin: 80px auto;
      background-color: #266570;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      color: #fff;
      font-size: 26px;
    }
    .tip {
      width: 10%;
      height: auto;
      margin-bottom: 100px;
    }
    @media screen and (max-width: 620px) {
        .frame{
            height:60px;
        }
      p {
        font-size: 18px;
      }
      .tip {
        width: 15%;
        margin-bottom: 40px;
      }
    }
  `;

  static properties = {
    message: { type: String },
    imageFirst: { type: Boolean },
  };

  constructor() {
    super();
    this.imageFirst = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div class="frame">
        ${this.imageFirst
          ? html`<img class="tip" src="../public/tip2.png" />`
          : ""}
        <p>${this.message}</p>
        ${!this.imageFirst
          ? html`<img class="tip" src="../public/tip3.png" />`
          : ""}
      </div>
    `;
  }
}

customElements.define("tips-valor", TipsValor);
