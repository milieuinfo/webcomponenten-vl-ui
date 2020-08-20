import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlSearchResult
 * @class
 * @classdesc Een zoekresultaat als onderdeel van de zoekresultaten.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-search-results/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-search-results/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-search-results.html|Demo}
 */
export class VlSearchResult extends vlElement(HTMLElement) {
  constructor() {
    super(`
      <style>
          @import '/src/style.css';
      </style>
      <li>
        <section class="vl-search-result">
          <h3 class="vl-search-result__title">
            <slot name="title"></slot>
          </h3>
          <p class="vl-search-result__content-group">
            <slot class="vl-search-result__meta-data" name="sub-title"></slot>
          </p>
          <div class="vl-search-result__content-group">
            <slot name="content"></slot>
          </div>
        </section>
      </li>
    `);
  }

  get _classPrefix() {
    return 'vl-search-result';
  }

  get _titleSlotElement() {
    return this._shadow.querySelector('slot[name="title"]');
  }

  get _contentSlotElement() {
    return this._shadow.querySelector('slot[name="content"]');
  }

  connectedCallback() {
    this._setChildClasses();
  }

  _setChildClasses() {
    this._setTitleClasses();
    this._setContentClasses();
  }

  _setTitleClasses() {
    this._titleSlotElement.assignedElements().forEach((element) => {
      element.classList.add(`${this._classPrefix}__title__link`);
    });
  }

  _setContentClasses() {
    this._contentSlotElement.assignedElements().forEach((element) => {
      if (element instanceof HTMLDListElement) {
        const dlClass = `${this._classPrefix}__description-list`;
        element.classList.add(dlClass);
        element.querySelectorAll('dt').forEach((dt) => dt.classList.add(`${dlClass}__description`));
      }
    });
  }
}

define('vl-search-result', VlSearchResult);
