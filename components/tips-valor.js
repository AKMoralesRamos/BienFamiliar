import {html, css, LitElement} from 'lit';

export class TipsValor extends LitElement {
static styles = css`
.frame{
    width:100%;
    height:80px;
    margin:80px 0;
    background-color:#266570;
    display:flex;
    align-items:center;
    justify-content:center;
}
p{
    color:#fff;
    font-size: 26px;
}
`;

static properties = {
    message: {type: String}
};

constructor(){
    super();
}

render(){
    return html`
    <div class=frame>
    <p>${this.message}</p>
    </div>
    `;
}
}

customElements.define("tips-valor", TipsValor);

