import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/@govflanders/vl-ui-util/dist/js/util.js';
import '/node_modules/vl-ui-info-tile/lib/accordion.js';

/**
 * VlInfoTile
 * @class
 * @classdesc
 *
 * @extends HTMLElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-info-tile/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-info-tile/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-info-tile.html|Demo}
 *
 */
export class VlInfoTile extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['toggleable'];
  }

  constructor() {
    super(`
      <style>
        @import '/node_modules/vl-ui-info-tile/dist/style.css';
        @import '/node_modules/vl-ui-accordion/dist/style.css';
      </style>
      <div class="vl-info-tile js-vl-accordion">
        <header class="vl-info-tile__header" role="presentation">
          <div class="vl-info-tile__header__wrapper">
            <button class="vl-toggle vl-link vl-link--bold js-vl-accordion__toggle">
              <i class="vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
              <h3 class="vl-info-tile__header__title">
                <slot name="title"></slot><slot name="title-label"></slot>
              </h3>
            </button>
            <p class="vl-info-tile__header__subtitle">
              <slot name="subtitle"></slot>
            </p>
          </div>
        </header>

        <div class="vl-info-tile__content">
          <slot name="content"></slot>
        </div>

        <footer class="vl-info-tile__footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    `);
  }

  /**
   * Geeft terug of de info-tile togglebaar is.
   * @return {boolean}
   */
  get isToggleable() {
    return this.getAttribute('toggleable') != undefined;
  }

  /**
   * Geeft terug of de info-tile geopend is.
   * @return {boolean}
   */
  get isOpen() {
    if (this.isToggleable) {
      return this._element.classList.contains('js-vl-accordion--open');
    } else {
      return true;
    }
  }

  /**
   * Toggle de info-tile om deze te openen of sluiten.
   */
  toggle() {
    this._toggleElement.click();
  }

  get _toggleElement() {
    return this._shadow.querySelector('.js-vl-accordion__toggle');
  }

  get _subtitleElement() {
    return this._shadow.querySelector('slot[name="subtitle"]');
  }

  get _contentElement() {
    return this._shadow.querySelector('slot[name="content"]');
  }

  _toggleableChangedCallback(oldValue, newValue) {
    if (newValue != undefined) {
      vl.accordion.dress(this._element);
      this._preventContentClickPropagation();
    }
  }

  _preventContentClickPropagation() {
    this._subtitleElement.addEventListener('click', (e) => e.stopPropagation());
    this._contentElement.addEventListener('click', (e) => e.stopPropagation());
  }
}

define('vl-info-tile', VlInfoTile);
