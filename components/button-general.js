import { html, css, LitElement } from "lit";

export class ButtonGeneral extends LitElement {
  static styles = css`
    a {
      text-decoration: none;
      padding: 10px 20px;
      color: #ff2768;
      font-weight: bold;
      font-size: 14px;
      text-shadow: 1px 1px 1px rgba(255, 39, 104, 0.4);
      transition: text-shadow 0.1s ease;
    }
    a:hover {
      text-decoration: underline;
    }
  `;

  static properties = {
    label: { type: String },
    href: { type: String },
  };

  render() {
    return html` <a href=${this.href}>${this.label}</a>`;
  }
}

customElements.define("button-general", ButtonGeneral);
