import { LitElement, customElement, html, property } from 'lit-element'
import { getTemplatesForPathname } from './akc-templates'
import { pageConstants } from './akc-styles';

@customElement('akc-pages')
export class AkcPages extends LitElement {

  static get styles() {
    return [ pageConstants ]
  };

  @property({ attribute: false }) pathname: string = '';
  @property({ attribute: false }) hash: string = '';
  @property({ attribute: false }) search: string = '';
  @property({ attribute: false }) fixies: boolean = false;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('popstate', this.onPopstate.bind(this), false);
    this.onPopstate();
    console.info(`<${this.tagName}> connected`);
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('popstate', this.onPopstate);
    console.info(`<${this.tagName}> disconnected`);
  }

  private onPopstate() {
    const { pathname = '', hash = '', search = '' } = document.location;
    console.log(`<${this.tagName}.onPopstate()> \n\tpathname: ${pathname}\thash: ${hash}\tsearch: ${search}`);

    if (pathname.startsWith('/')) this.pathname = decodeURI(pathname);
    if (hash.startsWith('#')) this.hash = decodeURI(hash.slice(1));
    if (search.startsWith('?')) {
      let searchString = decodeURI(search.slice(1));
      console.log(searchString);
      this.search = searchString
    } else {
      this.search = '';
    };

  }

  render() { // eslint-disable-line
    let { fixies, pathname, hash, search } = this;
    console.log(`<${this.tagName}.render()> \n\tpathname: ${pathname}\thash: ${hash}\tsearch: ${search}`);

    if ( fixies ) pathname = '~fixies~';
    const { header, left, main, right, footer } = getTemplatesForPathname(pathname);
    return html`${ header }${ left }${ main }${ right }${ footer }`;
  };

}

declare global {
  interface HTMLElementTagNameMap {
    'akc-pages': AkcPages;
  }
}