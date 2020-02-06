import { css } from 'lit-element'

export const pageConstants = css`
  :host {
    --width: 100%;
    --height: 100%;
    --gap: 0.1rem;
    --padding: 0;
    --margin: 0;

    --page-background: var(--background);
    --header-background: transpatent;
    /* --main-background: transpatent; */
    /* --left-background: transpatent; */
    --right-background: transpatent;
    --footer-background: transpatent;

    --page-color: var(--color);
    --header-color: var(--color);
    --main-color: var(--color);
    --left-color: var(--color);
    --right-color: var(--color);
    --footer-color: var(--color);

    --header-padding: var(--padding);
    --main-padding: var(--padding);/* var(--padding); */
    --left-padding: var(--padding);
    --right-padding: var(--padding);
    --footer-padding: var(--padding);

    --header-magrin: var(--margin);
    --main-magrin: var(--margin);
    --left-magrin: var(--margin);
    --right-magrin: var(--margin);
    --footer-magrin: var(--margin);

    --page-font: var(--font);
    --header-font: var(--font);
    --main-font: var(--font);
    --left-font: var(--font);
    --right-font: var(--font);
    --footer-font: var(--font);
}`;

export const accent = css`
  .accent {
    color: var(--accent-color, red);
  }
`;
