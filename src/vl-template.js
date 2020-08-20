import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlTemplate
 * @class
 * @classdesc De standaard template voor websites en applicaties van de Vlaamse overheid.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {slot} header - header content binnen vl-header
 * @property {slot} main - main content
 * @property {slot} footer - footer content binnen vl-footer
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-template/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-template/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-template.html|Demo}
 */
export class VlTemplate extends vlElement(HTMLElement) {
  constructor() {
    super(`
      <style>
        @import '/src/style.css';
      </style>
      <div class="vl-u-sticky-gf">
        <slot name="header"></slot>
        <div class="vl-page">
          <main class="vl-main-content">
            <slot name="main"></slot>
          </main>
        </div>
        <slot name="footer"></slot>
      </div>
    `);
  }
}

define('vl-template', VlTemplate);
