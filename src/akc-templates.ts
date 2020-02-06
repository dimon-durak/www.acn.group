import { html, TemplateResult } from 'lit-element'

type pathname = string;

type pageTemplates = {
  header: TemplateResult,
  left: TemplateResult,
  main: TemplateResult,
  right: TemplateResult,
  footer: TemplateResult,
}

export const emptyTemplate = html``;

export function getTemplatesForPathname(path: pathname): pageTemplates  {
  let pathPrev = path.split('/');
  pathPrev.splice(-2, 1);
  const prev = pathPrev.join('/');

  const result = {
    header: templates.get(`~header~${path}`) || templates.get(`~header~`) || emptyTemplate,
    footer: templates.get(`~footer~${path}`) || templates.get(`~footer~`) || emptyTemplate,
    right: templates.get(`~right~${path}`) || templates.get(`~right~${prev}`) || emptyTemplate,
    left: templates.get(`~left~${path}`) || templates.get(`~left~`) || emptyTemplate,
    main: templates.get(`~main~${path}`) || templates.get('~404~') || emptyTemplate,
  };

  return result
}

const templateMap: [pathname,TemplateResult][] = [
  // Служебные шаблоны. ( ~pathname~ )
  // ~404~
  [
    '~404~',
    html`
      <main><h4>Страница не&nbsp;найдена</h4></main>
      <style>
        :host {
          --background: url(/images/backgrounds/404-4.jpg) bottom right / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
          --left-width: 2rem;
          --right-width: 2rem;
          --footer-height: 2rem;
        }
        #logo {
          padding-left: 2rem;
        }
        main {
          border: 1px solid var(--primary-color, grey);
        }
        aside,footer {
          display: none;
        }
        h4 {
          position: absolute;
          top:47%;
          left:10%;
          /* margin: 2.22rem; */
          font-size:2rem;
          color: orange;
          user-select: none;
        }
      </style>`
  ],
  // ~fixies~
  [
    '~main~~fixies~',
    html`
      <main>
        <img src="/images/under-construction.svg"/>
        <div class="bar">Сайт на обслуживании</div>
      </main>
      <style>
        :host {
          --background: url(/images/backgrounds/fixies.png) top left / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, grey);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          justify-content: space-around;
        }
        header,aside,footer {
          display: none;
        }
        img {
          max-width: 10rem;
        }
        .bar {
          cursor: default;
          box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1);
          background-color: #ffe800;
          background: repeating-linear-gradient(45deg, #ffe800, #ffe800 0.5rem, #222 0.5rem, #222 1.0rem);
          min-height: 2.5rem;
          width: 90%;
          max-width: 30rem;
          color: red;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 200%;
          text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, -3px -21px 4px rgba(28, 11, 68, 0);
          text-transform: uppercase;
          text-align: center;
        }
        .bar::selection {
          color: grey;
        }
      </style>`
  ],
  // ~header~
  [
    '~header~',
    html`
      <header>
        <a href="/"><img id="logo" src="/images/logo.svg"/></a>
      </header>`
  ],
  // ~left~
  [
    '~left~',
    html`
        <akc-nav></akc-nav>
    `
  ],
  // ~footer~
  [
    '~footer~',
    emptyTemplate
  ],
  // Главная Индексная Страница '/'
  [
    '~main~/',
    html`
      <index-page></index-page>
      `,
    // html`
    //   <main>
    //     <h1>Добро пожаловать</h1>
    //     <div>тут можно сделать слайдшоу с анимацией, а также убрать боковые панели</div>
    //   </main>`
  ],
  [
    '~left~/',
    emptyTemplate
  ],

  // О компании '/about/'
  [
    '~main~/about/',
    html`
      <main><h1>тут будет раздел <span class="accent">О компании</span></h1></main>`
  ],
  // [
  //   '~left~/about/',
  //   html`
  //     <aside id="left">
  //       <nav class="vertical">
  //         <a href="/about/#publicdoc">Публичные документы</a>
  //         <a href="/about/#protection">Защита персональных данных </a>
  //       </nav>
  //     </aside>`
  // ],
  // Контакты '/contact/'
  [
    '~main~/contact/',
    html`
      <main><h1><span class="accent">Контакты</span></h1></main>`
  ],
  // [
  //   '~left~/contact/',
  //   html`
  //     <aside id="left">
  //       <nav class="vertical">
  //         <a href="/contact/#company-details">Реквизиты</a>
  //         <a href="/contact/#map">Карта</a>
  //       </nav>
  //     </aside>`
  // ],
  // Форма обратной связи /form/'
  [
    '~main~/form/',
    html`
      <main><form-page .caption=${ 'Ваш вопрос'}></form-page></main>
      <style>
        :host {
          --background: url(/images/backgrounds/ddos.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
        }
        main {
          border: 1px solid var(--primary-color, grey);
        }
        #right > nav {
          display: none;
        }
      </style>`
  ],
  // Новости '/news/'
  [
    '~main~/news/',
    html`
      <main>
        <h1><span class="accent">Новости</span></h1>
      </main>
      <style>
        :host {
          --background: url(/images/backgrounds/news.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, grey);
        }
      </style>`
  ],
  // [
  //   '~left~/news/',
  //   html`
  //     <aside id="left">
  //       <nav class="vertical">
  //         <a href="/news/#s2019e1113">Новость от 13&nbsp;ноября</a>
  //         <a href="/news/#s2019e1221">Новость от 21&nbsp;декабря</a>
  //       </nav>
  //     </aside>`
  // ],
  // Услуги '/services/'
  [
    '~main~/services/',
    html`
      <main><h1><span class="accent">Услуги</span></h1></main>`
  ],
  // [
  //   '~left~/services/',
  //   html`
  //     <aside id="left">
  //       <nav class="vertical">
  //         <a href="/services/internet/">Интернет</a>
  //         <a href="/services/iptv/">IPTV</a>
  //         <a href="/services/cctv/">Видеонаблюдение</a>
  //         <a href="/services/sks/">Кабельные сети</a>
  //         <a href="/services/hosting/">Хостинг</a>
  //         <a href="/services/lir/">LIR</a>
  //         <a href="/services/fiber/">Работа с оптикой</a>
  //       </nav>
  //     </aside>`
  // ],
  // Услуги - Интернет
  [
    '~main~/services/internet/',
    html`
      <main>
        <h1><span class="accent">{ Услуги }</span>Подключение к сети Интернет</h1>
        <h4>Мы делаем связность</h4>
      </main>`
  ],
  // [
  //   '~left~/services/internet/',
  //   html`
  //     <aside id="left">
  //       <nav class="vertical" style="margin-bottom:1rem;">
  //         <a href="/services/">наверх</a>
  //       </nav>
  //       <nav class="vertical">
  //         <a href="/services/internet/private/">Для частника</a>
  //         <a href="/services/internet/business/">Для предприятий</a>
  //         <a href="/services/internet/tariffs/">Тарифы</a>
  //         <a href="/services/internet/technologies/">Технологии</a>
  //       </nav>
  //     </aside>`
  // ],
  // Доступ в Интернет для частных пользователей
  [
    '~main~/services/internet/private/',
    html`
      <main>
        <h2>Подключение к сети Интернет <span class="accent">частных лиц</span></h2>
      </main>`
  ],
  // Доступ в интернет для бизнеса
  [
    '~main~/services/internet/business/',
    html`
      <main>
        <h1><span class="accent">{ Услуги }</span>Подключение к сети Интернет <span class="accent">предприятия</span></h1>
        <h4>Расписать предложения для бизнеса</h4>
      </main>`
  ],
  // [
  //   '~left~/services/internet/business/',
  //   html`
  //     <aside id="left">
  //       <nav class="vertical" style="margin-bottom:1rem;">
  //         <a href="/services/internet/">наверх</a>
  //       </nav>
  //       <nav class="vertical">
  //         <a href="/services/internet/business/analytics/">Аналитика</a>
  //         <a href="/services/internet/business/l2vlan/">l2vlan</a>
  //         <a href="/services/internet/business/l2vpn/">l2vpn</a>
  //       </nav>
  //     </aside>`
  // ],
  [
    '~main~/services/internet/business/analytics/',
    html`
      <main>Анализ производительности и защиты сети</main>`
  ],
  [
    '~main~/services/internet/business/l2vlan/',
    html`
      <main>Аренда каналов связи <span class="accent">L2VLAN</span></main>`
  ],
  [
    '~main~/services/internet/business/l2vpn/',
    html`
      <main>Аренда каналов связи <span class="accent">L2VPN</span></main>`
  ],
  // Тарифы на  доступ в Интернет
  [
    '~main~/services/internet/tariffs/',
    html`
      <main>
        <h1><span class="accent">Тарифы</span></h1>
      </main>`
  ],
  // Технологии доступа в Интернет
  [
    '~main~/services/internet/technologies/',
    html`
      <main>
        <h1><span class="accent">Технологии доступа</span></h1>
      </main>`
  ],
  // [
  //   '~left~/services/internet/technologies/',
  //   html`
  //     <aside id="left">
  //       <nav class="vertical" style="margin-bottom:1rem;">
  //         <a href="/services/internet/">наверх</a>
  //       </nav>
  //       <nav class="vertical">
  //         <a href="/services/internet/technologies/gepon/">Gepon</a>
  //         <a href="/services/internet/technologies/ftth/">FTTH</a>
  //         <a href="/services/internet/technologies/cover/">Покрытие</a>
  //       </nav>
  //     </aside>`
  // ],
  [
    '~main~/services/internet/technologies/gepon/',
    html`
      <main>Что такое Gepon</main>`
  ],
  // [
  //   '~left~/services/internet/technologies/gepon/',
  //   html`
  //     <aside id="left">
  //       <nav class="vertical" style="margin-bottom:1rem;">
  //         <a href="/services/internet/technologies/">наверх</a>
  //       </nav>
  //       <nav class="vertical">
  //         <a href="/services/internet/technologies/gepon/#equipment">Оборудование</a>
  //         <a href="/services/internet/technologies/gepon/#1pc">1 ПК</a>
  //         <a href="/services/internet/technologies/gepon/#4pc">4 ПК</a>
  //         <a href="/services/internet/technologies/gepon/#switch">Свитч</a>
  //         <a href="/services/internet/technologies/gepon/#router">Роутер</a>
  //         <a href="/services/internet/technologies/gepon/#wifi-router">WiFi-роутер</a>
  //       </nav>
  //     </aside>`
  // ],
  [
    '~main~/services/internet/technologies/ftth/',
    html`
      <main>Полноценная оптика</main>`
  ],
  // [
  //   '~left~/services/internet/technologies/ftth/',
  //   html`
  //     <aside id="left">
  //       <nav class="vertical" style="margin-bottom:1rem;">
  //         <a href="/services/internet/technologies/">наверх</a>
  //       </nav>
  //       <nav class="vertical">
  //         <a href="/services/internet/technologies/ftth/#equipment">Оборудование</a>
  //         <a href="/services/internet/technologies/ftth/#1pc">1 ПК</a>
  //         <a href="/services/internet/technologies/ftth/#4pc">4 ПК</a>
  //         <a href="/services/internet/technologies/ftth/#switch">Свитч</a>
  //         <a href="/services/internet/technologies/ftth/#media">Медиаконвертер</a>
  //         <a href="/services/internet/technologies/ftth/#wifi-media">WiFi</a>
  //       </nav>
  //     </aside>`
  // ],
  [
    '~main~/services/internet/technologies/cover/',
    html`
      <main>Карта покрытия</main>`
  ],
  // Услуги - IPTV
  [
    '~main~/services/iptv/',
    html`
      <main>Здесь всё о IPTV</main>
      <style>
        :host {
          --background: url(/images/backgrounds/iptv.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
        #right > nav {
          display: none;
        }
      </style>
      `
  ],
  // Услуги - Видеонаблюдение
  [
    '~main~/services/cctv/',
    html`
      <main>Здесь всё о <span class="accent">Видеонаблюдении</span></main>
      <style>
        :host {
          --background: url(/images/backgrounds/cctv.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  // [
  //   '~left~/services/cctv/',
  //   html`
  //     <aside id="left">
  //       <nav class="vertical" style="margin-bottom:1rem;">
  //         <a href="/services/">наверх</a>
  //       </nav>
  //       <nav class="vertical">
  //         <a href="/services/cctv/local/">Локально</a>
  //         <a href="/services/cctv/cloud/">Облачно</a>
  //         <a href="/services/cctv/installation/">Установка</a>
  //         <a href="/services/cctv/price/">Цены</a>
  //       </nav>
  //     </aside>`
  // ],
  [
    '~main~/services/cctv/local/',
    html`<main>Что такое локальное видеонаблюдения</main>
      <style>
        :host {
          --background: url(/images/backgrounds/cctv-local.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  [
    '~main~/services/cctv/cloud/',
    html`<main>Что такое видеонаблюдение в облаке</main>
      <style>
        :host {
          --background: url(/images/backgrounds/cctv-clowd.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  [
    '~main~/services/cctv/installation/',
    html`<main>Разработка и установка систем видеонаблюдения</main>
      <style>
        :host {
          --background: url(/images/backgrounds/cctv-installation.jpg) center / 100% auto no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  [
    '~main~/services/cctv/price/',
    html`<main>А тут цены на использование видеонаблюдения</main>`
  ],
  // Услуги - СКС
  [
    '~main~/services/sks/',
    html`<main>СКС - структурированные кабельные сети</main>
      <style>
        :host {
          --background: url(/images/backgrounds/sks.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
        #right > nav {
          display: none;
        }
      </style>`
  ],
  // Услуги - Хостинг
  [
    '~main~/services/hosting/',
    html`<main>Поговорим о хостинге</main>
    <style>
        :host {
          --background: url(/images/backgrounds/hosting.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  // [
  //   '~left~/services/hosting/',
  //   html`
  //     <aside id="left">
  //       <nav class="vertical" style="margin-bottom:1rem;">
  //         <a href="/services/">наверх</a>
  //       </nav>
  //       <nav class="vertical">
  //         <a href="/services/hosting/vps/">VPS</a>
  //         <a href="/services/hosting/vds/">VDS</a>
  //         <a href="/services/hosting/colocation/">Colocation</a>
  //         <a href="/services/hosting/web/">Web</a>
  //       </nav>
  //     </aside>`
  // ],
  [
    '~main~/services/hosting/vps/',
    html`<main>VPS</main>
    <style>
        :host {
          --background: url(/images/backgrounds/hosting-vps.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  [
    '~main~/services/hosting/vds/',
    html`<main>VDS</main>
    <style>
        :host {
          --background: url(/images/backgrounds/hosting-vds.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  [
    '~main~/services/hosting/colocation/',
    html`<main>Colocation</main>
    <style>
        :host {
          --background: url(/images/backgrounds/hosting-colocation.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  [
    '~main~/services/hosting/web/',
    html`<main>Web-хостинг</main>
    <style>
        :host {
          --background: url(/images/backgrounds/hosting-web.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  // Услуги - LIR
  [
    '~main~/services/lir/',
    html`<main>Кто такой LIR?</main>
    <style>
        :host {
          --background: url(/images/backgrounds/lir.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
        #right > nav {
          display: none;
        }
      </style>
    `
  ],
  // Услуги - Работы с оптикой
  [
    '~main~/services/fiber/',
    html`<main>Работы с ВОЛС </main>
      <style>
        :host {
          --background: url(/images/backgrounds/fiber-main.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  // [
  //   '~left~/services/fiber/',
  //   html`
  //     <aside id="left">
  //       <nav class="vertical" style="margin-bottom:1rem;">
  //         <a href="/services/">наверх</a>
  //       </nav>
  //       <nav class="vertical">
  //         <a href="/services/fiber/design/">Проектирование</a>
  //         <a href="/services/fiber/splicer/">Сварка</a>
  //         <a href="/services/fiber/reflectometry/">Измерения</a>
  //         <a href="/services/fiber/installation/">Монтаж</a>
  //       </nav>
  //     </aside>`
  // ],
  [
    '~main~/services/fiber/design/',
    html`<main>Проектирование ВОЛС</main>
      <style>
        :host {
          --background: url(/images/backgrounds/fiber-design.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  [
    '~main~/services/fiber/splicer/',
    html`<main>Сварка ВОЛС</main>
      <style>
        :host {
          --background: url(/images/backgrounds/fiber-splicer.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  [
    '~main~/services/fiber/reflectometry/',
    html`<main>Измерения ВОЛС (рефлектометрия и оптометрия)</main>
      <style>
        :host {
          --background: url(/images/backgrounds/fiber-reflectometry.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ],
  [
    '~main~/services/fiber/installation/',
    html`
      <main>
        <h3>Монтаж ВОЛС</h3>
        <ul>
          <li>подвес ВОЛС</li>
          <li>телефонная канализация</li>
          <li>прокладка барой в грунт</li>
          <li>прокол установкой ГНБ</li>
        </ul>
      </main>
      <style>
        :host {
          --background: url(/images/backgrounds/fiber-installation.jpg) center / cover no-repeat fixed;
          --main-background: rgba(0,0,0, 0.75);
          --padding: 2rem;
          --footer-width: 100%;
        }
        main {
          border: 1px solid var(--primary-color, red);
        }
      </style>`
  ]
];

const templates = new Map<pathname, TemplateResult>(templateMap);