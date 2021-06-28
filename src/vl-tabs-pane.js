import {define, vlElement} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlTabsPane
 * @class
 * @classdesc De vl-tabs-pane is een verzameling van de vl-tab en vl-tab-section en zal deze componenten automatisch genereren.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-tabs/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-tabs/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-tabs.html|Demo}
 *
 */
export class VlTabsPane extends vlElement(HTMLElement) {
  static get is() {
    return 'vl-tabs-pane';
  }

  static get _observedAttributes() {
    return ['id', 'title'];
  }

  constructor() {
    super(`<slot></slot>`);
    this.__processTitleSlot();
  }

  disconnectedCallback() {
    if (this._observer) {
      this._observer.disconnect();
    }
  }

  get id() {
    return this.getAttribute('data-vl-id');
  }

  get title() {
    return this.getAttribute('data-vl-title') || '';
  }

  get titleSlot() {
    return this.querySelector('[slot="title"]');
  }

  __processTitleSlot() {
    if (this.titleSlot) {
      this.__moveTabPaneTitleSlot();
      this._observer = this.__observeTitleSlot(() => this.__moveTabPaneTitleSlot());
    }
  }

  __moveTabPaneTitleSlot() {
    const clone = this.titleSlot.cloneNode(true);
    clone.setAttribute('slot', `${this.id}-title-slot`);
    const slot = this.parentElement.querySelector(`[slot="${this.id}-title-slot"]`);
    if (slot) {
      this.parentElement.replaceChild(clone, slot);
    } else {
      this.parentElement.appendChild(clone);
    }
  }

  __observeTitleSlot(callback) {
    const observer = new MutationObserver((mutations) => callback(mutations));
    observer.observe(this.titleSlot, {childList: true, subtree: true, characterData: true});
    return observer;
  }
}

define(VlTabsPane.is, VlTabsPane);
