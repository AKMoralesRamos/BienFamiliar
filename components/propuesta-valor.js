import {html, css, LitElement} from 'lit';

export class PropuestaValor extends LitElement {
    static styles = css ``;

    static properties = {
name: {},
    };

    constructor() {
        super();
        this.name= 'Karen';
    }

    render(){
        return html `Hola, ${this.name}`;
    }
}

customElements.define('propuesta-valor', PropuestaValor);