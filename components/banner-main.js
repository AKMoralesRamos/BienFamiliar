import {html, css, LitElement} from 'lit';

export class BannerMain extends LitElement {
    static styles= css`
    .main{
        max-width: 1500px;
        width:100%;
        height: 500px;
        margin: 0 auto;
        background: blue;
    }`;

    static properties = {

    }

    constructor() {
        super();
    }

    render(){
        return html`
        <div class="main">
            <img src=".">
            <p>hola</p>
        </div>
        `;
    }
}
customElements.define("banner-main", BannerMain);