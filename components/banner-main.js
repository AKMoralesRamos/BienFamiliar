import { LitElement, html, css } from "lit";

export class BannerMain extends LitElement {
  static styles = css`
    /* @media screen and (min-width: 622){ */
    .main {
      max-width: 1500px;
      width: 100%;
      height: auto;
      margin: 0 auto;
      display: flex;
      position: relative;
    }

    .image-container {
      flex: 1;
      position: relative;
    }

    .image {
      width: 100%;
      min-height: 500px;
      max-height: 500px;
      object-fit: cover;
    }

    .front {
      width: 60%;
      min-height: 500px;
      background-color: rgba(38, 101, 112, 0.46);
      position: absolute;
      top: 0;
      left: 40%;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: inherit;
    }

    h2 {
      color: white;
      text-align: center;
      padding: 15%;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    .arrow-container {
      width: 90px;
      position: absolute;
      top: 0;
      left: 40%;
      background-color: #266570bb;
      min-height: 500px;
      max-height: 500px;
      display: flex;
      justify-content: center;
      align-items: end;
      z-index: 2;
    }

    .arrow {
      width: 70%;
      /*   min-height: auto;
      max-height: auto;
      object-fit: cover; */
      font-weight: bold;
      bottom: 300px;
      margin-bottom: 140px;
    }

    .btn {
      width: 140px;
      height: 50px;
      border-radius: 10px;
      background-color: #ff2768;
      box-shadow: 1px 1px 1px rgba(255, 39, 104, 0.4);
      transition: box-shadow 0.1s ease;
      border: none;
      color: #fff;
      font-weight: bold;
      position: absolute;
      bottom: 140px;
      /* cursor:pointer; */
      left: 20%;
    }

    //}
    /* @media screen and (min-width: 622) and (max-width:1000){

#cc {
width: 100%;

} 

.arrow-container {
position: absolute;
background-color: #ff2768;
}

.arrow-container .arrow {
display: none;
}
} */
  `;

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="main">
        <div class="image-container">
          <img class="image" src="../public/consul.PNG" alt="Consul Image" />
        </div>
        <div class="front" id="cc">
          <h2>
            Ponemos nuestro granito de arena para ayudar a la comunidad...
            ¡Conócenos!
          </h2>
          <button class="btn" type="submit">Agenda una cita</button>
        </div>
        <div class="arrow-container">
          <img class="arrow" src="../public/flecha.png" />
        </div>
      </div>
    `;
  }
}

customElements.define("banner-main", BannerMain);
