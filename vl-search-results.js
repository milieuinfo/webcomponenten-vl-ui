import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlSearchResults
 * @class
 * @classdesc De zoekresultaten worden als een lijst met links getoond.
 *
 * @extends HTMLElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-search-results/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-search-results/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-search-results.html|Demo}
 */
export class VlSearchResults extends vlElement(HTMLElement) {
  constructor() {
    super(`
        <style>
            @import '/node_modules/vl-ui-search-results/dist/style.css';
        </style>
        <ul class="vl-search-results">
            <slot></slot>
        </ul>
    `);
  }
}

define('vl-search-results', VlSearchResults);
