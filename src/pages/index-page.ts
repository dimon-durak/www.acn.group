import { LitElement, customElement, css, html, property } from 'lit-element'

@customElement('index-page')
export class IndexPage extends LitElement {

  @property({ attribute: false }) hash: string = '';
  @property({ attribute: false }) caption: string = '';

  render() {
    return html`
      <h2>${this.hash}</h2>
      <nav>
        <a href="#who">Кто мы? </a>
        <a href="#what">Что мы делаем? </a>
        <a href="#where">Где мы? </a>
        <a href="/news/#s2019e1221">Новость от 21&nbsp;декабря</a>
      </nav>
      `
  };

  static get styles() {
    return [
      css`
        :host {
          --fontColor: var(--color);
        }
        h2 {
          text-align: center;
        }
        nav a {
          display:block
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