import { html, render } from "https://unpkg.com/lit-html@1.2.1?module";

export function renderHello(rootE) {
  render(html`<b>hello</b> world 2`, rootE);
}
