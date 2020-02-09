import { WavePage, customElement, css, html, property } from './wave-page'
import { melodyGrid } from '../akc-styles';
import '../ui/wave-form.js';
import '../ui/wave-input.js';

@customElement('form-page')
export class FormPage extends WavePage {

  @property({ attribute: false }) caption: string | null = '';
  @property({ attribute: false }) formAction: string = 'https://docs.google.com/forms/d/e/1FAIpQLSckJsC9fEs1jnysOdiuPTlvQt8wLCGpnisOMGYK4uFOU-AXbQ/formResponse'

  private formSubmit(event:Event) {
    console.log(`<${this.tagName.toLowerCase()}>.formSubmit() event:\n\t`, event)
  }

  render() {  // eslint-disable-line
    if (this.searchParams?.has('name')) this.caption = this.searchParams.get('name');

    return html`
      <section class="melodyGrid">
        <h2>${this.caption}</h2>
        <wave-form action="${this.formAction}" method="POST">
          <wave-form-item legend="Имя">
            <wave-input name="entry.1862052088" required placeholder="ваше имя"></wave-input>
          </wave-form-item>
          <wave-form-item legend="Email">
            <wave-input name="entry.1602338057" id="email" required type="text" placeholder="mail@example.com"></wave-input>
          </wave-form-item>
          <wave-form-item legend="Телефон">
            <wave-input name="entry.769913650" id="tel" type="text" placeholder="+7-959-123-45-67"></wave-input>
          </wave-form-item>
          <wave-form-item legend="Сообщение">
            <wave-textarea name="entry.686125330" required></wave-textarea>
          </wave-form-item>
          <wave-form-item>
            <wave-button type="primary" htmltype="submit" @click="${this.formSubmit}">Отправить</wave-button>
            <wave-button htmltype="reset">Сброс</wave-button>
          </wave-form-item>
        </wave-form>
      </section>`
  };

  static get styles() {
    return [ melodyGrid,
      css`
        :host {
          --fontColor: var(--color);
        }
        h2 {
          grid-area: Dm/Em/Gm/D;
          text-align: center;
        }
        wave-form {
          grid-area: Gm/Em/D/B;
          border: 1px solid rgba(121,121,0, 0.35);
          /* max-width:21rem; */
        }


      `
    ]
  };

}

declare global {
  interface HTMLElementTagNameMap {
    'form-page': FormPage;
  }
}