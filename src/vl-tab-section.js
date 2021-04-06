import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlTab
 * @class
 * @classdesc De vl-tab-section is een onderdeel van de vl-tabs dat de specifieke tab informatie bevat.
 *
 * @extends HTMLElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-tabs/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-tabs/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-tabs.html|Demo}
 *
 */
export class VlTabSection extends nativeVlElement(HTMLElement) {
  static get is() {
    return 'vl-tab-section';
  }

  constructor() {
    super();
    this._processClasses();
    this._processAttributes();
  }

  _processClasses() {
    this.classList.add('vl-col--1-1');
    this.classList.add('vl-tab__pane');
  }

  _processAttributes() {
    this.setAttribute('data-vl-tab-pane', '');
    this.setAttribute('tabindex', 0);
    this.setAttribute('role', 'tabpanel');
    this.setAttribute('hidden', 'hidden');
    this.setAttribute('aria-labelledby', `${this.id}-tab`);
  }
}

define(VlTabSection.is, VlTabSection, {extends: 'section'});
