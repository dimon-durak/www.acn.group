import { LitElement, customElement, css, html, property } from 'lit-element'
import '../ui/wave-form.js';
import '../ui/wave-input.js';

@customElement('form-page')
export class FormPage extends LitElement {

  @property({ attribute: false }) hash: string = '';
  @property({ attribute: false }) caption: string = '';
  @property({ attribute: false }) formAction: string = 'https://docs.google.com/forms/d/e/1FAIpQLSckJsC9fEs1jnysOdiuPTlvQt8wLCGpnisOMGYK4uFOU-AXbQ/formResponse'

  private formSubmit(event:Event) {
    console.log(`<${this.tagName}>.formSubmit() event:\n\t`, event)
  }

  render() {
    return html`
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
    </wave-form>`
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
        wave-form {
          padding: 1rem;
          margin: auto;
          border: 1px solid rgba(121,121,0, 0.35);
          max-width:21rem;
          /* background: rgba(0,0,121, 0.21); */
        }
        wave-form-item {
          /* min-width: 100%; */
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