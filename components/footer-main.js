import { html, css, LitElement } from "lit";

export class FooterMain extends LitElement {
  static styles = css`
    .main {
      max-width: 1500px;
      width: 100%;
      min-height: 300px;
      margin: 0 auto;
      background-color: #ff2768;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
    }
    p {
      color: #fff;
    }
    img {
      width: 25px;
      height: 25px;
      padding: 10px 5px;
    }
    .box {
      display: grid;
      grid-template-columns: 1fr;
      padding: 0 30px;
    }
    .icon-text {
      display: flex;
    }
    .second-box {
        width:100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 0;
    }
    .legend {
      display: grid;
      grid-column-start: 2;
      grid-column-end: span 2;
    }
    b {
      padding: 20px;
    }
    img .logo {
      width: 100px;
      display: "flex";
      flex-direction: column;
      justify-content: end;
      align-items: end;
    }
    .logo-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 50px 20px;
    }
    #logo {
      width: 190px;
      height: 124px;
    }
    @media screen and (max-width: 620px) {
  .main {
    display:flex;
    flex-direction: column;
  }
  .box{
    width:90%;
  
  }
  .main .second-box {
    width:90%;
    padding:10px;
  }
  .logo-container {
   height:2px;
  }
  #logo {
      width: 150px;
      height: 90px;
    }
}
  `;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html` <div class="main">
      <div class="box">
        <p><b>CONTÁCTANOS</b></p>
        <section class="icon-text">
          <img src="../public/phone-w.png" />
          <p>5541126754</p>
        </section>
        <section class="icon-text">
          <img src="../public/location-w.png" />
          <p>Av. Zacatlán 7, Pueblo de San Lorenzo, 09790.</p>
        </section>
        <section class="icon-text">
          <img src="../public/email-w.png" />
          <p>dental.morak@gmail.com</p>
        </section>
      </div>
      <div class="second-box media">
        <p class="title"><b>Horarios de atención</b></p>
        <section class="icon-text">
          <img src="../public/calendar-w.png" />
          <p>Lunes a Viernes 11am a 7pm</p>
        </section>
        <p><b>Síguenos en redes</b></p>
        <section class="icon-text">
          <img src="../public/facebook.png" />
          <img src="../public/instagram.png" />
        </section>
      </div>
      <div class="logo-container">
        <img id="logo" src="../public/logo-w.png" />
      </div>
      <p class="legend">
        Todos los derechos reservados © 2024 Dental Bienestar Familar.
      </p>
    </div>`;
  }
}
customElements.define("footer-main", FooterMain);
