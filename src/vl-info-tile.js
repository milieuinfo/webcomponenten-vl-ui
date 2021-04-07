import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/@govflanders/vl-ui-util/dist/js/util.js';
import '/lib/accordion.js';

/**
 * VlInfoTile
 * @class
 * @classdesc
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-auto-open - Attribuut wordt gebruikt om de info tile bij rendering meteen te openen.
 * @property {boolean} data-vl-toggleable - Attribuut wordt gebruikt om mogelijk te maken dat de info tile geopend en gesloten kan worden.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-info-tile/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-info-tile/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-info-tile.html|Demo}
 *
 */
export class VlInfoTile extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['auto-open', 'toggleable'];
  }

  constructor() {
    super(`
      <style>
        @import '/src/style.css';
        @import '/node_modules/vl-ui-accordion/dist/style.css';
      </style>
      <div class="vl-info-tile">
        <header class="vl-info-tile__header" role="presentation">
          <div id="wrapper" class="vl-info-tile__header__wrapper">
            <h3 id="title" class="vl-info-tile__header__title">
              <slot name="title"></slot><slot name="title-label"></slot>
            </h3>
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

  connectedCallback() {
    this.__processAutoOpen();
    this.__processSlots();
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

  get _headerWrapperElement() {
    return this._element.querySelector('#wrapper');
  }

  get _titleElement() {
    return this._headerWrapperElement.querySelector('#title');
  }

  get _titleLabelSlot() {
    return this.querySelector('[slot=\'title-label\']');
  }

  get _titleLabelSlotElement() {
    return this._titleElement.querySelector('[name="title-label"]');
  }

  /**
   * Toggle de info-tile om deze te openen of sluiten.
   */
  toggle() {
    this._toggleElement.click();
  }

  /**
   * Open de info-tile als deze nog niet geopend werd.
   */
  open() {
    if (!this.isOpen) {
      this.toggle();
    }
  }

  /**
   * Sluit de info-tile als deze nog niet gesloten werd.
   */
  close() {
    if (this.isOpen) {
      this.toggle();
    }
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
      this.__prepareAccordionElements();
      vl.accordion.dress(this._element);
      this.__preventContentClickPropagation();
    }
  }

  __prepareAccordionElements() {
    this._element.classList.add('js-vl-accordion');
    const button = this._template(`
      <button class="vl-toggle vl-link vl-link--bold js-vl-accordion__toggle">
        <i class="vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
      </button>
    `).firstElementChild;
    button.appendChild(this._titleElement);
    this._headerWrapperElement.prepend(button);
  }

  __preventContentClickPropagation() {
    this._subtitleElement.addEventListener('click', (e) => e.stopPropagation());
    this._contentElement.addEventListener('click', (e) => e.stopPropagation());
  }

  __processAutoOpen() {
    if (this.isToggleable && this.dataset.vlAutoOpen != undefined) {
      this.open();
    }
  }

  __processSlots() {
    if (!this._titleLabelSlot) {
      this._titleLabelSlotElement.remove();
    }
  }
}

define('vl-info-tile', VlInfoTile);
