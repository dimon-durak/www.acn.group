import { WavePage, customElement, html, property } from './wave-page'
import { getTemplatesForPathname } from '../akc-templates'

@customElement('wave-pages')
export class WavePages extends WavePage {

  @property({ attribute: false }) fixies: boolean = false;

  connectedCallback() {
    super.connectedCallback();
    window.document.addEventListener('click', this.onClick.bind(this), false);
    console.info(`<${this.tagName.toLowerCase()}> connected`);
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    window.document.removeEventListener('click', this.onClick);
    console.info(`<${this.tagName.toLowerCase()}> disconnected`);
  }

  private onClick(event: MouseEvent) {
    // игнорировать, если действие по умолчанию запрещено
    if (event.defaultPrevented) { return; }
    // игнорировать, если не основная кнопка мыши
    if (event.button !== 0) { return; }
    // игнорировать, если нажата клавиша-модификатор
    if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) { return; }

    // определение <a> элемент или нет
    let anchor = event.target;
    const path = event.composedPath
      ? event.composedPath()
      : (event.path || []);
    for (let i = 0; i < path.length; i++) {
      const target = path[i];
      if (target.nodeName && target.nodeName.toLowerCase() === 'a') {
        anchor = target;
        break;
      }
    }
    while (anchor && anchor.nodeName.toLowerCase() !== 'a') {
      anchor = anchor.parentNode;
    }

    // игнорировать, если это не <a> элемент
    if (!anchor || anchor.nodeName.toLowerCase() !== 'a') { return; }
    // игнорировать внешние ссылки (не работает в IE11)
    if (anchor.origin !== window.location.origin) { return; }
    // игнорировать, если клик по <a> который имеет цель не по умолчанию
    if (anchor.target && anchor.target.toLowerCase() !== '_self') { return; }
    // игнорировать, если цель указывает на фрагмент текущей страницы
    if (anchor.pathname === window.location.pathname && anchor.hash !== '') { return; }
    // игнорировать <a> с атрибутом 'download'
    if (anchor.hasAttribute('download')) { return; }
    // игнорировать, если <a> с атрибутом 'router-ignore'
    if (anchor.hasAttribute('router-ignore')) { return; }

    // добавляет событие в историю
    const { pathname, search, hash } = anchor;

    if (window.location.pathname !== pathname
        || window.location.search !== search
        || window.location.hash !== hash
    ) {
      window.history.pushState(null, document.title, pathname + search + hash);
    }

    this.pathname = pathname;
    this.hash = hash;
    this.search = search;
    console.log(`<${this.tagName}>.onClick() search = '${search}' hash = '${this.hash}'`);

    event.preventDefault();

  }

  render() { // eslint-disable-line
    const { fixies, pathname } = this;
    if ( fixies ) return html`<fixies-page></fixies-page>`;

    const { header, left, main, right, footer } = getTemplatesForPathname(pathname);
    return html`${ header }${ left }${ main }${ right }${ footer }`;
  };

}

declare global {
  interface HTMLElementTagNameMap {
    'wave-pages': WavePages;
  }
}