import { WavePage, customElement, css, html } from './wave-page';
import { melodyGrid } from '../akc-styles';

@customElement('fixies-page')
export class FixiesPage extends WavePage {

  render() { // eslint-disable-line
    return html`
      <main class="melodyGrid">
        <img src="/images/under-construction.svg"/>
        <div class="bar">Сайт на обслуживании</div>
      </main>
      `
  };

  static get styles() {
    return [ melodyGrid,
      css`
        :host {
          --background-fixies: url(/images/backgrounds/fixies.png) top left / cover no-repeat fixed;
          --background-with-opacity: rgba(38, 50, 56, 0.75);
        }
        main {
          height: 100vh;
          background: var(--background-fixies);
        }
        img {
          /* max-width: 10rem; */
          grid-area: Fm/Gm/B/G;
          width: 100%;
          height: 100%;
          margin: auto;
        }
        .bar {
          grid-area: G/Gm/F/G;
          cursor: default;
          font-family: var(--font-family-micra);
          font-weight: 900;
          box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1);
          background-color: #ffe800;
          background: repeating-linear-gradient(45deg, #ffe800, #ffe800 0.5rem, #222 0.5rem, #222 1.0rem);
          color: red;
          padding: 1rem;
          text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, -3px -21px 4px rgba(28, 11, 68, 0);
          text-align: center;
        }
        .bar::selection {
          color: grey;
        }
      `
    ]
  };

}

declare global {
  interface HTMLElementTagNameMap {
    'fixies-page': FixiesPage;
  }
}