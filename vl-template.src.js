import { VlElement, define } from 'vl-ui-core';

/**
 * VlTemplate
 * @class
 * @classdesc De standaard template voor websites en applicaties van de Vlaamse overheid.
 *
 * @extends VlElement
 *
 * @property {slot} header - header content binnen vl-header
 * @property {slot} main - main content
 * @property {slot} footer - footer content binnen vl-footer
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-template/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-template/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-template.html|Demo}
 */
export class VlTemplate extends VlElement(HTMLElement) {
  constructor() {
    super(`
        <style>
            @import '../style.css';
        </style>
        <slot name="header"></slot>
        <div class="vl-page">
          <main class="vl-main-content">
            <slot name="main"></slot>
          </main>
        </div>
        <slot name="footer"></slot>
    `);
  }
}

define('vl-template', VlTemplate);

