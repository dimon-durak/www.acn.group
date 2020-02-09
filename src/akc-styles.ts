import { css } from 'lit-element'

export const melodyGrid = css`
  .melodyGrid {
    --melody-template:  [start]            7.5fr
                        [ semibiscroma-min] 7.5fr
                        [ biscroma-min]     15fr
                        [Cm semicroma-min] 30fr
                        [Dm octava-min]    20fr
                        [Em sexta-min]     40fr
                        [Fm quarta-min]    40fr
                        [Gm tertia-min]    32fr
                        [Am quinta-min]    24fr
                        [Bm secunda-min]   24fr
                        [H secunda]          24fr
                        [B secunda-maj]    24fr
                        [A quinta-maj]     32fr
                        [G tertia-maj]     40fr
                        [F quarta-maj]     40fr
                        [E sexta-maj]      20fr
                        [D octava-maj]     30fr
                        [C semicroma-maj]  15fr
                        [ biscroma-maj]     7.5fr
                        [ semibiscroma-maj] 7.5fr [end];
    display: grid;
    grid-template-rows: var(--melody-template);
    grid-template-columns: var(--melody-template);
  }`;

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