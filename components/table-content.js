import { html, css, LitElement } from "lit";

export class TableContent extends LitElement {
  static styles = css``;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>¡Hola, Karen!</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre del procedimiento</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
          <slot name="items"></slot>
          </tbody>
        </table>
      </div>
    `;
  }
}

customElements.define("table-content", TableContent);
