import { WavePage, customElement, css, html } from './wave-page';
import { melodyGrid } from '../akc-styles';

@customElement('index-page')
export class IndexPage extends WavePage {

  render() { // eslint-disable-line
    return html`
      <main>
        <nav>
          <a href="#кто">Кто?</a>
          <a href="#что">Что?</a>
          <a href="#где">Где?</a>
          <a href="#" >Когда?</a>
          <a href="/form/?type=заявка&name=Нолик">Заявка</a>
        </nav>
        <section id="кто" class="melodyGrid">
          <h2  style="grid-area:Dm/Em/Gm/D;">Добро пожаловать - Welcome</h2>
          <div style="grid-area:Gm/Em/D/B;">
            <h3>Кто мы?</h3>
            <p>Мы - молодая, динамично развивающаяся компания, которой уже не нужен степлер в&nbsp;аренду.</p>
            <p>Мы - команда профессионалов, практикующих индивидуальный подход к каждому клиенту. И&nbsp;это правда, ведь все люди разные.</p>
            <p>А сейчас у нас стартап, поэтому всё будет, но&nbsp;не сразу...</p>
          </div>
          <picture style="grid-area:Gm/A/G/D;" title="Молодая и динамичная компания профессионалов">
            <img src="images/index/young-and-dynamic.jpg" alt="Молодая и динамичная компания профессионалов">
          </picture>
        </section>


        <section id="что" class="melodyGrid">
          <div style="grid-area:Gm/Dm/C/B;">
            <h3>Что мы делаем?</h3>
            <p>Наш стартап, как положено, высокотехнологичный, но&nbsp;слегка более реальный.</p>
            <p>
              Мы повышаем компьютерную связность, причём делаем это используя надёжные и современные практики и компоненты.
              Как бы громко это не звучало...
            </p>
            <p>
              Мы строим оптоволоконную сеть в городе, а&nbsp;это&nbsp;значит, что если сейчас у нас нет
              технической возможности подключить вас, то в&nbsp;будущем это изменится</p>
          </div>
          <picture style="grid-area:1/1/21/21;" title="Молодая и динамичная компания профессионалов">
            <img src="images/index/young-and-dynamic.jpg" alt="Молодая и динамичная компания профессионалов">
          </picture>

        </section>

        <section id="где" class="melodyGrid">

        </section>
      </main>
      `
  };

  static get styles() {
    return [ melodyGrid,
      css`
        :host {
          --fontColor: var(--secondary-color);
          --link-color: var(--primary-color);
          --background-with-opacity: rgba(38, 50, 56, 0.75);
        }
        #кто,
        #что,
        #где {
          height: 100vh;
          outline:1px solid navajowhite;
        }
        #что {
          background: var(--background);
        }
        #что div {
          background-color: var(--background-with-opacity);
          border-radius: 1rem;
          padding: 1rem;
        }
        div {
          overflow-y: auto;
        }
        h2 {
          text-align: center;
          margin:0;
          font-size: 2.22rem;
          color: var(--fontColor);
          font-family: var(--font-family-header);
        }
        h3 {
          margin-top: 0;
          color: var(--fontColor);
        }
        main>nav {
          position: fixed;
          left: 0.5rem;
          top: 50%;
          background-color: var(--background-with-opacity);
          border:1px solid var(--secondary-color);
          border-radius:0.5rem;
          z-index:10;
        }
        main>nav a {
          display:block;
          padding:0.2rem 0.5rem ;
          font: var(--font);
          color: var(--link-color);
        }
        div {
          color: var(--color);
          font: var(--font);
          z-index:2;

        }
        picture {
          overflow: hidden;
          z-index:1;
        }
        img {
          width: 100%;
          height: 100%;
        }
      `
    ]
  };

}

declare global {
  interface HTMLElementTagNameMap {
    'index-page': IndexPage;
  }
}