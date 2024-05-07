import { html, css, LitElement } from "lit";

export class ButtonGeneral extends LitElement {
  static styles = css`
  a {
    text-decoration: none;
    border: solid black;
    padding: 10px 20px;
  }`;

  static properties = {
    label: { type: String },
    href: { type: String },
  };

  constructor() {
    super();
    this.label = "Inicio";
    this.href = "";
  }

  render() {
    return html` <a href=${this.href}>${this.label}</a>`;
  }
}

customElements.define("button-general", ButtonGeneral);
