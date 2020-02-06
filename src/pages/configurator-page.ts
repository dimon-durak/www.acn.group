import { LitElement, customElement, css, html, property } from 'lit-element'

@customElement('configurator-page')
export class ConfiguratorPage extends LitElement {

  @property({ attribute: false }) caption: string = '';


  render() {
    return html`
      
    `
  };



}

declare global {
  interface HTMLElementTagNameMap {
    'configurator-page': ConfiguratorPage;
  }
}