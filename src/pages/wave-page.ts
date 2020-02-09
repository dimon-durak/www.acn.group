import { LitElement, customElement, property} from 'lit-element';
export { customElement, html, css, svg, property, query, queryAll } from 'lit-element'

@customElement('wave-page')
export class WavePage extends LitElement {

  @property({ attribute: false }) pathname: string = '';
  @property({ attribute: 'hash' }) hash: string = '';
  @property({ attribute: false }) search: string = '';
  @property({ attribute: false }) searchParams: URLSearchParams | null = null;

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
    console.log(`<${this.tagName}>.onPopstate() search = '${search}' hash = '${this.hash}'`);

    if (pathname.startsWith('/')) this.pathname = decodeURI(pathname);

    if (hash.startsWith('#')) {
      this.hash = decodeURI(hash.slice(1));
      this.setAttribute('hash', this.hash);
    } else {
      this.hash = '';
      this.removeAttribute('hash')
    }

    if (search.startsWith('?')) {
      this.searchParams = new URLSearchParams(search);
    } else {
      this.searchParams = null;
    };
  }

  attributeChangedCallback(name:string, oldVal:string|null, newVal:string|null) {
    if ( name === 'hash' && newVal && newVal !== oldVal) this.scrollToHash();
    super.attributeChangedCallback(name, oldVal, newVal);
    // console.log(`<${this.tagName}.attributeChangedCallback(name = '${name}', oldVal = '${oldVal}', newVal = '${newVal}')>`);
  }

  private scrollToHash() {
    const hash = this.getAttribute('hash');
    const target = this.shadowRoot.getElementById(hash);
    if (hash && target) target.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }

}