import { LitElement, html, css } from 'lit';

export class MiComponente extends LitElement {
  static styles = css`
    div {
      margin: 10px 0;
    }
  `;

  static properties = {
    miPropiedad: { type: String },
  };

  constructor() {
    super();
    this.miPropiedad = 'Valor inicial';
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('Componente añadido al DOM');

    // Agrega un event listener al documento para el cambio externo
    document.addEventListener('cambiar-propiedad-externa', this.handleExternalChange.bind(this));
  }

  disconnectedCallback() {
    console.log('Componente eliminado del DOM');

    // Limpia el event listener cuando el componente se elimina del DOM
    document.removeEventListener('cambiar-propiedad-externa', this.handleExternalChange.bind(this));

    super.disconnectedCallback();
  }

  handleExternalChange(event) {
    this.miPropiedad = event.detail.nuevoValor;
  }

  cambiarPropiedad() {
    this.miPropiedad = 'Nuevo valor desde dentro';
  }

  render() {
    return html`
      <div>Mi propiedad: ${this.miPropiedad}</div>
      <button @click="${this.cambiarPropiedad}">Cambiar Propiedad Internamente</button>
    `;
  }
}

customElements.define('mi-componente', MiComponente);

// Función para cambiar la propiedad externamente
window.cambiarPropiedadExterna = function() {
  const event = new CustomEvent('cambiar-propiedad-externa', {
    detail: { nuevoValor: 'Valor cambiado externamente' }
  });
  document.dispatchEvent(event);
}