import {html} from 'lit';
import { ButtonGeneral } from './button-general';

export class ButtonNav extends ButtonGeneral {
    /* static styles = css`
    
    `; */

    static properties = {
label: {type:String},
href:{type:String}
    };

    connectedCallback(){
        super.connectedCallback();
    }

    constructor() {
        super();
this.label="Servicios";
this.href="";
    }

    render(){
    return html`
    <a href=${this.href}>${this.label}</a>
    `;
    }
}

customElements.define("button-nav", ButtonNav);